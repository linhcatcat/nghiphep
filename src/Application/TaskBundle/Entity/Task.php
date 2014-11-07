<?php

namespace Application\TaskBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Application\TaskBundle\Entity\Task
 * @ORM\Table(name="task")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Application\TaskBundle\Repository\TaskRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Task {

	/**
	 * @var integer $id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @ORM\OneToOne(targetEntity="Application\UserBundle\Entity\User", mappedBy="Task")
	 * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=false)
	 * @Assert\NotBlank(message="User not empty!")
	 */
	protected $user;

	/**
	 * @var datetime $start
	 * @ORM\Column(name="start", type="datetime")
	 */
	protected $start;

	/**
	 * @var datetime $end
	 * @ORM\Column(name="end", type="datetime")
	 */
	protected $end;

	/**
	 * @var int $leaveType
	 * @ORM\Column(name="leave_type", type="int")
	 */
	protected $leaveType;

	/**
	 * @var text $note
	 * @ORM\Column(name="note", type="text", nullable=true)
	 */
	protected $note;

	/**
	 * @var boolean $status
	 * @ORM\Column(name="status", type="boolean", nullable=true)
	 */
	protected $status;

	/**
	 * @var datetime $created
	 * @ORM\Column(name="created", type="datetime")
	 */
	protected $created;

	/**
	 * @var datetime $updated
	 * @ORM\Column(name="updated", type="datetime")
	 */
	protected $updated;

	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * @ORM\PrePersist
	 */
	public function prePersist() {
		$this->created = new \DateTime("now");
		$this->updated = new \DateTime("now");
	}

	/**
	 * @ORM\PreUpdate
	 */
	public function preUpdate() {
		$this->updated = new \DateTime("now");
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
	 * Set note
	 *
	 * @param string $note
	 * @return Task
	 */
	public function setNote($note)
	{
		$this->note = $note;
	
		return $this;
	}

	/**
	 * Get note
	 *
	 * @return string 
	 */
	public function getNote()
	{
		return $this->note;
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

	/**
	 * Set status
	 *
	 * @param boolean $status
	 * @return Task
	 */
	public function setStatus($status) {
		$this->status = $status;
		return $this;
	}

	/**
	 * Get status
	 *
	 * @return boolean 
	 */
	public function getStatus() {
		return $this->status;
	}
}