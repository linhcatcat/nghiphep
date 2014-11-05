<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\UserType;
use Application\UserBundle\Entity\User;

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
			'users'	=>	$userService->filter($limit, $offset, $aFilters),
			'pagination'	=>	$this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalUser / $limit), array()),
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
				'gender' => $user->getGender(),
				'role' => $user->getRoles(),
			)
		);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$firstName = $form->get('first_name')->getData();
			$lastName = $form->get('last_name')->getData();
			$email = $form->get('email')->getData();
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
					'gender' => $gender,
					'role' => $form->get('role')->getData(),
					'user_plain_password' => $form->get('password')->getData(),
				);
				$userService->updateUser($user, $data);
				$this->get('session')->getFlashBag()->add('edit_user_successfully', $translator->trans('Your profile was saved'));

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
		$userService->deleteUser($user);
		$this->get('session')->getFlashBag()->add('delete_user_successfully', $translator->trans('Deleted successfully'));

		return $this->redirect($this->generateUrl('application_backend_user_index'));
	}
}