<?php
namespace Application\LocaleBundle\Extension;

use Symfony\Component\DependencyInjection\ContainerInterface;

class LocaleExtension extends \Twig_Extension
{
	private $container;
	private $frontendService;

	/**
	 * construct function
	 * @author : Alex <alex@likipe.se>
	 * @param object $container
	 */
	public function __construct(ContainerInterface $container){
		$this->container = $container;
		$this->locateService = $this->container->get("application_locale_service");

	}

	/**
	* Get Extension Name
	* @author : Alex <alex@likipe.se>
	* @return string
	*/
	public function getName(){
		return 'locale_extension';
	}

	/**
	* Get Functions
	* @author : Alex <alex@likipe.se>
	* @return array
	*/
	public function getFunctions(){
		return array(
			'get_locale'  => new \Twig_Function_Method($this, 'getSelectedLocale'),
		);
	}

	/**
	* Function get Locate, use at Template (twig)
	* @author : Alex <alex@likipe.se>
	* @return string
	*/
	public function getSelectedLocale(){
		return $this->locateService->getSelectedLocale();
	}

}