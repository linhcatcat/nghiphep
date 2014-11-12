<?php

namespace Application\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Application\FrontendBundle\Form\TaskType;
use Application\TaskBundle\Entity\Task;
use Application\FrontendBundle\Form\UserType;
use Application\UserBundle\Entity\User;

class TaskController extends Controller
{
	private function calculatorTime($startDate, $endDate) {
		$startDate = $startDate + 86400;
		$time = 0;
		while($startDate < $endDate) {
			$w = date("w", $startDate);
			if( $w ){
				if( $w == 6 ) {
					$time = $time + 4;
				} else {
					$time = $time + 8;
				}
			}
			$startDate = $startDate + 86400;
		}
		return $time;
	}
	public function indexAction(Request $request)
	{
		$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
			$user = $this->container->get('security.context')->getToken()->getUser();
			$startDate = strtotime('2014-11-05');
			$startTime = '08:00';
			//---------
			$timeStart = '08:00';
			$timeEnd = '17:00';
			$startTimeArr = array(
				'08:00' => 0, '08:30' => 30, '09:00' => 60,'09:30' => 90,
				'10:00' => 120, '10:30' => 150, '11:00' => 180, '11:30' => 210,
				'13:00' => 240, '13:30' => 270, '14:00' => 300, '14:30' => 330,
				'15:00' => 360, '15:30' => 390, '16:00' => 420, '16:30' => 450,
			);
			$endDate = strtotime('2014-11-05');
			$endTimeArr = array(
				'08:00' => 0, '08:30' => 30, '09:00' => 60, '09:30' => 90,
				'10:00' => 120, '10:30' => 150, '11:00' => 180, '11:30' => 210,
				'12:00' => 240, '13:30' => 270, '14:00' => 300, '14:30' => 330,
				'15:00' => 360, '15:30' => 390, '16:00' => 420, '16:30' => 450,
				'17:00' => 480,
			);
			$endTime = '08:00';
			if( $startDate < $endDate ) {
				$time1 = $endTimeArr[$timeEnd] - $startTimeArr[$startTime];
				$time2 = $endTimeArr[$endTime] - $endTimeArr[$timeStart];
				/*var_dump($time1);
				var_dump('-');
				var_dump($time2);
				var_dump('-');
				var_dump($time1 + $time2 );
				var_dump($this->calculatorTime($startDate, $endDate));*/
			} else {
				$time = $endTimeArr[$endTime] - $startTimeArr[$startTime];
				//var_dump($time);
			}
			//var_dump(date("Y-m-d H:i:s w", strtotime('2014-11-08')));

			
			/*$txtStartDate = $request->get('txtStartDate');
			$txtEndDate = $request->get('txtEndDate');
			if( $txtStartDate && $txtEndDate){
				var_dump($txtEndDate);
				var_dump($txtStartDate);exit();
			}*/
			$translator = $this->get('translator');
			$task = new Task();
			$task->setUser( $user );
			$form = $this->createForm(new TaskType(), $task);
			$form->handleRequest($request);
			if ($form->isValid()) {
				$em = $this->getDoctrine()->getManager();
				$startTime = $request->get('txtStartTime');
				$endTime = $request->get('txtEndTime');
				
				var_dump($startTime);
				var_dump($endTime);
				exit();
				$em->persist($task);
				$em->flush();
				$this->get('session')->getFlashBag()->add('add_task_successfully', $translator->trans('You leave application successfully'));
				return $this->redirect($this->generateUrl('application_frontend_homepage'));
			}
			return $this->render('ApplicationFrontendBundle:Task:index.html.twig', array(
				'user' => $user,
				'form' => $form->createView()
			));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_task_index'));
		}
	}

	/**
	 * Edit user
	 * @author Alex <alex@likipe.se>
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @param int $userID
	 * @return view
	 * @throws type
	 */
	public function editUserAction(Request $request, $userID) {
		$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
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
						'role' => $user->getRoles(),
						'user_plain_password' => $form->get('password')->getData(),
					);
					$userService->updateUser($user, $data);
					$this->get('session')->getFlashBag()->add('edit_user_successfully', $translator->trans('Thay đổi thông tin cá nhân thành công'));

					return $this->redirect($this->generateUrl('application_frontend_homepage'));
				}
			}
			
			return $this->render('ApplicationFrontendBundle:Task:user.html.twig', array(
				'form' => $form->createView(),
			));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_login'));
		}
	}

	public function taskAction(Request $request)
	{
		$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
			$user = $this->container->get('security.context')->getToken()->getUser();
			return $this->render('ApplicationFrontendBundle:Task:task.html.twig', array(
				'user' => $user,
				'groups' => array()
			));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_login'));
		}
	}
}