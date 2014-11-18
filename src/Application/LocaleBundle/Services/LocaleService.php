<?php
namespace Application\LocaleBundle\Services;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Bundle\FrameworkBundle\Routing\Router;

class LocaleService
{
	private $container;
	private $router;

	/**
	 * construct function
	 * @author : Alex <alex@likipe.se>
	 * @param object $container
	 * @param object $router
	 */
	public function __construct(ContainerInterface $container, Router $router)
	{
		$this->container = $container;
		$this->router = $router;
	}

	/**
	 * Set Locate into session
	 * @author : Alex <alex@likipe.se>
	 * @param string $lang
	 *
	 */
	public function setSelectedLocale($lang='en'){
		$request = $this->container->get('request');
		$request->setLocale($lang);
		$session = $this->container->get('session');
		$session->set('_locale', $lang);
	}

	/**
	 * get Locate
	 * @author : Alex <alex@likipe.se>
	 * @return string
	 *
	 */
	public function getSelectedLocale(){
		$session = $this->container->get('session');
		return $session->get('_locale');
	}
}