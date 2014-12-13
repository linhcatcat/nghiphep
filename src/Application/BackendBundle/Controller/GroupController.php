<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Application\BackendBundle\Form\GroupType;
use Application\BackendBundle\Form\GroupUserType;
use Application\UserBundle\Entity\Group;
use Application\UserBundle\Entity\GroupUser;
use Application\UserBundle\Entity\GroupManager;

class GroupController extends Controller {
	/**
	 * List group
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
		$userService = $this->get('Application_user.service');
		$users = $userService->getRepository()->findAll();
		$group = new Group();
		
		$form = $this->createForm(new GroupType(), $group);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$em = $this->getDoctrine()->getEntityManager();
			$em->persist($group);
			$em->flush();
			$this->get('session')->getFlashBag()->add('add_group_successfully', $translator->trans('Add ' . $group->getName() . 'department successfully<br/>Please add manager user for department'));
			return $this->redirect($this->generateUrl('application_backend_group_edit', array('groupID' => $group->getId())));
		}
		
		return $this->render('ApplicationBackendBundle:Group:add.html.twig', array(
			'users' => $users,
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
		$userService = $this->get('Application_user.service');
		$allUsers = $userService->getRepository()->findAll();
		$group = $groupService->find($groupID);
		$users = array();
		$managerIds = array();
		foreach ($group->getManagers() as $manager) {
			$managerIds[] = $manager->getUser()->getId();
		}
		foreach ($allUsers as $user) {
			if( !in_array($user->getId(), $managerIds) ) {
				$users[] = $user;
			}
		}
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
			'users' => $users,
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

	/**
	 * Add user to group
	 * @author Alex <alex@likipe.se>
	 * @return form
	 */
	public function addUserAction(Request $request, $groupID) {
		$groupUserService = $this->get('application_group_user_service');
		$translator = $this->get('translator');
		$groupUser = new GroupUser();
		$groupService = $this->get('application_group_service');
		$userService = $this->get('Application_user.service');
		$group = $groupService->find($groupID);
		$members = array();
		foreach ($groupUserService->getMembers() as $member) {
			$members[] = $member->getUser()->getId();
		}
		$members = array_unique( $members );
		if( count($members) == $userService->count() ) {
			$this->get('session')->getFlashBag()->add('all_user_added_to_group', $translator->trans('All user added to department'));
			//return $this->redirect($this->generateUrl('application_backend_group_show_user', array('groupID' => $groupID)));
			return $this->redirect($this->generateUrl('application_backend_group_index'));
		}
		
		$form = $this->createForm(new GroupUserType( $members ), $groupUser);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$em = $this->getDoctrine()->getEntityManager();
			$groupUser->setGroup( $group );
			$em->persist($groupUser);
			$em->flush();
			$this->get('session')->getFlashBag()->add('add_group_user_successfully', $translator->trans('Add ' . $groupUser->getUser()->getUsername() . ' to '.$group->getName().' department successfully'));
			return $this->redirect($this->generateUrl('application_backend_group_show_user', array('groupID' => $groupID)));
		}
		
		return $this->render('ApplicationBackendBundle:Group:addUser.html.twig', array(
			'form'	=>	$form->createView(),
		));
	}

	/**
	 * List user in group
	 * @author Alex <alex@likipe.se>
	 * @return view, array group
	 */
	public function showUserAction(Request $request, $groupID) {
		$groupUserService = $this->get('application_group_user_service');
		$translator = $this->get('translator');
		$groupService = $this->get('application_group_service');
		$group = $groupService->find($groupID);
		if(empty($group)) {
			throw $this->createNotFoundException($translator->trans('Department Not found'));
		}
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$totalGroup = $groupUserService->count( $groupID );
		$aFilters = array('id' => 'DESC');
		return $this->render('ApplicationBackendBundle:Group:showUser.html.twig',array(
			'group' => $group,
			'groupUsers'	=>	$groupUserService->filter($limit, $offset, $aFilters, $groupID),
			//'pagination'	=>	$this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalGroup / $limit), array()),
		));
	}

	/**
	 * Remove user from group
	 * @author Alex <alex@likipe.se>
	 * @param int $groupID
	 * @return redirect
	 * @throws type
	 */
	public function deleteUserAction($groupUserID) {
		$groupUserService = $this->get('application_group_user_service');
		$translator = $this->get('translator');
		$groupUser = $groupUserService->find($groupUserID);
		if (empty($groupUser)) {
			throw $this->createNotFoundException($translator->trans('No employee found for id ' . $groupUserID));
		}
		$groupUserService->remove($groupUserID);
		$this->get('session')->getFlashBag()->add('remove_group_user_successfully', $translator->trans('Removed '. $groupUser->getUser()->getUsername() .' from '. $groupUser->getGroup()->getName() .' group successfully'));
		return $this->redirect($this->generateUrl('application_backend_group_show_user', array('groupID' => $groupUser->getGroup()->getId())));
	}

	/**
	 * Add manager to group
	 * @author Alex <alex@likipe.se>
	 * @return Response
	 */
	public function addManagerAction(Request $request) {
		$translator = $this->get('translator');
		$userService = $this->get('Application_user.service');
		$userManagerService = $this->get('fos_user.user_manager');
		$groupService = $this->get('application_group_service');
		$data = $request->request->all();
		$group = $groupService->find( (int)$data['groupId'] );
		$em = $this->getDoctrine()->getManager();
		$users = array();
		$userIds = array();
		$managerIds = isset($data['aDatas'])?$data['aDatas']:array();
		foreach ($group->getManagers() as $groupManager) {
			if( !in_array($groupManager->getUser()->getId(), $managerIds) ) {
				$em->remove( $groupManager );
				$em->flush();
			}
			$userIds[] = $groupManager->getUser()->getId();
		}
		
		foreach ($managerIds as $userId) {
			if( !in_array($userId, $userIds) ) {
				$user = $userService->getRepository()->find( (int)$userId );
				$groupManager = new GroupManager();
				$groupManager->setUser( $user );
				$groupManager->setGroup( $group );
				$em->persist( $groupManager );
				$em->flush();
			}
		}
		return new Response(json_encode(array('result' => 1)), 200);
		/*if( $rs ) {
			return new Response(json_encode(array('result' => 1)), 200);
		} else {
			return new Response(json_encode(array('result' => 0, 'data' => $translator->trans('System error!'))), 300);
		}*/
	}
}