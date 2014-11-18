<?php

namespace Application\BackendBundle\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\SecurityContext;

class SecurityController extends Controller {

	public function loginAction(Request $req) {
		$request = $this->getRequest();
		
		/** @var $session \Symfony\Component\HttpFoundation\Session\Session */
		$session = $request->getSession();
		
		/*if( $session->get('_locale') ) {
			$this->getRequest()->setLocale( $session->get('_locale') );
		}*/

		// get the error if any (works with forward and redirect -- see below)
		if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
			$error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
		} elseif (null !== $session && $session->has(SecurityContext::AUTHENTICATION_ERROR)) {
			$error = $session->get(SecurityContext::AUTHENTICATION_ERROR);
			$session->remove(SecurityContext::AUTHENTICATION_ERROR);
		} else {
			$error = '';
		}
		
		if ($error) {
			// TODO: this is a potential security risk (see http://trac.symfony-project.org/ticket/9523)
			$error = $error->getMessage();
		}
		// last username entered by the user
		$lastUsername = (null === $session) ? '' : $session->get(SecurityContext::LAST_USERNAME);
		
		$csrfToken = $this->container->has('form.csrf_provider') ? $this->container->get('form.csrf_provider')->generateCsrfToken('authenticate') : null;

		$securityContext = $this->container->get('security.context');

		if ( $securityContext->isGranted('ROLE_SUPER_ADMIN') ) {
			//return $this->redirect($this->generateUrl('application_backend_index'));
		}
		if ($securityContext->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
		    // authenticated REMEMBERED, FULLY will imply REMEMBERED (NON anonymous)
		}
		return $this->render('ApplicationBackendBundle:Security:login.html.twig', array(
			// last username entered by the user
			'last_username' => $session->get(SecurityContext::LAST_USERNAME),
			'error' => $error,       
			'csrf_token' => $csrfToken,
		));
	}

	public function changePasswordAction(Request $request) {
		$form = $this->createForm(new ChangePasswordType());
		if ($request->getMethod() == 'POST') {
			$form->bindRequest($request);
			if ($form->isValid()) {
				$data = $form->getData();
				$user = $this->get('security.context')->getToken()->getUser();
				$user->setPassword($data['password']);

				$em = $this->getDoctrine()->getManager();
				$em->flush();
				$this->get('session')->getFlashBag()->add('notice', 'Your changes were saved!');
			}
		}
		return $this->render('WebCoreBundle:Security:change-password.html.twig', array('form' => $form->createView()));
	}

}
