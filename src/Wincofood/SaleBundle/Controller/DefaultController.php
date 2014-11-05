<?php

namespace Wincofood\SaleBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
    	/*if (false === $this->container->get('security.context')->isGranted('ROLE_SALE')) {
            throw new AccessDeniedException();
        }*/
        var_dump($this->container->get('security.context')->getToken()->getUser()->getName());
        var_dump($this->container->get('security.context')->isGranted('ROLE_SALE'));
        var_dump(123);exit();
    }
}
