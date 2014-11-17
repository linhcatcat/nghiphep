<?php

namespace Application\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints as DoctrineAssert;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Application\UserBundle\Entity
 * @ORM\Table(name="nghiphep.log")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Application\UserBundle\Repository\LogRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Log {
	/**
	 * @var integer $id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var string $action
	 * @ORM\Column(name="action", type="string", length=255, nullable=true)
	 */
	protected $action;

	/**
	 * @var text $message
	 * @ORM\Column(name="message", type="text", nullable=true)
	 */
	protected $message;

	/**
	 * @ORM\OneToOne(targetEntity="Application\UserBundle\Entity\User", mappedBy="Log")
	 * @ORM\JoinColumn(name="author", referencedColumnName="id", nullable=false)
	 * @Assert\NotBlank(message="User not empty!")
	 */
	protected $author;

	/**
	 * @var datetime $created
	 * @ORM\Column(name="created", type="datetime")
	 */
	protected $created;

	/**
	 * Constructor
	 */
	public function __construct($action, $message, $author) {
		$this->action = $action;
		$this->message = $message;
		$this->author = $author;
	}

	/**
	 * Set action
	 *
	 * @param string $action
	 * @return Product
	 */
	public function setAction($action) {
		$this->action = $action;
		return $this;
	}

	/**
	 * Get action
	 *
	 * @return string 
	 */
	public function getAction() {
		return $this->action;
	}

	/**
	 * Set message
	 *
	 * @param string $message
	 * @return Product
	 */
	public function setMessage($message) {
		$this->message = $message;
		return $this;
	}

	/**
	 * Get message
	 *
	 * @return string 
	 */
	public function getMessage() {
		return $this->message;
	}

	/**
	 * Set author
	 *
	 * @param \Application\UserBundle\Entity\User $author
	 * @return log
	 */
	public function setAuthor(\Application\UserBundle\Entity\User $author = null) {
		$this->author = $author;

		return $this;
	}

	/**
	 * Get author
	 *
	 * @return \Application\UserBundle\Entity\User
	 */
	public function getAuthor() {
		return $this->author;
	}

	/**
	 * @ORM\PrePersist
	 */
	public function prePersist() {
		$this->created = new \DateTime("now");
	}

	/**
	 * @ORM\PreUpdate
	 */
	public function preUpdate() {
		
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
	 * Set created
	 *
	 * @param \DateTime $created
	 * @return Product
	 */
	public function setCreated($created) {
		$this->created = $created;
		return $this;
	}

	/**
	 * Get created
	 *
	 * @return \DateTime 
	 */
	public function getCreated() {
		return $this->created;
	}
}