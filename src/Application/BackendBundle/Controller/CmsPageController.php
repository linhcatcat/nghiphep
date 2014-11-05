<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\CmsPageType;
use Wincofood\CmsBundle\Entity\CmsPage;

class CmsPageController extends Controller {

	/**
	 * List Cms Page
	 * @author Alex <alex@likipe.se>
	 * @return view, array Cms Page
	 */
	public function indexAction() {
		$cmsPageService = $this->get('application_cms_page_service');
		$aAllCmsPages = $cmsPageService->findAll();
		return $this->render('ApplicationBackendBundle:CmsPage:index.html.twig',array(
			'aAllCmsPages'	=>	$aAllCmsPages,
		));
	}
	
	/**
	 * Add new cms page
	 * @author Alex <alex@likipe.se>
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return form
	 */
	public function addAction(Request $request) {
		$cmsPageService = $this->get('application_cms_page_service');
		$translator = $this->get('translator');
		$cmsPage = new CmsPage();
		
		$form = $this->createForm(new CmsPageType(), $cmsPage);
		$form->handleRequest($request);
		if ($form->isValid()) {
			$data = array(
				'name' => $cmsPage->getName(),
				'slug' => $cmsPage->getSlug(),
				'content' => $cmsPage->getContent(),
			);
			$cmsPageService->insert($data);
			$this->get('session')->getFlashBag()->add('add_cms_page_successfully', $translator->trans('Add ' . $cmsPage->getName() . ' successfully'));
			
			return $this->redirect($this->generateUrl('application_backend_cms_page_index'));
		}
		
		return $this->render('ApplicationBackendBundle:CmsPage:add.html.twig', array(
			'form'	=>	$form->createView(),
		));
	}

	/**
	 * Edit cms page
	 * @author Alex <alex@likipe.se>
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @param int $cmsPageID
	 * @return form
	 */
	public function editAction(Request $request, $cmsPageID) {
		$cmsPageService = $this->get('application_cms_page_service');
		$translator = $this->get('translator');
		$oCmsPage = $cmsPageService->find($cmsPageID);
		if(empty($oCmsPage))
			throw $this->createNotFoundException($translator->trans('Email Template Not found'));
		
		$form = $this->createForm(new CmsPageType(), $oCmsPage);	
		$form->handleRequest($request);
		if ($form->isValid()) { 
			$bUpdate = $cmsPageService->update($oCmsPage);
			if($bUpdate) {
				$this->get('session')->getFlashBag()->add('edit_cms_page_successfully', $translator->trans('Edit ' . $oCmsPage->getName() . ' Successfully'));
				return $this->redirect($this->generateUrl('application_backend_cms_page_index'));
			}
		}
		return $this->render('ApplicationBackendBundle:CmsPage:edit.html.twig', array(
			'form'	=>	$form->createView(),
		));
	}

	/**
	 * Delete cms page
	 * @author Alex <alex@likipe.se>
	 * @param int $cmsPageID
	 * @return redirect
	 * @throws type
	 */
	public function deleteAction($cmsPageID) {
		$cmsPageService = $this->get('application_cms_page_service');
		$translator = $this->get('translator');
		$cmsPage = $cmsPageService->find($cmsPageID);
		if (empty($cmsPage)) {
			throw $this->createNotFoundException($translator->trans('No cms page found for id ' . $cmsPageID));
		}
		$cmsPageService->remove($cmsPageID);
		$this->get('session')->getFlashBag()->add('delete_cms_page_successfully', $translator->trans('Deleted successfully'));
		return $this->redirect($this->generateUrl('application_backend_cms_page_index'));
	}
}
