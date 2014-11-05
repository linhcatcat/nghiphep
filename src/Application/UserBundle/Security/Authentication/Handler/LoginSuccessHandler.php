<?php

namespace Application\UserBundle\Security\Authentication\Handler;

use MongoId;

use Ecommerce\ProductBundle\Entity\Wishlist;

use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Router;
use Application\MessageBundle\Service\MessageService;

class LoginSuccessHandler implements AuthenticationSuccessHandlerInterface
{

    protected $router;
    protected $security;
    protected $UserService;
    protected $session;

    public function __construct(Router $router, SecurityContext $security, $UserService, SessionInterface $session)
    {
        $this->router = $router;
        $this->security = $security;
        $this->UserService = $UserService;
        $this->session = $session;
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token)
    {
		/* TODO: New referer_url */
		//throw new \Exception("TODO: Referer url");
        $user = $token->getUser();
		/* Admins are redirected to /backend */
		if($this->security->isGranted('ROLE_SUPER_ADMIN')) {
			return new RedirectResponse($this->router->generate('application_backend_index'));
		}

        if($this->security->isGranted('ROLE_SALE')) {
            //return new RedirectResponse($this->router->generate('wincofood_sale_index'));
        }
        return new RedirectResponse($this->router->generate('application_frontend_homepage'));
    }
}
