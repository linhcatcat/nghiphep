<?php

namespace Application\BackendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class CmsPageType extends AbstractType {
	
	public function buildForm(FormBuilderInterface $builder, array $options) {
		
		$builder->add('name', 'text', array(
			'attr'	=> array(
				'class' => 'name_cms_page'
			),
			'label'	=> 'Name'
		));
		
		$builder->add('slug', 'text', array(
			'attr'	=> array(
				'class' => 'slug_cms_page'
			),
			'label'	=> 'Slug'
		));
		
		$builder->add('content', 'textarea', array(
			'attr'	=> array(
				'class' => 'ckeditor'
			),
		));
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'data_class' => 'Wincofood\CmsBundle\Entity\CmsPage'
		));
	}

	public function getName() {
		return 'CmsPageType';
	}
}