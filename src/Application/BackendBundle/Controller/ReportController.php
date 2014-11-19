<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\GroupType;
use Application\BackendBundle\Form\GroupUserType;
use Application\TaskBundle\Entity\Task;
use Application\UserBundle\Entity\Log;

class ReportController extends Controller {
	/**
	 * List report
	 * @author Alex <alex@likipe.se>
	 * @return view, array report
	 */
	//public function indexAction(Request $request) {
		/*$taskService = $this->get('application_task_service');
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$aFilters = array('id' => 'DESC');
		$totalTask = $taskService->count();
		$tasks = $taskService->filter( $limit, $offset, $aFilters );
		return $this->render('ApplicationBackendBundle:Task:index.html.twig',array(
			'tasks' => $tasks,
			'pagination' => $this->get("wincofood_pagination_service")->renderPaginations( $page, ceil($totalTask / $limit), array() )
		));*/
	//}

	/**
	 * List report
	 * @author Alex <alex@likipe.se>
	 * @return view, array user
	 */
	public function indexAction(Request $request) {
		$userService = $this->get('Application_user.service');
		//test
		/*$startDate = new \DateTime("2014-11-19");
		$startTime = '09:00';
		$endDate = new \DateTime("2014-11-24");
		$endTime = '13:30';
		var_dump($this->calculatorDay($startDate, $startTime, $endDate, $endTime));*/
		//end test
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$totalUser = $userService->count();
		$aFilters = array('id' => 'DESC');
		return $this->render('ApplicationBackendBundle:Report:index.html.twig',array(
			'users'	=> $userService->filter($limit, $offset, $aFilters),
			'pagination' => $this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalUser / $limit), array()),
		));
	}

	/**
	 * Export excel file
	 * @author Alex <alex@likipe.se>
	 * @return view, array user
	 */
	public function exportAction(Request $req) {
		if(false === $this->get('security.context')->isGranted('IS_AUTHENTICATED_FULLY')) {
			throw new AccessDeniedException();
		}
		$userService = $this->get('Application_user.service');
		$users = $userService->getRepository()->findAll();
		$excelService = $this->get('xls.service_xls5');
		// or $this->get('xls.service_pdf');
		// or create your own is easy just modify services.yml


		// create the object see http://phpexcel.codeplex.com documentation
		$excelService->excelObj->getProperties()->setCreator("Linh Tran")
							->setLastModifiedBy("Linh Tran")
							->setTitle("Office 2005 XLSX Test Document")
							->setSubject("Office 2005 XLSX Test Document")
							->setDescription("Test document for Office 2005 XLSX, generated using PHP classes.")
							->setKeywords("office 2005 openxml php")
							->setCategory("Test result file");
		$excelService->excelObj->setActiveSheetIndex(0)
					->setCellValue('A1', 'Username (Id)')
					->setCellValue('B1', 'First Name')
					->setCellValue('C1', 'Last Name')
					->setCellValue('D1', 'Email')
					->setCellValue('E1', 'Gender')
					->setCellValue('F1', 'Roles')
					->setCellValue('G1', 'Entitled (hour)')
					->setCellValue('H1', 'Taken (hour)')
					->setCellValue('I1', 'Balance (hour)');
		$row = 2;
		foreach ($users as $key => $user) {
			$roles = $user->getRoles();
			unset( $roles[array_search('ROLE_USER', $roles)] );
			$excelService->excelObj->setActiveSheetIndex(0)
					->setCellValue('A'.$row, $user->getUsername())
					->setCellValue('B'.$row, $user->getFirstName())
					->setCellValue('C'.$row, $user->getLastName())
					->setCellValue('D'.$row, $user->getEmail())
					->setCellValue('E'.$row, $user->getGender())
					->setCellValue('F'.$row, implode(', ', $roles))
					->setCellValue('G'.$row, $user->getEntitled())
					->setCellValue('H'.$row, $user->getTaken())
					->setCellValue('I'.$row, $user->balance());
			$row++;
		}
		$excelService->excelObj->getActiveSheet()->setTitle('Report');
		// Set active sheet index to the first sheet, so Excel opens this as the first sheet
		$excelService->excelObj->setActiveSheetIndex(0);

		//create the response
		$response = $excelService->getResponse();
		$response->headers->set('Content-Type', 'text/vnd.ms-excel; charset=utf-8');
		$response->headers->set('Content-Disposition', 'attachment;filename=report.xls');
		
		// If you are using a https connection, you have to set those two headers and use sendHeaders() for compatibility with IE <9
		$response->headers->set('Pragma', 'public');
		$response->headers->set('Cache-Control', 'maxage=1');
		$response->sendHeaders();

		//log
		$em = $this->getDoctrine()->getManager();
		$user = $this->container->get('security.context')->getToken()->getUser();
		$log = new Log('Export', 'Export '. $row .' Users', $user);
		$em->persist( $log );
		$em->flush();
		//End log

		return $response;
	}

	/**
	 * Export excel file
	 * @author Alex <alex@likipe.se>
	 * @return view, array user
	 */
	public function exportDayAction(Request $req) {
		if(false === $this->get('security.context')->isGranted('IS_AUTHENTICATED_FULLY')) {
			throw new AccessDeniedException();
		}
		$userService = $this->get('Application_user.service');
		$users = $userService->getRepository()->findAll();
		$excelService = $this->get('xls.service_xls5');
		// or $this->get('xls.service_pdf');
		// or create your own is easy just modify services.yml


		// create the object see http://phpexcel.codeplex.com documentation
		$excelService->excelObj->getProperties()->setCreator("Linh Tran")
							->setLastModifiedBy("Linh Tran")
							->setTitle("Office 2005 XLSX Test Document")
							->setSubject("Office 2005 XLSX Test Document")
							->setDescription("Test document for Office 2005 XLSX, generated using PHP classes.")
							->setKeywords("office 2005 openxml php")
							->setCategory("Test result file");
		$excelService->excelObj->setActiveSheetIndex(0)
					->setCellValue('A1', 'Username (Id)')
					->setCellValue('B1', 'First Name')
					->setCellValue('C1', 'Last Name')
					->setCellValue('D1', 'Email')
					->setCellValue('E1', 'Gender')
					->setCellValue('F1', 'Roles')
					->setCellValue('G1', 'Entitled (hour)')
					->setCellValue('H1', 'Taken (hour)')
					->setCellValue('I1', 'Balance (hour)');
		$row = 2;
		foreach ($users as $key => $user) {
			$roles = $user->getRoles();
			unset( $roles[array_search('ROLE_USER', $roles)] );
			$excelService->excelObj->setActiveSheetIndex(0)
					->setCellValue('A'.$row, $user->getUsername())
					->setCellValue('B'.$row, $user->getFirstName())
					->setCellValue('C'.$row, $user->getLastName())
					->setCellValue('D'.$row, $user->getEmail())
					->setCellValue('E'.$row, $user->getGender())
					->setCellValue('F'.$row, implode(', ', $roles))
					->setCellValue('G'.$row, $user->getEntitled())
					->setCellValue('H'.$row, $user->getTaken())
					->setCellValue('I'.$row, $user->balance());
			$row++;
		}
		$excelService->excelObj->getActiveSheet()->setTitle('Report');
		// Set active sheet index to the first sheet, so Excel opens this as the first sheet
		$excelService->excelObj->setActiveSheetIndex(0);

		//create the response
		$response = $excelService->getResponse();
		$response->headers->set('Content-Type', 'text/vnd.ms-excel; charset=utf-8');
		$response->headers->set('Content-Disposition', 'attachment;filename=report.xls');
		
		// If you are using a https connection, you have to set those two headers and use sendHeaders() for compatibility with IE <9
		$response->headers->set('Pragma', 'public');
		$response->headers->set('Cache-Control', 'maxage=1');
		$response->sendHeaders();

		//log
		$em = $this->getDoctrine()->getManager();
		$user = $this->container->get('security.context')->getToken()->getUser();
		$log = new Log('Export', 'Export '. $row .' Users', $user);
		$em->persist( $log );
		$em->flush();
		//End log

		return $response;
	}

	private function calculatorDay($startDate, $startTime, $endDate, $endTime) {
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
		$taskInfo = array();
		$startDate = $startDate->getTimestamp();
		$endDate = $endDate->getTimestamp();
		if( date("w", $startDate) == 6 ){
			$timeEnd = '12:00';
		}
		if( $startDate == $endDate ) {
			$taskInfo[] = array(
				'start' => date('Y-m-d', $startDate). ' ' .$startTime,
				'end' => date('Y-m-d', $endDate). ' ' .$endTime,
				'hour' => ($endTimeArr[$endTime] - $startTimeArr[$startTime])/60
			);
		} else {
			$taskInfo[] = array(
				'start' => date('Y-m-d', $startDate). ' ' .$startTime,
				'end' => date('Y-m-d', $startDate). ' ' .$timeEnd,
				'hour' => ($endTimeArr[$timeEnd] - $startTimeArr[$startTime])/60
			);
			$startDate = $startDate + 86400;
			while($startDate < $endDate) {
				$w = date("w", $startDate);
				if( $w ){
					if( $w == 6 ) {
						$timeEnd = '12:00';
						$taskInfo[] = array(
							'start' => date('Y-m-d', $startDate). ' ' .$timeStart,
							'end' => date('Y-m-d', $startDate). ' ' .$timeEnd,
							'hour' => 4
						);
					} else {
						$taskInfo[] = array(
							'start' => date('Y-m-d', $startDate). ' ' .$timeStart,
							'end' => date('Y-m-d', $startDate). ' ' .$timeEnd,
							'hour' => 8
						);
					}
				}
				$startDate = $startDate + 86400;
			}
			$taskInfo[] = array(
				'start' => date('Y-m-d', $endDate). ' ' .$timeStart,
				'end' => date('Y-m-d', $endDate). ' ' .$endTime,
				'hour' => ($endTimeArr[$endTime] - $endTimeArr[$timeStart])/60
			);
			
		}
		return $taskInfo;
	}
}