<?php

namespace Application\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
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
			/*$mailService = $this->get('wincofood_mail_service');
			$body = $this->renderView('ApplicationFrontendBundle:Email:test.html.twig',array('data' => 'Hello Chao'));
			$rs = $mailService->send('Test 123456', $body, 'From name', 'trancatlinh@gmail.com', 'To name', 'trancatlinh@gmail.com');
			var_dump($rs);*/

			

			$flag = true;
			if($securityContext->isGranted('ROLE_EMPLOYEE')){
				$flag = false;
			}
			$userService = $this->get('Application_user.service');
			$taskService = $this->get('application_task_service');
			$currentUser = $this->container->get('security.context')->getToken()->getUser();
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
			$users[$currentUser->getId()] = $currentUser->getUsername() .' - '. $currentUser->getFirstName() .' '. $currentUser->getLastName();
			if( $securityContext->isGranted('ROLE_EMPLOYEE') ) {
				$users[$currentUser->getId()] = $currentUser->getUsername() .' - '. $currentUser->getFirstName() .' '. $currentUser->getLastName();
			} elseif( $securityContext->isGranted('ROLE_BOSS') ) {
				$groupService = $this->get('application_group_service');
				$groups = $groupService->findByUser($currentUser);
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
			$task->setOwner( $currentUser );
			$form = $this->createForm(new TaskType( $users ), $task);
			$form->handleRequest($request);
			if ($form->isValid()) {
				$em = $this->getDoctrine()->getManager();
				$userManage = $this->get('fos_user.user_manager');
				$startTime = $request->get('txtStartTime');;
				$endTime = $request->get('txtEndTime');
				$task->setStartTime( $startTime )->setEndTime( $endTime );
				$startDate = $task->getStart()->getTimestamp();
				$endDate = $task->getEnd()->getTimestamp();
				$userReg = $userService->getRepository()->find($task->getUser());
				$task->setUser( $userReg );
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
				
				
				if( $hour < 2 ) {
					$this->get('session')->getFlashBag()->add('add_task_error', $translator->trans('Giờ nghỉ tối thiểu phải lớn hơn hoặc bằng 2 giờ!'));
				} else {
					if( ($hour + $userReg->getPending()) > $userReg->balance() ) {

						if( $userReg->getPending() ) {
							$total = $hour + $userReg->getPending();
							$this->get('session')->getFlashBag()
							->add('add_task_error', $translator->trans('Giờ đăng ký ' . $hour . ' + giờ đang chờ duyệt '. $userReg->getPending() .' = '. $total . ' không được lơn giờ còn lại '.$userReg->balance().'!'));
						} else {
							$this->get('session')->getFlashBag()
							->add('add_task_error', $translator->trans('Giờ đăng ký ' . $hour . ' không được lơn giờ còn lại '.$userReg->balance().'!'));
						}
						
					} else {
						$userReg->setPending($hour + $userReg->getPending());
						$result = $taskService->checkTaskExisted(date('Y-m-d ', $startDate).$startTime.':00', date('Y-m-d ', $endDate).$endTime.':00', $currentUser);
						if($result['result']) {
							$this->get('session')->getFlashBag()
							->add('add_task_error', $translator->trans('Bạn đã đăng ký từ ngày '.$result['from'].' đến ngày '.$result['to']));
							return $this->redirect($this->generateUrl('application_frontend_homepage'));
						} else {
							$userManage->updateUser( $userReg );
							$em->persist($task);
							$em->flush();
						}
						
						if( $currentUser->getId() == $task->getUser()->getId() ) {
							$this->get('session')->getFlashBag()->add('add_task_successfully', $translator->trans('Bạn đã gởi đơn thành công, vui lòng chờ duyệt!'));
							return $this->redirect($this->generateUrl('application_frontend_task_index'));
						} else {
							$this->get('session')->getFlashBag()->add('add_task_successfully', $translator->trans('Bạn đã gởi đơn hộ thành công, vui lòng chờ duyệt!'));
							return $this->redirect($this->generateUrl('application_frontend_task_manage'));
						}
					}
				}
				return $this->redirect($this->generateUrl('application_frontend_homepage'));
			}
			return $this->render('ApplicationFrontendBundle:Task:index.html.twig', array(
				'flag' => $flag,
				'user' => $currentUser,
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
			$flag = true;
			if($securityContext->isGranted('ROLE_EMPLOYEE')){
				$flag = false;
			}
			$userManagerService = $this->get('fos_user.user_manager');
			$currentUser = $securityContext->getToken()->getUser();
			$user = $userManagerService->findUserBy(array('id' => $userID));
			$userService = $this->get('Application_user.service');
			$translator = $this->get('translator');
			if (empty($user)) {
				throw $this->createNotFoundException($translator->trans('No user found for id ' . $userID));
			}
			if( $currentUser->getId() != $user->getId() ){
				throw new AccessDeniedException();
				//throw $this->createAccessDeniedException('Unable to access this page!');
				//use Symfony\Component\Security\Core\Exception\AccessDeniedException;
				//throw new AccessDeniedException();
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
				'flag' => $flag,
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
			$flag = true;
			if($securityContext->isGranted('ROLE_EMPLOYEE')){
				$flag = false;
			}
			$user = $this->container->get('security.context')->getToken()->getUser();
			$taskService = $this->get('application_task_service');
			$page = (int) $request->query->get('page', 1);
			$limit = $this->container->getParameter('limit_items_per_page');
			$offset = $limit * ($page - 1);
			$aFilters = array('id' => 'DESC');
			$totalTask = $taskService->countByUser( $user );
			$tasks = $taskService->filterByUser( $limit, $offset, $aFilters, $user );

			return $this->render('ApplicationFrontendBundle:Task:task.html.twig', array(
				'flag' => $flag,
				'user' => $user,
				'tasks' => $tasks,
				'pagination' => $this->get("wincofood_pagination_service")->renderPaginations( $page, ceil($totalTask / $limit), array() )
			));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_login'));
		}
	}

	public function taskManageAction(Request $request)
	{
		$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
			if($securityContext->isGranted('ROLE_EMPLOYEE')){
				throw new AccessDeniedException();
			}
			$user = $this->container->get('security.context')->getToken()->getUser();
			$taskService = $this->get('application_task_service');
			$page = (int) $request->query->get('page', 1);
			$limit = $this->container->getParameter('limit_items_per_page');
			$offset = $limit * ($page - 1);
			$aFilters = array('id' => 'DESC');
			$groupService = $this->get('application_group_service');
			if( $securityContext->isGranted('ROLE_BOSS') ) {
				$groups = $groupService->findByUser($user);
				$userIds = array();
				foreach ($groups as $group) {
					foreach ($group->getMembers() as $member) {
						if( $user->getId() != $member->getUser()->getId() ){
							$userIds[] = $member->getUser()->getId();
						}
					}
				}
				$totalTask = $taskService->countByUserIds( $userIds );
				$tasks = $taskService->filterByUserIds( $limit, $offset, $aFilters, $userIds );
			} else {
				$totalTask = $taskService->count();
				$tasks = $taskService->filter( $limit, $offset, $aFilters );
			}

			return $this->render('ApplicationFrontendBundle:Task:manage.html.twig', array(
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
		if($this->get('security.context')->isGranted('ROLE_EMPLOYEE')){
			throw new AccessDeniedException();
		}
		$currentUser = $this->container->get('security.context')->getToken()->getUser();
		$taskService = $this->get('application_task_service');
		$userManage = $this->get('fos_user.user_manager');
		
		$data = $req->request->all();
		$id = $data['id'];
		$task = $taskService->find($id);
		$task->setStatus( 1 );
		$task->setApprove( $currentUser );
		$task->setApproveDate();
		$userReg = $task->getUser();
		$userReg->setPending( $userReg->getPending() - $task->getHour() ) ;
		$userReg->setTaken( $userReg->getTaken() + $task->getHour() );
		$userManage->updateUser( $userReg );
		$rs = $taskService->update( $task );
		if( $rs ) {
			return new Response(json_encode(array('result' => 1, 'type' => $task->trangThai(), 'approve-date' => $task->getApproveDate()->format('Y-m-d h:i:s'), 'approve' => $currentUser->getFirstName().' '.$currentUser->getLastName())), 200);
		} else {
			return new Response(json_encode(array('result' => 0, 'data' => 'Đã có lỗi xảy ra')), 300);
		}
	}
}
