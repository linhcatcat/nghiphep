<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Application\BackendBundle\Form\ProductType;
use Wincofood\ProductBundle\Entity\Product;

class ProductController extends Controller
{
	/**
	 * List Product
	 * @author Harrison <harrison@likipe.se>
	 * @return view, array product
	 */
	public function indexAction(Request $request) {
		//$user = $this->container->get('security.context')->getToken()->getUser();
		$productService = $this->get('wincofood_product_service');
		$page = (int) $request->query->get('page', 1);
		$limit = $this->container->getParameter('limit_items_per_page');
		$offset = $limit * ($page - 1);
		$totalProduct = $productService->countAll();
		$aFilters = array('id' => 'DESC');
		return $this->render('ApplicationBackendBundle:Product:index.html.twig',array(
			'aAllProduct'	=>	$productService->filter($limit, $offset, $aFilters),
			'pagination'	=>	$this->get("wincofood_pagination_service")->renderPaginations($page, ceil($totalProduct / $limit), array()),
		));
	}

	/**
	 * Add new cms page
	 * @author Alex <alex@likipe.se>
	 * @return form
	 */
	public function addAction(Request $request) {
		$productService = $this->get('wincofood_product_service');
		$uploadService = $this->get('wincofood_upload_service');
		$translator = $this->get('translator');
		$product = new Product();
		
		$form = $this->createForm(new ProductType(), $product);
		$form->handleRequest($request);
		if ($form->isValid()) {
			/*$data = array(
				'title' => $product->getTitle(),
				'slug' => $product->getSlug(),
				'image' => $product->getImage(),
				'summary' => $product->getSummary(),
				'content' => $product->getContent(),
				'enabled' => $product->getEnabled(),
			);*/
			$em = $this->getDoctrine()->getEntityManager();
			if(!empty($_FILES)) {
				$fileUpload = $uploadService->uploadImage($_FILES, 'product');
				$product->setImage( $fileUpload );
			}
			$em->persist($product);
			$em->flush();
			$this->get('session')->getFlashBag()->add('add_product_successfully', $translator->trans('Add ' . $product->getTitle() . ' successfully'));
			return $this->redirect($this->generateUrl('application_backend_product_index'));
		}
		
		return $this->render('ApplicationBackendBundle:Product:add.html.twig', array(
			'form'	=>	$form->createView(),
		));
	}

	/**
	 * Edit cms page
	 * @author Alex <alex@likipe.se>
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @param int $productID
	 * @return form
	 */
	public function editAction(Request $request, $productID) {
		$productService = $this->get('wincofood_product_service');
		$uploadService = $this->get('wincofood_upload_service');
		$translator = $this->get('translator');

		$oProduct = $productService->find($productID);
		if(empty($oProduct))
			throw $this->createNotFoundException($translator->trans('Email Template Not found'));
		
		$form = $this->createForm(new ProductType(), $oProduct);	
		$form->handleRequest($request);
		if ($form->isValid()) {
			$checkRemoveImage = $request->get('check_remove_image');
			if ($checkRemoveImage == "true") {
				$sCurrentImage = $oProduct->getImage();
				if(!empty($sCurrentImage)) {
					$uploadService->removeImage($sCurrentImage);
				}
				$oProduct->setImage( NULL );
			}
			if(!empty($_FILES) && $_FILES['filesUpload']['size']) {
				$fileUpload = $uploadService->uploadImage($_FILES, 'product');
				$sCurrentImage = $oProduct->getImage();
				if(!empty($sCurrentImage)) {
					$uploadService->removeImage($sCurrentImage);
				}
				$oProduct->setImage( $fileUpload );
			}
			$bUpdate = $productService->update($oProduct);
			if($bUpdate) {
				$this->get('session')->getFlashBag()->add('edit_product_successfully', $translator->trans('Edit ' . $oProduct->getTitle() . ' Successfully'));
				return $this->redirect($this->generateUrl('application_backend_product_index'));
			}
		}
		return $this->render('ApplicationBackendBundle:Product:edit.html.twig', array(
			'form'	=>	$form->createView(),
			'oProduct' => $oProduct
		));
	}

	/**
	 * Delete product
	 * @author Alex <rony@likipe.se>
	 * @param int $productID
	 * @return redirect
	 * @throws type
	 */
	public function deleteAction($productID) {
		$productService = $this->get('wincofood_product_service');
		$translator = $this->get('translator');
		$product = $productService->find($productID);
		if (empty($product)) {
			throw $this->createNotFoundException($translator->trans('No product found for id ' . $productID));
		}
		$productService->remove($productID);
		$this->get('session')->getFlashBag()->add('delete_product_successfully', $translator->trans('Deleted successfully'));
		return $this->redirect($this->generateUrl('application_backend_product_index'));
	}
}
