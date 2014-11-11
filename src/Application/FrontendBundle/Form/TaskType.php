<?php

namespace Application\FrontendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Doctrine\ORM\EntityRepository;


class TaskType extends AbstractType {

	public function buildForm(FormBuilderInterface $builder, array $options) {
		
		/*$builder->add('start', 'datetime', array(
			'attr'	=> array(
				'class' => 'start_task'
			),
			'label'	=> 'Start'
		));*/

		/*$builder->add('end', 'datetime', array(
			'attr'	=> array(
				'class' => 'end_task'
			),
			'label'	=> 'End'
		));*/

		/*$builder->add('startTime', 'time', array(
			'input'  => 'datetime',
			'widget' => 'choice',
		));*/
		
		$builder->add('start', 'date', array(
			'widget' => 'single_text',
			'format' => 'yyyy-MM-dd',
		));

		$builder->add('end', 'date', array(
			'widget' => 'single_text',
			'format' => 'yyyy-MM-dd',
		));

		$builder->add('leaveType', 'choice', array(
			'attr'	=> array(
				'class' => 'leave_type_task'
			),
			'label' => 'Leave type',
			'choices'   => array(
				0 => 'Nghi phep', 
				1 => 'Nghi khong luong', 
				2 => 'Nghi bu'
			),
			'empty_value' => false,
			'data' => 0,
		));

		$builder->add('note', 'textarea', array(
			'attr'	=> array(
				'class' => 'note_task'
			),
			'required'  => false,
		));
	}
	
	public function setDefaultOptions(OptionsResolverInterface $resolver) {
		$resolver->setDefaults(array(
			'data_class' => 'Application\TaskBundle\Entity\Task'
		));
	}

	public function getName() {
		return 'TaskType';
	}
}