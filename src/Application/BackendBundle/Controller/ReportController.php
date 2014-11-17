<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\GroupType;
use Application\BackendBundle\Form\GroupUserType;
use Application\TaskBundle\Entity\Task;

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
	 * List User
	 * @author Alex <alex@likipe.se>
	 * @return view, array user
	 */
	public function indexAction(Request $request) {
		$userService = $this->get('Application_user.service');
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
		return $response;
	}
}