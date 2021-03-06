<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Application\BackendBundle\Form\UserType;
use Application\UserBundle\Entity\User;
use Application\UserBundle\Entity\Log;

class UserController extends Controller
{
	/**
	 * List User
	 * @author Alex <alex@likipe.se>
	 * @return view, array product
	 */
	public function indexAction(Request $request) {
		$user = $this->container->get('security.context')->getToken()->getUser();
		$userService = $this->get('Application_user.service');
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$totalUser = $userService->count();
		$aFilters = array('id' => 'DESC');
		return $this->render('ApplicationBackendBundle:User:index.html.twig',array(
			'users'	=> $userService->filter($limit, $offset, $aFilters),
			'pagination' => $this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalUser / $limit), array()),
		));
	}

	/**
	 * Edit user
	 * @author Alex <alex@likipe.se>
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @param int $userID
	 * @return view
	 * @throws type
	 */
	public function editAction(Request $request, $userID) {
		$userService = $this->get('Application_user.service');
		$userManagerService = $this->get('fos_user.user_manager');
		$translator = $this->get('translator');
		
		$user = $userManagerService->findUserBy(array('id' => $userID));
		if (empty($user)) {
			throw $this->createNotFoundException($translator->trans('No user found for id ' . $userID));
		}
		
		$form = $this->createForm(
			new UserType(false), array(),
			array(
				'first_name' => $user->getFirstName(),
				'last_name' => $user->getLastName(),
				'username' => $user->getUsername(),
				'email' => $user->getEmail(),
				'entitled' => $user->getEntitled(),
				'gender' => $user->getGender(),
				'role' => $user->getRoles(),
			)
		);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$firstName = $form->get('first_name')->getData();
			$lastName = $form->get('last_name')->getData();
			$email = $form->get('email')->getData();
			$entitled = $form->get('entitled')->getData();
			$gender = $form->get('gender')->getData();
			$username = $form->get('username')->getData();
			$userByEmail = $userManagerService->findUserByEmail($email);
			if (!empty($userByEmail) && (int)$userID !== $userByEmail->getId()) {
				$this->get('session')->getFlashBag()->add('add_user_error', $translator->trans('This email is existing in system'));
			} else {
				$data = array(
					'first_name' => $firstName,
					'last_name' => $lastName,
					'username' => $username,
					'email' => $email,
					'entitled' => $entitled,
					'gender' => $gender,
					'role' => $form->get('role')->getData(),
					'user_plain_password' => $form->get('password')->getData(),
				);
				$userService->updateUser($user, $data);

				//log
				$em = $this->getDoctrine()->getManager();
				$currentUser = $this->container->get('security.context')->getToken()->getUser();
				$log = new Log('Update', 'Update '. $username .' with id = '. $user->getId(), $currentUser);
				$em->persist( $log );
				$em->flush();
				//End log

				$this->get('session')->getFlashBag()->add('edit_user_successfully', $translator->trans('User info was saved'));

				return $this->redirect($this->generateUrl('application_backend_user_index'));
			}
		}
		
		return $this->render('ApplicationBackendBundle:User:edit.html.twig', array(
			'form' => $form->createView(),
		));
	}

	/**
	 * Add new user
	 * @author Alex <alex@likipe.se>
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return view
	 */
	public function addAction(Request $request) {
		$userService = $this->get('Application_user.service');
		$userManagerService = $this->get('fos_user.user_manager');
		$translator = $this->get('translator');
		
		$form = $this->createForm(
			new UserType(), array()
		);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$username = $form->get('username')->getData();
			$email = $form->get('email')->getData();
			$entitled = $form->get('entitled')->getData();
			$firstName = $form->get('first_name')->getData();
			$lastName = $form->get('last_name')->getData();
			$gender = $form->get('gender')->getData();
			$user = $userManagerService->findUserByEmail($email);
			if (!empty($user)) {
				$this->get('session')->getFlashBag()->add('add_user_error', $translator->trans('This email is existing in system'));
			} else {
				$data = array(
					'first_name' => $firstName,
					'last_name' => $lastName,
					'username' => $username,
					'email' => $email,
					'entitled' => $entitled,
					'gender' => $gender,
					'role' => $form->get('role')->getData(),
					'user_plain_password' => $form->get('password')->getData(),
				);
				$userService->insertUser($data);
				$this->get('session')->getFlashBag()->add('add_user_successfully', $translator->trans('You registered a new user successfully'));

				return $this->redirect($this->generateUrl('application_backend_user_index'));
			}
		}
		
		return $this->render('ApplicationBackendBundle:User:add.html.twig', array(
			'form' => $form->createView(),
		));
	}

	/**
	 * Delete user
	 * @author Alex <alex@likipe.se>
	 * @param int $userID
	 * @return redirect
	 * @throws type
	 */
	public function deleteAction($userID) {
		$userService = $this->get('Application_user.service');
		$userManagerService = $this->get('fos_user.user_manager');
		$translator = $this->get('translator');
		
		$user = $userManagerService->findUserBy(array('id' => $userID));
		if (empty($user)) {
			throw $this->createNotFoundException($translator->trans('No user found for id ' . $userID));
		}
		//$userService->deleteUser($user);
		$user->setLocked(1);
		$userManagerService->updateUser($user);
		$this->get('session')->getFlashBag()->add('delete_user_successfully', $translator->trans('Deleted successfully'));

		return $this->redirect($this->generateUrl('application_backend_user_index'));
	}

	public function importAction(Request $req) {
		if(false === $this->get('security.context')->isGranted('IS_AUTHENTICATED_FULLY')) {
			throw new AccessDeniedException();
		}
		$translator = $this->get('translator');
		$userService = $this->get('Application_user.service');
		
		$request = $this->getRequest();

		/* @var UploadedFile */
		$uploadedFile = $request->files->get('userFile');
		//$this->get('xls.service_xls2007');
		//xls.service_xls2007
		//xls.load_xls5
		$excelObj = $this->get('xls.load_xls5')->load($uploadedFile->getPathname());
		$sheetDatas = $excelObj->getActiveSheet()->toArray();
		array_shift($sheetDatas);
		$count = 0;
		$userExist = array();
		foreach ($sheetDatas as $sheetData) {
			$data = array(
				'first_name' => $sheetData[2],
				'last_name' => $sheetData[3],
				'username' => $sheetData[0],
				'email' => $sheetData[5],
				'entitled' => $sheetData[7],
				'gender' => $sheetData[4],
				'role' => array($sheetData[6] => $sheetData[6]),
				'user_plain_password' => $sheetData[1],
			);
			if( $userService->checkUserExist( $sheetData[0] ) ) {
				$userExist[] = $sheetData[0];
			} else {
				$userService->insertUser($data);
				$count++;
			}
		}
		if( count($userExist) ) {
			$this->get('session')->getFlashBag()->add('import_user_successfully', $translator->trans('Username ('. implode(', ', $userExist) .') existed'));
		}
		if( $count ) {
			if( count($userExist) ) {
				$this->get('session')->getFlashBag()->add('import_user_successfully', $translator->trans('<br/>Import '. $count .' users successfully'));
			} else {
				$this->get('session')->getFlashBag()->add('import_user_successfully', $translator->trans('Import '. $count .' users successfully'));
			}
		}
		return $this->redirect($this->generateUrl('application_backend_index'));
	}
}