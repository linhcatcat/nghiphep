<?php

namespace Application\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints as DoctrineAssert;

/**
 * Application\UserBundle\Entity
 * @ORM\Table(name="nghiphep.group_user")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Application\UserBundle\Repository\GroupUserRepository")
 * @ORM\HasLifecycleCallbacks
 */
class GroupUser {
	/**
	 * @var integer $id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @ORM\OneToOne(targetEntity="Application\UserBundle\Entity\User", mappedBy="GroupUser")
	 * @ORM\JoinColumn(name="user", referencedColumnName="id", nullable=true)
	 */
	protected $user;

	/**
	 * @ORM\OneToOne(targetEntity="Application\UserBundle\Entity\User", mappedBy="GroupUser")
	 * @ORM\JoinColumn(name="group", referencedColumnName="id", nullable=true)
	 */
	protected $group;

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
	 * @var boolean $enabled
	 * @ORM\Column(name="enabled", type="boolean", nullable=true)
	 */
	protected $enabled;

	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * Set user
	 *
	 * @param \Application\UserBundle\Entity\User $user
	 * @return CompanyJob
	 */
	public function setUser(\Application\UserBundle\Entity\User $user = null) {
		$this->user = $user;

		return $this;
	}

	/**
	 * Get user
	 *
	 * @return \Application\UserBundle\Entity\User
	 */
	public function getUser() {
		return $this->user;
	}

	/**
	 * Set group
	 *
	 * @param \Application\UserBundle\Entity\Group $group
	 * @return CompanyJob
	 */
	public function setGroup(\Application\UserBundle\Entity\Group $group = null) {
		$this->group = $group;

		return $this;
	}

	/**
	 * Get group
	 *
	 * @return \Application\UserBundle\Entity\Group
	 */
	public function getGroup() {
		return $this->group;
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
	 * Set updated
	 *
	 * @param \DateTime $updated
	 * @return Product
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
	 * Set enabled
	 *
	 * @param boolean $enabled
	 * @return Product
	 */
	public function setEnabled($enabled) {
		$this->enabled = $enabled;
		return $this;
	}

	/**
	 * Get enabled
	 *
	 * @return boolean 
	 */
	public function getEnabled() {
		return $this->enabled;
	}
}