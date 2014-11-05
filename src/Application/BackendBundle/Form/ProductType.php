<?php

namespace Application\BackendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class ProductType extends AbstractType {
	
	public function buildForm(FormBuilderInterface $builder, array $options) {
		
		$builder->add('title', 'text', array(
			'attr'	=> array(
				'class' => 'title_product'
			),
			'label'	=> 'Title'
		));
		
		$builder->add('slug', 'text', array(
			'attr'	=> array(
				'class' => 'slug_product'
			),
			'label'	=> 'Slug'
		));

		/*$builder->add('image', 'file', array(
			'attr'	=> array(
				'class' => 'image_product'
			),
			'label'	=> 'Image',
			'required'  => false,
		));*/

		$builder->add('summary', 'textarea', array(
			'attr'	=> array(
				'class' => 'ckeditor'
			),
			'required'  => true,
		));
		
		$builder->add('content', 'textarea', array(
			'attr'	=> array(
				'class' => 'ckeditor'
			),
		));

		$builder->add('enabled', 'checkbox', array(
			'mapped' => true,
			'attr'	=> array(
			),
			'required'  => false,
		));
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'data_class' => 'Wincofood\ProductBundle\Entity\Product'
		));
	}

	public function getName() {
		return 'ProductType';
	}
}