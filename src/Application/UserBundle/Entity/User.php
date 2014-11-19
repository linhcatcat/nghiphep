<?php

// src/Application/UserBundle/Entity/User.php

namespace Application\UserBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints as DoctrineAssert;

/**
 * Application\UserBundle\Entity
 * 
 * @ORM\Table(name="user")
 * @ORM\Entity
 * @DoctrineAssert\UniqueEntity(fields="username", message="This username already exists, you can choose another username.")
 * @ORM\Entity(repositoryClass="Application\UserBundle\Repository\UserRepository")
 * @ORM\HasLifecycleCallbacks
 */
class User extends BaseUser {

	/**
	 * @var integer $id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var string $firstName
	 * @ORM\Column(name="first_name", type="string", length=255, nullable=true)
	 */
	protected $firstName;

	/**
	 * @var string $lastName
	 * @ORM\Column(name="last_name", type="string", length=255, nullable=true)
	 */
	protected $lastName;

	/**
	 * @var float $entitled
	 * @ORM\Column(name="entitled", type="float")
	 */
	protected $entitled;

	/**
	 * @var float $taken
	 * @ORM\Column(name="taken", type="float")
	 */
	protected $taken = 0;

	/**
	 * @var float $pending
	 * @ORM\Column(name="pending", type="float")
	 */
	protected $pending = 0;

	/**
	 * @var boolean $gender
	 * @ORM\Column(name="gender", type="boolean", nullable=true)
	 */
	protected $gender;

	/**
	 * @var boolean $isDeleted
	 * @ORM\Column(name="is_deleted", type="boolean", nullable=true)
	 */
	protected $isDeleted;

	/**
	 * @var datetime $createdDate
	 * @ORM\Column(name="created_date", type="datetime", nullable=true)
	 */
	protected $createdDate;

	/**
	 * @var datetime $updatedDate
	 * @ORM\Column(name="updated_date", type="datetime", nullable=true)
	 */
	protected $updatedDate;

	/**
	 * @ORM\OneToMany(targetEntity="Application\TaskBundle\Entity\Task", mappedBy="user", cascade={"remove"})
	 */
	protected $task;

	/**
	 * Constructor
	 */
	public function __construct() {
		parent::__construct();
		$this->task = new \Doctrine\Common\Collections\ArrayCollection();
	}

	/**
	 * @ORM\PrePersist
	 */
	public function prePersist() {
		$this->createdDate = new \DateTime("now");
		$this->updatedDate = new \DateTime("now");
	}
	
	/**
	 * @ORM\PreUpdate
	 */
	public function preUpdate() {
		$this->updatedDate = new \DateTime("now");
	}


	/**
	 * Get id
	 *
	 * @return integer 
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * Set firstName
	 *
	 * @param string $firstName
	 * @return User
	 */
	public function setFirstName($firstName)
	{
		$this->firstName = $firstName;
	
		return $this;
	}

	/**
	 * Get firstName
	 *
	 * @return string 
	 */
	public function getFirstName()
	{
		return $this->firstName;
	}

	/**
	 * Set lastName
	 *
	 * @param string $lastName
	 * @return User
	 */
	public function setLastName($lastName)
	{
		$this->lastName = $lastName;
	
		return $this;
	}

	/**
	 * Get lastName
	 *
	 * @return string 
	 */
	public function getLastName()
	{
		return $this->lastName;
	}

	/**
	 * Set entitled
	 *
	 * @param float $entitled
	 * @return user
	 */
	public function setEntitled($entitled)
	{
		$this->entitled = $entitled;
	
		return $this;
	}

	/**
	 * Get entitled
	 *
	 * @return float 
	 */
	public function getEntitled()
	{
		return $this->entitled;
	}

	/**
	 * Set taken
	 *
	 * @param float $taken
	 * @return user
	 */
	public function setTaken($taken)
	{
		$this->taken = $taken;
	
		return $this;
	}

	/**
	 * Get taken
	 *
	 * @return float 
	 */
	public function getTaken()
	{
		return $this->taken;
	}

	/**
	 * Set pending
	 *
	 * @param float $pending
	 * @return user
	 */
	public function setPending($pending)
	{
		$this->pending = $pending;
	
		return $this;
	}

	/**
	 * Get pending
	 *
	 * @return float 
	 */
	public function getPending()
	{
		return $this->pending;
	}

	/**
	 * Set gender
	 *
	 * @param boolean $gender
	 * @return User
	 */
	public function setGender($gender)
	{
		$this->gender = $gender;
	
		return $this;
	}

	/**
	 * Get gender
	 *
	 * @return boolean 
	 */
	public function getGender()
	{
		return $this->gender;
	}

	/**
	 * Set isDeleted
	 *
	 * @param boolean $isDeleted
	 * @return User
	 */
	public function setIsDeleted($isDeleted)
	{
		$this->isDeleted = $isDeleted;
	
		return $this;
	}

	/**
	 * Get isDeleted
	 *
	 * @return boolean 
	 */
	public function getIsDeleted()
	{
		return $this->isDeleted;
	}

	/**
	 * Set createdDate
	 *
	 * @param \DateTime $createdDate
	 * @return User
	 */
	public function setCreatedDate($createdDate)
	{
		$this->createdDate = $createdDate;
	
		return $this;
	}

	/**
	 * Get createdDate
	 *
	 * @return \DateTime 
	 */
	public function getCreatedDate()
	{
		return $this->createdDate;
	}

	/**
	 * Set updatedDate
	 *
	 * @param \DateTime $updatedDate
	 * @return User
	 */
	public function setUpdatedDate($updatedDate)
	{
		$this->updatedDate = $updatedDate;
	
		return $this;
	}

	/**
	 * Get updatedDate
	 *
	 * @return \DateTime 
	 */
	public function getUpdatedDate()
	{
		return $this->updatedDate;
	}

	public function balance(){
		return $this->entitled - $this->taken;
	}

	/**
	 * Add task
	 *
	 * @param \Application\TaskBundle\Entity\Task $task
	 * @return task
	 */
	public function addTask(\Application\TaskBundle\Entity\Task $task)
	{
		$this->task[] = $task;
	
		return $this;
	}

	/**
	 * Remove task
	 *
	 * @param \Application\TaskBundle\Entity\Task $task
	 */
	public function removeTask(\Application\TaskBundle\Entity\Task $task)
	{
		$this->task->removeElement($task);
	}

	/**
	 * Get task
	 *
	 * @return \Doctrine\Common\Collections\Collection 
	 */
	public function getTasks()
	{
		return $this->task;
	}
}