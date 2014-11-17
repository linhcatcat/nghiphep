<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\GroupType;
use Application\BackendBundle\Form\GroupUserType;
use Application\FrontendBundle\Form\TaskType;
use Application\TaskBundle\Entity\Task;

class TaskController extends Controller {
	/**
	 * List task
	 * @author Alex <alex@likipe.se>
	 * @return view, array task
	 */
	public function indexAction(Request $request) {
		$taskService = $this->get('application_task_service');
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$aFilters = array('id' => 'DESC');
		$totalTask = $taskService->count();
		$tasks = $taskService->filter( $limit, $offset, $aFilters );
		return $this->render('ApplicationBackendBundle:Task:index.html.twig',array(
			'tasks' => $tasks,
			'pagination' => $this->get("wincofood_pagination_service")->renderPaginations( $page, ceil($totalTask / $limit), array() )
		));
	}

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
	public function addAction(Request $request)
	{
		$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
			$userService = $this->get('Application_user.service');
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
						$userManage->updateUser( $userReg );
						$em->persist($task);
						$em->flush();
						$this->get('session')->getFlashBag()->add('add_task_successfully', $translator->trans('Bạn đã gởi đơn thành công cho '. $userReg->getUsername() .' - '. $userReg->getFirstName() .' '. $userReg->getLastName() .'!'));
						return $this->redirect($this->generateUrl('application_backend_task_index'));
					}
				}
				return $this->redirect($this->generateUrl('application_backend_task_index'));
			}
			return $this->render('ApplicationBackendBundle:Task:add.html.twig', array(
				'user' => $currentUser,
				'form' => $form->createView()
			));
		} else {
			return $this->redirect($this->generateUrl('application_backend_task_index'));
		}
	}
}