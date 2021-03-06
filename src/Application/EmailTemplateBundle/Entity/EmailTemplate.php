<?php

namespace Application\EmailTemplateBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints as DoctrineAssert;

/**
 * Application\EmailTemplateBundle\Entity\EmailTemplate
 * @ORM\Table(name="email_template")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Application\EmailTemplateBundle\Repository\EmailTemplateRepository")
 * @ORM\HasLifecycleCallbacks
 */
class EmailTemplate {

	/**
	 * @var integer $id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var string $name
	 * @ORM\Column(type="string", length=255, nullable=false)
	 */
	protected $name;
	
	/**
	 * @var string $subjectEmail
	 * @ORM\Column(type="string", name="subject_email", length=998, nullable=true)
	 */
	protected $subjectEmail;

	/**
	 * @var text $template
	 * @ORM\Column(type="text", nullable=false)
	 */
	protected $template;

	/**
	 * @var datetime $createdDate
	 * @ORM\Column(name="created_date", type="datetime")
	 */
	protected $createdDate;

	/**
	 * @var datetime $updatedDate
	 * @ORM\Column(name="updated_date", type="datetime")
	 */
	protected $updatedDate;
	
	/**
	 * @ORM\PrePersist
	 */
	public function prePersist() {
		$this->createdDate = new \DateTime("now");
		$this->updatedDate = new \DateTime("now");
	}
	
	/**
	 * Get id
	 *
	 * @return integer 
	 */
	public function getId() {
		return $this->id;
	}

	/**
	 * Set name
	 *
	 * @param string $name
	 * @return EmailTemplate
	 */
	public function setName($name) {
		$this->name = $name;

		return $this;
	}

	/**
	 * Get name
	 *
	 * @return string 
	 */
	public function getName() {
		return $this->name;
	}

	/**
	 * Set template
	 *
	 * @param string $template
	 * @return EmailTemplate
	 */
	public function setTemplate($template) {
		$this->template = $template;

		return $this;
	}

	/**
	 * Get template
	 *
	 * @return string 
	 */
	public function getTemplate() {
		return $this->template;
	}

	/**
	 * Set createdDate
	 *
	 * @param \DateTime $createdDate
	 * @return EmailTemplate
	 */
	public function setCreatedDate($createdDate) {
		$this->createdDate = $createdDate;

		return $this;
	}

	/**
	 * Get createdDate
	 *
	 * @return \DateTime 
	 */
	public function getCreatedDate() {
		return $this->createdDate;
	}

	/**
	 * Set updatedDate
	 *
	 * @param \DateTime $updatedDate
	 * @return EmailTemplate
	 */
	public function setUpdatedDate($updatedDate) {
		$this->updatedDate = $updatedDate;

		return $this;
	}

	/**
	 * Get updatedDate
	 *
	 * @return \DateTime 
	 */
	public function getUpdatedDate() {
		return $this->updatedDate;
	}

    /**
     * Set subjectEmail
     *
     * @param string $subjectEmail
     * @return EmailTemplate
     */
    public function setSubjectEmail($subjectEmail)
    {
        $this->subjectEmail = $subjectEmail;
    
        return $this;
    }

    /**
     * Get subjectEmail
     *
     * @return string 
     */
    public function getSubjectEmail()
    {
        return $this->subjectEmail;
    }
}