<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;

class AppKernel extends Kernel
{
    public function init()
    {
        date_default_timezone_set( 'Asia/Ho_Chi_Minh' );
        parent::init();
    }
    public function registerBundles()
    {
        $bundles = array(
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new Acme\SecurityBundle\AcmeSecurityBundle(),
            new FOS\UserBundle\FOSUserBundle(),
            new Application\UserBundle\ApplicationUserBundle(),
            new Application\BackendBundle\ApplicationBackendBundle(),
            new FOS\JsRoutingBundle\FOSJsRoutingBundle(),
            new Application\FrontendBundle\ApplicationFrontendBundle(),
            new Wincofood\CmsBundle\WincofoodCmsBundle(),
            new Wincofood\ProductBundle\WincofoodProductBundle(),
            new Wincofood\ApplicationBundle\WincofoodApplicationBundle(),
            new Application\EmailTemplateBundle\ApplicationEmailTemplateBundle(),
            new Wincofood\SaleBundle\WincofoodSaleBundle(),
            new Application\TaskBundle\ApplicationTaskBundle(),
        );

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Acme\DemoBundle\AcmeDemoBundle();
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
        }

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__.'/config/config_'.$this->getEnvironment().'.yml');
    }
}
