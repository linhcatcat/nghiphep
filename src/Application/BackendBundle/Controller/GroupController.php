<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\GroupType;
use Application\UserBundle\Entity\Group;

class GroupController extends Controller
{
	/**
	 * List Product
	 * @author Alex <alex@likipe.se>
	 * @return view, array group
	 */
	public function indexAction(Request $request) {
		$groupService = $this->get('application_group_service');
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$totalGroup = $groupService->count();
		$aFilters = array('id' => 'DESC');
		return $this->render('ApplicationBackendBundle:Group:index.html.twig',array(
			'groups'	=>	$groupService->filter($limit, $offset, $aFilters),
			'pagination'	=>	$this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalGroup / $limit), array()),
		));
	}

	/**
	 * Add new group
	 * @author Alex <alex@likipe.se>
	 * @return form
	 */
	public function addAction(Request $request) {
		$translator = $this->get('translator');
		$group = new Group();
		
		$form = $this->createForm(new GroupType(), $group);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$em = $this->getDoctrine()->getEntityManager();
			$em->persist($group);
			$em->flush();
			$this->get('session')->getFlashBag()->add('add_group_successfully', $translator->trans('Add ' . $group->getName() . ' successfully'));
			return $this->redirect($this->generateUrl('application_backend_group_index'));
		}
		
		return $this->render('ApplicationBackendBundle:Group:add.html.twig', array(
			'form'	=>	$form->createView(),
		));
	}
}