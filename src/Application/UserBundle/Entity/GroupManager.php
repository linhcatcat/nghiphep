<?php

namespace Application\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints as DoctrineAssert;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Application\UserBundle\Entity
 * @ORM\Table(name="nghiphep.group_manager")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Application\UserBundle\Repository\GroupUserRepository")
 * @ORM\HasLifecycleCallbacks
 */
class GroupManager {
	/**
	 * @var integer $id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @ORM\OneToOne(targetEntity="Application\UserBundle\Entity\User", mappedBy="GroupUser")
	 * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=false)
	 * @Assert\NotBlank(message="User not empty!")
	 */
	protected $user;

	/**
	 * @ORM\ManyToOne(targetEntity="Application\UserBundle\Entity\Group", inversedBy="GroupUser")
	 * @ORM\JoinColumn(name="group_id", referencedColumnName="id", nullable=true)
	 */
	protected $group;

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
	 * @return groupUser
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
}