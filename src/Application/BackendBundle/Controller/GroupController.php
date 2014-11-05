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

	/**
	 * Edit cms page
	 * @author Alex <alex@likipe.se>
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @param int $groupID
	 * @return form
	 */
	public function editAction(Request $request, $groupID) {
		$groupService = $this->get('application_group_service');
		$translator = $this->get('translator');

		$group = $groupService->find($groupID);
		if(empty($group))
			throw $this->createNotFoundException($translator->trans('Email Template Not found'));
		
		$form = $this->createForm(new GroupType(), $group);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$bUpdate = $groupService->update($group);
			if($bUpdate) {
				$this->get('session')->getFlashBag()->add('edit_group_successfully', $translator->trans('Edit ' . $group->getName() . ' Successfully'));
				return $this->redirect($this->generateUrl('application_backend_group_index'));
			}
		}
		return $this->render('ApplicationBackendBundle:Group:edit.html.twig', array(
			'form'	=>	$form->createView(),
			'group' => $group
		));
	}


	/**
	 * Delete user
	 * @author Alex <alex@likipe.se>
	 * @param int $groupID
	 * @return redirect
	 * @throws type
	 */
	public function deleteAction($groupID) {
		$groupService = $this->get('application_group_service');
		$translator = $this->get('translator');
		$group = $groupService->find($groupID);
		if (empty($group)) {
			throw $this->createNotFoundException($translator->trans('No group found for id ' . $groupID));
		}
		$groupService->remove($groupID);
		$this->get('session')->getFlashBag()->add('delete_group_successfully', $translator->trans('Deleted successfully'));
		return $this->redirect($this->generateUrl('application_backend_group_index'));
	}
}