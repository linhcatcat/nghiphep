<?php
namespace Application\LocaleBundle\Listener;

use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Routing\Router;


use \Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

use \Symfony\Component\Routing\Generator\UrlGenerator;



class LocaleListener
{
	private $defaultLocale;
	private $container;

	  /**
	 * construct function
	 * @author : Alex <alex@likipe.se>
	 * @param object $container
	 * @param object $defaultLocale
	 */
	public function __construct($container, $defaultLocale = 'vi')
	{
		$this->defaultLocale = $defaultLocale;
		$this->container = $container;
	}

	/**
	* listener event Request.
	* @author Alex <alex@likipe.se>
	* @param $event
	*/
	public function onKernelRequest(GetResponseEvent $event)
	{
		$request = $event->getRequest();
		if (!$request->hasPreviousSession()) {
			return;
		}

		//$this->container->get( 'session' )->setFlash( 'pathInfo', $request->getPathInfo() );
		if ($locale = $request->getSession()->get('_locale')) {
			$request->getSession()->set('_locale', $locale);
			$request->setLocale($locale);
		} else {
			$request->setLocale($request->getSession()->get('_locale', $this->defaultLocale));
		}

	}
}