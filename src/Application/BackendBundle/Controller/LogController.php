<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\GroupType;
use Application\BackendBundle\Form\GroupUserType;
use Application\TaskBundle\Entity\Task;

class LogController extends Controller {
	/**
	 * List Log
	 * @author Alex <alex@likipe.se>
	 * @return view, array log
	 */
	public function indexAction(Request $request) {
		$logService = $this->get('application_log_service');
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$totalUser = $logService->count();
		$aFilters = array('id' => 'DESC');
		return $this->render('ApplicationBackendBundle:Log:index.html.twig',array(
			'logs'	=> $logService->filter($limit, $offset, $aFilters),
			'pagination' => $this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalUser / $limit), array()),
		));
	}
}