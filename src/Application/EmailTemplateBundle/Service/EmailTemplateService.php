<?php

namespace Application\EmailTemplateBundle\Service;

use Symfony\Component\Form\Extension\Core\Type\EmailType;

use Doctrine\ORM\EntityManager;
use \InvalidArgumentException;
use Application\EmailTemplatebundle\Entity\EmailTemplate;

class EmailTemplateService {

	private $em;
	private $templating;
	
	protected static $mandatory_keys = array('name', 'template', 'subject');

	public function __construct(EntityManager $em, $templating) {
		$this->em = $em;
		$this->templating = $templating;
	}

	public function getRepository() {
		return $this->em->getRepository('ApplicationEmailTemplateBundle:EmailTemplate');
	}

	/**
	 * Find by ID
	 * @author Kevin <kevin@likipe.se>
	 * @param string $id
	 * @return object
	 */
	public function find($id) {
		$result = $this->getRepository()->find($id);
		return $result;
	}

	/**
	 * Find all EmailTemplate
	 * @author Kevin <kevin@likipe.se>
	 * @return object
	 */
	public function findAll() {
		$result = $this->getRepository()->findAll();
		return $result;
	}

	/**
	 * Insert new EmailTemplate
	 * @author Kevin <kevin@likipe.se>
	 * @param unknown_type $data
	 * @throws \InvalidArgumentException
	 * @return object
	 */
	public function insert($data) {
		foreach (static::$mandatory_keys as $k => $v) {
			if (!isset($data[$v])) {
				throw new \InvalidArgumentException(
						'Missing data for key: ' . $v);
			}
		}
		$oTemplate = new EmailTemplate();
		$oTemplate->setName($data['name']);
		$oTemplate->setTemplate($data['template']);
		$oTemplate->setSubjectEmail($data['subject']);
		$this->em->persist($oTemplate);
		$this->em->flush();
		return $oTemplate;
	}
	
	/**
	 * Update EmailTemplate
	 * @author Kevin <kevin@likipe.se>
	 * @param object
	 * @return boolean
	 */
	public function update($emailTemplate) {
		if (empty($emailTemplate))
			return false;
		try {
			$this->em->flush();
		} catch (Exception $e) {
			return false;
		}
		return true;
	}
	
	/**
	 * Get Content of Template Email from DB
	 * @author Harrison <harrison@likipe.se>
	 * @param int $iTemplateID
	 * @param array $params
	 * @param string $recipient
	 * @return string
	 */
	public function getTemplateEmail($iTemplateID, $params = array()) {
		$oTemplate = $this->find($iTemplateID);
        if (empty($oTemplate)) {
            return false;
        }
		$content    = $oTemplate->getTemplate();
		$layout     = $this->templating->render('ApplicationEmailTemplateBundle::layout.html.twig');      
		$loader_01  = new \Twig_Loader_Array(array(
			'base_template.html' => $layout,
		));
		$index  = '{% extends "base_template.html" %}';
		$index .= '{% block content %}' . $content . '{% endblock %}';
		$loader_02 = new \Twig_Loader_Array(array(
			'email_template.html' => $index,
			'base_template.html' => 'Will never be loaded',
		));

		$loader = new \Twig_Loader_Chain(array($loader_01, $loader_02));
		$twig   = new \Twig_Environment($loader);
		$html   = $twig->render('email_template.html',$params);
		
		return $html;
	}
}