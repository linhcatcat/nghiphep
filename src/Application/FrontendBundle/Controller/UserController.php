<?php

namespace Application\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Application\UserBundle\Entity\User;
use Application\UserBundle\Entity\Log;

class UserController extends Controller
{
	/**
	 * List User
	 * @author Alex <alex@likipe.se>
	 * @return view, array user
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
			'users'	=> $userService->filter($limit, $offset, $aFilters),
			'pagination' => $this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalUser / $limit), array()),
		));
	}

	public function loadAction(Request $req){
		$data = $req->request->all();
		$userService = $this->get('Application_user.service');
		$users = $userService->loadUser(trim($data['username']));
		$aUsers = array();

		foreach ($users as $key=>$user) {
			$aUsers[] = array(
				'value' => $user->getUsername().' - '. $user->getName() .' - '. $user->getEmail(),
				'username' => $user->getUsername(),
				'name' => $user->getName(),
				'email' => $user->getEmail()
			);
		}
		return new Response(json_encode($aUsers), 200);
	}
}