<?php

namespace Application\BackendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Doctrine\ORM\EntityRepository;


class GroupUserType extends AbstractType {
	protected $members;
	protected $notIn = "";
	public function __construct( $members = array() ) {
		$this->members = $members;
	}
	public function buildForm(FormBuilderInterface $builder, array $options) {
		if( count( $this->members ) ){
			$this->notIn = "and u.id NOT IN (". implode(',', $this->members) .")";
		}
		$builder->add("user","entity",array(
			"label" => "User",
			'required'  => true,
			"class" => "ApplicationUserBundle:User",
			"query_builder" => function(EntityRepository $er){
				return $er->createQueryBuilder("u")
					->where( "(u.roles = '" . serialize(array("ROLE_SUPER_ADMIN")) . "' or u.roles = '" . serialize(array("ROLE_BOSS")) . "' or u.roles = '" . serialize(array("ROLE_EMPLOYEE")) ."') ". $this->notIn )
					->orderBy("u.username", "DESC");
			},
		));
		/*$builder->add("group","entity",array(
			"label" => "Group",
			"class" => "ApplicationUserBundle:Group",
			"query_builder" => function(EntityRepository $er){
				return $er->createQueryBuilder("g")->where( "g.id = ".$this->groupID );
			},
		));*/
		$builder->add('enabled', 'checkbox', array(
			'mapped' => true,
			'attr'	=> array('checked' => 'checked'),
			'required'  => false,
		));
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'data_class' => 'Application\UserBundle\Entity\GroupUser'
		));
	}

	public function getName() {
		return 'GroupUserType';
	}
}