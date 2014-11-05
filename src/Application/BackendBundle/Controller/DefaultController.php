<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
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
}
