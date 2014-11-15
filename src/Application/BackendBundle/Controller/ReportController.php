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
	public function indexAction(Request $request) {
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
	}
}