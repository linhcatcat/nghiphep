<?php

namespace Application\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
			$userService = $this->get('Application_user.service');
			$user = $this->container->get('security.context')->getToken()->getUser();
			$timeStart = '08:00';
			$timeEnd = '17:00';
			$startTimeArr = array(
				'08:00' => 0, '08:30' => 30, '09:00' => 60,'09:30' => 90,
				'10:00' => 120, '10:30' => 150, '11:00' => 180, '11:30' => 210,
				'13:00' => 240, '13:30' => 270, '14:00' => 300, '14:30' => 330,
				'15:00' => 360, '15:30' => 390, '16:00' => 420, '16:30' => 450,
			);
			$endTimeArr = array(
				'08:00' => 0, '08:30' => 30, '09:00' => 60, '09:30' => 90,
				'10:00' => 120, '10:30' => 150, '11:00' => 180, '11:30' => 210,
				'12:00' => 240, '13:30' => 270, '14:00' => 300, '14:30' => 330,
				'15:00' => 360, '15:30' => 390, '16:00' => 420, '16:30' => 450,
				'17:00' => 480,
			);
			$translator = $this->get('translator');
			$task = new Task();
			$users = array();
			$users[$user->getId()] = $user->getUsername() .' - '. $user->getFirstName() .' '. $user->getLastName();
			if( $securityContext->isGranted('ROLE_EMPLOYEE') ) {
				$users[$user->getId()] = $user->getUsername() .' - '. $user->getFirstName() .' '. $user->getLastName();
			} elseif( $securityContext->isGranted('ROLE_BOSS') ) {
				$groupService = $this->get('application_group_service');
				$groups = $groupService->findByUser($user);
				foreach ($groups as $group) {
					foreach ($group->getMembers() as $member) {
						$users[$member->getUser()->getId()] = $member->getUser()->getUsername() .' - '. $member->getUser()->getFirstName() .' '.$member->getUser()->getLastName();
					}
				}
			} else {
				
				$allUser = $userService->getRepository()->findAll();
				foreach ($allUser as $user) {
					$users[$user->getId()] = $user->getUsername() .' - '. $user->getFirstName() .' '. $user->getLastName();
				}
			}
			$task->setOwner( $user );
			$form = $this->createForm(new TaskType( $users ), $task);
			$form->handleRequest($request);
			if ($form->isValid()) {
				$em = $this->getDoctrine()->getManager();
				$startTime = $request->get('txtStartTime');;
				$endTime = $request->get('txtEndTime');
				$task->setStartTime( $startTime )->setEndTime( $endTime );
				$startDate = $task->getStart()->getTimestamp();
				$endDate = $task->getEnd()->getTimestamp();
				$task->setUser( $userService->getRepository()->find($task->getUser()) );
				$hour = 0;
				if( date("w", $startDate) == 6 ){
					$timeEnd = '12:00';
				}
				if( $startDate < $endDate ) {
					$hour = $hour + ($endTimeArr[$timeEnd] - $startTimeArr[$startTime])/60;
					$hour = $hour + ($endTimeArr[$endTime] - $endTimeArr[$timeStart])/60;
					$hour = $hour + $this->calculatorTime($startDate, $endDate);
				} else {
					$hour = $hour + ($endTimeArr[$endTime] - $startTimeArr[$startTime])/60;
				}
				$task->setHour( $hour );
				$task->setStatus( 0 );
				$task->setLeaveType((int)$task->getLeaveType());
				$em->persist($task);
				$em->flush();
				if( $hour < 2 ) {
					$this->get('session')->getFlashBag()->add('add_task_error', $translator->trans('Giờ nghỉ tối thiểu phải lớn hơn hoặc bằng 2 giờ!'));
				} else {
					$this->get('session')->getFlashBag()->add('add_task_successfully', $translator->trans('Bạn đã gởi đơn thành công, vui lòng chờ duyệt!'));
					return $this->redirect($this->generateUrl('application_frontend_task_index'));
				}
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
			$taskService = $this->get('application_task_service');
			$page = (int) $request->query->get('page', 1);
			$limit = $this->container->getParameter('limit_items_per_page');
			$offset = $limit * ($page - 1);
			$aFilters = array('id' => 'DESC');
			$groupService = $this->get('application_group_service');
			$roleFlag = true;
			if( $securityContext->isGranted('ROLE_EMPLOYEE') ) {
				$roleFlag = false;
				$totalTask = $taskService->countByUser( $user );
				$tasks = $taskService->filterByUser( $limit, $offset, $aFilters, $user );
			} elseif( $securityContext->isGranted('ROLE_BOSS') ) {
				$groups = $groupService->findByUser($user);
				$userIds = array();
				foreach ($groups as $group) {
					foreach ($group->getMembers() as $member) {
						$userIds[] = $member->getUser()->getId();
					}
				}
				$totalTask = $taskService->countByUserIds( $userIds );
				$tasks = $taskService->filterByUserIds( $limit, $offset, $aFilters, $userIds );
			} else {
				$totalTask = $taskService->count();
				$tasks = $taskService->filter( $limit, $offset, $aFilters );
			}

			return $this->render('ApplicationFrontendBundle:Task:task.html.twig', array(
				'roleFlag' => $roleFlag,
				'user' => $user,
				'tasks' => $tasks,
				'pagination' => $this->get("wincofood_pagination_service")->renderPaginations( $page, ceil($totalTask / $limit), array() )
			));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_login'));
		}
	}

	public function confirmAction(Request $req) {
		if(false === $this->get('security.context')->isGranted('IS_AUTHENTICATED_FULLY')) {
			throw new AccessDeniedException();
		}
		$taskService = $this->get('application_task_service');
		$data = $req->request->all();
		$id = $data['id'];
		$task = $taskService->find($id);
		$task->setStatus( 1 );
		$taskService->update();
		return new Response(json_encode(array('type' => 'Đã duyệt', 'data' => $data)), 200);
	}
}
