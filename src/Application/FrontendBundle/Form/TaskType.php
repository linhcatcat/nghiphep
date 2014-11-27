<?php

namespace Application\FrontendBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Doctrine\ORM\EntityRepository;


class TaskType extends AbstractType {

	protected $users = array();
	public function __construct($users = array()){
		$this->users = $users;
	}
	public function buildForm(FormBuilderInterface $builder, array $options) {

		$builder->add('start', 'date', array(
			'label' => 'Ngày bắt đầu',
			'widget' => 'single_text',
			'format' => 'yyyy-MM-dd',
			'attr'	=> array(
				'readonly' => 'readonly'
			),
		));

		$builder->add('end', 'date', array(
			'label' => 'Ngày kết thúc',
			'widget' => 'single_text',
			'format' => 'yyyy-MM-dd',
			'attr'	=> array(
				'readonly' => 'readonly'
			),
		));
		
		$builder->add('user', 'choice', array(
			'attr'	=> array(
				'class' => 'task_user'
			),
			'label' => 'Đăng ký cho',
			'choices'   => $this->users,
			'data' => 0,
		));

		$builder->add('leaveType', 'choice', array(
			'attr'	=> array(
				'class' => 'leave_type_task'
			),
			'label' => 'Loại nghỉ phép',
			'choices'   => array(
				0 => 'Nghỉ phép năm', 
				1 => 'Nghỉ ốm - không hưởng lương', 
				2 => 'Nghỉ thai sản',
				3 => 'Nghỉ hưởng lương-chế độ (tang,hôn,...)',
				4 => 'Nghỉ không lương'
			),
			'data' => 0,
		));

		$builder->add('note', 'textarea', array(
			'label' => 'Ghi chú',
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