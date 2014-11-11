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
	 * @var time $startTime
	 * @ORM\Column(name="startTime", type="time")
	 */
	protected $startTime;

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
	 * Set user
	 *
	 * @param string $user
	 * @return Task
	 */
	public function setUser($user)
	{
		$this->user = $user;
	
		return $this;
	}

	/**
	 * Get user
	 *
	 * @return string 
	 */
	public function getUser()
	{
		return $this->user;
	}

	/**
	 * Set leaveType
	 *
	 * @param string $leaveType
	 * @return Task
	 */
	public function setLeaveType($leaveType)
	{
		$this->leaveType = $leaveType;
	
		return $this;
	}

	/**
	 * Get leaveType
	 *
	 * @return string 
	 */
	public function getLeaveType()
	{
		return $this->leaveType;
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
     * Set start
     *
     * @param \DateTime $start
     * @return Task
     */
    public function setStart($start) {
        $this->start = $start;
        return $this;
    }

    /**
     * Get start
     *
     * @return \DateTime 
     */
    public function getStart() {
        return $this->start;
    }

    /**
     * Set startTime
     *
     * @param \Time $startTime
     * @return Task
     */
    public function setStartTime($startTime) {
        $this->start = $start;
        return $this;
    }

    /**
     * Get startTime
     *
     * @return \Time 
     */
    public function getStartTime() {
        return $this->startTime;
    }

    /**
     * Set end
     *
     * @param \DateTime $end
     * @return Task
     */
    public function setEnd($end) {
        $this->end = $end;
        return $this;
    }

    /**
     * Get end
     *
     * @return \DateTime 
     */
    public function getEnd() {
        return $this->end;
    }

	/**
	 * Set created
	 *
	 * @param \DateTime $created
	 * @return Task
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
     * Set updated
     *
     * @param \DateTime $updated
     * @return Task
     */
    public function setUpdated($updated) {
        $this->updated = $updated;
        return $this;
    }

    /**
     * Get updated
     *
     * @return \DateTime 
     */
    public function getUpdated() {
        return $this->updated;
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