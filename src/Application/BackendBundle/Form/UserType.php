<?php

namespace Application\BackendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class UserType extends AbstractType {

	protected $is_create = true;

	public function __construct($is_create = true){
		$this->is_create = $is_create;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options) {
		$required = false;
		$readonly = false;
		if ($this->is_create) {
			$required = true;
		} else {
			$readonly = true;
		}
		$builder
			->add('first_name', 'text', array(
				'label' => 'Họ',
				'attr' => array('value' => empty($options['first_name']) ? '' : $options['first_name']),
				'required' => false,
			))
			->add('last_name', 'text', array(
				'label' => 'Tên',
				'attr' => array('value' => empty($options['last_name']) ? '' : $options['last_name']),
				'required' => false,
			))
			->add('username', 'text', array(
				'label' => 'Tài khoản',
				'attr' => array('value' => empty($options['username']) ? '' : $options['username'], 'readonly' => $readonly),
			))
			->add('email', 'email', array(
				'label' => 'E-mail',
				'attr' => array('value' => empty($options['email']) ? '' : $options['email']),
			))
			->add('entitled', 'text', array(
				'label' => 'Entitled',
				'attr' => array('value' => empty($options['entitled']) ? '' : $options['entitled']),
			))
			->add( 'gender', 'choice', array(
				'label' => 'Gender ',
				'expanded'   => true,
				'choices'   => array(1 => 'Male ', 0 => 'Female '),
				'multiple'  => false,
				'data' => isset($options['gender']) ? $options['gender'] : 1
			))
			->add('role', 'choice', array(
				'label' => 'Role',
				'choices'   => array('ROLE_EMPLOYEE' => 'ROLE_EMPLOYEE', 'ROLE_APPROVE' => 'ROLE_APPROVE', 'ROLE_BOSS' => 'ROLE_BOSS', 'ROLE_SUPER_ADMIN' => 'ROLE_SUPER_ADMIN'),
				//'empty_value' => false,
				'data' => empty($options['role']) ? array('ROLE_EMPLOYEE') : $options['role'],
				'multiple' => true,
				'expanded' => true,
			))
			->add('password', 'repeated', array(
				'type' => 'password',
				'invalid_message' => 'The password fields must match. ',
				'options' => array('attr' => array('class' => 'password-field')),
				'first_options'  => array('label' => 'Password '),
				'second_options' => array('label' => 'Repeat Password '),
				'required' => $required,
			));

		parent::buildForm($builder, $options);
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'first_name' => null,
			'last_name' => null,
			'username' => null,
			'email' => null,
			'entitled' => 96,
			'gender' => null,
			'role' => null,
			'csrf_protection' => false
		));
	}
	public function getName() {
		return 'UserType';
	}
}