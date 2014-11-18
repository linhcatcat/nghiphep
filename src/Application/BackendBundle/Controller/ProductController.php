<?php

namespace Application\BackendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\ORM\Query\Expr;
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

		//----------------------------------------------
		$repository = $this->getDoctrine()->getRepository('WincofoodProductBundle:Product');
		$em = $this->getDoctrine()->getManager();
		/*$product = $repository->find(2);
		var_dump($product->getTitle());*/

		/*$products = $repository->findBy(array());
		var_dump(count($products));*/

		/*$products = $repository->findBy(array('title'=>'123'));
		foreach ($products as $key => $product) {
			var_dump($product->getId());
		}*/

		/*$product = $repository->findOneById(3);
		var_dump($product->getTitle());*/

		/*$product = $repository->findOneByTitle('123');
		var_dump($product->getTitle());*/

		/*$product = $repository->findOneBySlug('hello-chao');
		var_dump($product->getTitle());*/

		/*$products = $repository->findAll();
		var_dump(count($products));*/

		/*$em = $this->getDoctrine()->getManager();
		$query = $em->createQuery('SELECT p FROM WincofoodProductBundle:Product p WHERE p.title = :title ORDER BY p.slug ASC')
					->setParameter('title', 'Hello Chao');
		$products = $query->getResult();
		foreach ($products as $product) {
			var_dump($product->getSlug());
		}
		var_dump(count($products));*/

		/*$query = $this->getDoctrine()->getManager()
			->createQuery(
				'SELECT u FROM ApplicationUserBundle:User u
				WHERE u.id = :id'
			)->setParameter('id', 8);
		$rs = $query->getSingleResult();
		var_dump($rs->getId());*/

	 	/*$qb->add('select', new Expr\Select(array('u')))
   			->add('from', new Expr\From('ApplicationUserBundle:User', 'u'))
   			->add('where', $qb->expr()->orX(
       			$qb->expr()->eq('u.id', 1),
       			$qb->expr()->like('u.username', 'nqthanh')
   			))
   			->add('orderBy', new Expr\OrderBy('u.username', 'ASC'));
		$results = $qb->getQuery()->getResult();
		var_dump(count($results));*/

		//----------------------------------------------

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
