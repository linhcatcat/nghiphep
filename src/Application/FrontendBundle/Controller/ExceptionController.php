<?php
namespace Application\FrontendBundle\Controller;
use Symfony\Bundle\TwigBundle\Controller\ExceptionController as BaseController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller as Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\FlattenException;

class ExceptionController extends BaseController
{
	public function redirectToErrorPageAction() {
		$controller = new Controller();
		//return $controller->redirect('/error');
	}
}