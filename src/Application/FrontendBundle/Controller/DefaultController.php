<?php

namespace Application\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
    	$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
		    $user = $this->container->get('security.context')->getToken()->getUser();
		    return $this->render('ApplicationFrontendBundle:Default:index.html.twig', array('user' => $user));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_login'));
		}
    }

    public function errorAction() {
		return $this->render('ApplicationFrontendBundle:Default:error.html.twig', array());
	}
}
