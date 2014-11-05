<?php

// src/Application/UserBundle/Form/UserAdminType.php

namespace Application\UserBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class UserAdminType extends AbstractType {
	
	public function buildForm(FormBuilderInterface $builder, array $options) {
		$builder
				->add('email', 'email', array(
					'label' => 'E-mail',
					'attr' => array('value' => empty($options['email']) ? '' : $options['email']),
				))
				->add('role', 'choice', array(
					'label' => 'Role',
					'choices'   => array('ROLE_ADMIN' => 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN' => 'ROLE_SUPER_ADMIN'),
					'empty_value' => false,
					'data' => empty($options['role']) ? '' : $options['role'][0],
				))
				->add('password', 'repeated', array(
					'type' => 'password',
					'invalid_message' => 'The password fields must match.',
					'options' => array('attr' => array('class' => 'password-field')),
					'first_options'  => array('label' => 'Password'),
					'second_options' => array('label' => 'Repeat Password'),
				));

		parent::buildForm($builder, $options);
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'email' => null,
			'role' => null,
			'csrf_protection' => false
		));
	}
	public function getName() {
		return 'UserAdminType';
	}
}