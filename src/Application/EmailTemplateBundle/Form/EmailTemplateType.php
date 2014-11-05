<?php

// src/Application/EmailTemplateBundle/Form/EmailTemplateType.php

namespace Application\EmailTemplateBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class EmailTemplateType extends AbstractType {
	
	public function buildForm(FormBuilderInterface $builder, array $options) {
		
		$builder->add('name', 'text', array(
			'attr'	=> array(
				'class' => 'name_email_template'
			),
			'label'	=> 'Name'
		));
		
		$builder->add('subjectEmail', 'text', array(
			'attr'	=> array(
				'class' => 'subject_email_template'
			),
			'label'	=> 'Subject Email'
		));
		
		$builder->add('template', 'ckeditor', array(
			'attr'	=> array(
				'class' => 'content_email_template'
			),
		));
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'data_class' => 'Application\EmailTemplateBundle\Entity\EmailTemplate'
		));
	}

	public function getName() {
		return 'EmailTemplateType';
	}
}