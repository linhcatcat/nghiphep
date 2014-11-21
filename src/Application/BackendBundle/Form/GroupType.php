<?php

namespace Application\BackendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Doctrine\ORM\EntityRepository;


class GroupType extends AbstractType {

	public function buildForm(FormBuilderInterface $builder, array $options) {
		
		$builder->add('name', 'text', array(
			'attr'	=> array(
				'class' => 'name_group'
			),
			'label'	=> 'Department'
		));

		$builder->add('code', 'text', array(
			'attr'	=> array(
				'class' => 'name_code'
			),
			'label'	=> 'Department code'
		));

		$builder->add("user","entity",array(
			"label" => "Manager",
			"class" => "ApplicationUserBundle:User",
			"query_builder" => function(EntityRepository $er){
				//return $er->createQueryBuilder("u")->where("u.enabled = 1 and u.username like 'nhathoa' and u.roles in ")->orderBy("u.username", "ASC");
				return $er->createQueryBuilder("u")
					->where( "u.roles = '" . serialize(array("ROLE_BOSS")) . "' or u.roles = '" . serialize(array("ROLE_SUPER_ADMIN")) ."'" )
					->orderBy("u.username", "DESC");
			},
		));

		$builder->add('enabled', 'checkbox', array(
			'mapped' => true,
			'attr'	=> array('checked'   => 'checked'),
			'required'  => false,
		));
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'data_class' => 'Application\UserBundle\Entity\Group'
		));
	}

	public function getName() {
		return 'GroupType';
	}
}