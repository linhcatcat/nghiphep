<?php

namespace Application\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
    	$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
		    $user = $this->container->get('security.context')->getToken()->getUser();
		    $txtStartDate = $request->get('txtStartDate');
		    $txtEndDate = $request->get('txtEndDate');
		    if( $txtStartDate && $txtEndDate){
		    	var_dump($txtEndDate);
		    	var_dump($txtStartDate);exit();
		    }
		    return $this->render('ApplicationFrontendBundle:Default:index.html.twig', array('user' => $user));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_login'));
		}
    }

    public function errorAction() {
		return $this->render('ApplicationFrontendBundle:Default:error.html.twig', array());
	}
}
