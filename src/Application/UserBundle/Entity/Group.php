<?php

namespace Application\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints as DoctrineAssert;

/**
 * Application\UserBundle\Entity
 * @ORM\Table(name="nghiphep.group")
 * @ORM\Entity
 * @DoctrineAssert\UniqueEntity(fields="name", message="This group name already exists, you can choose another group name.")
 * @ORM\Entity(repositoryClass="Application\UserBundle\Repository\GroupRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Group {
	/**
	 * @var integer $id
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var string $name
	 * @ORM\Column(name="name", type="string", length=255, nullable=true)
	 */
	protected $name;

	/**
	 * @var string $code
	 * @ORM\Column(name="code", type="string", length=255, nullable=false)
	 */
	protected $code;

	/**
     * @ORM\OneToOne(targetEntity="Application\UserBundle\Entity\User", mappedBy="group")
     * @ORM\JoinColumn(name="user", referencedColumnName="id", nullable=true)
     */
	protected $user;

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
     * @ORM\OneToMany(targetEntity="Application\UserBundle\Entity\GroupUser", mappedBy="group", cascade={"remove"})
     */
	protected $member;

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->member = new \Doctrine\Common\Collections\ArrayCollection();
	}

	public function __toString(){
	    return $this->name;
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
	 * Set name
	 *
	 * @param string $name
	 * @return Group
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
	 * Set code
	 *
	 * @param string $code
	 * @return Group
	 */
	public function setCode($code) {
		$this->code = $code;
		return $this;
	}

	/**
	 * Get code
	 *
	 * @return string 
	 */
	public function getCode() {
		return $this->code;
	}

	/**
	 * Set created
	 *
	 * @param \DateTime $created
	 * @return Group
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

	/**
     * Add member
     *
     * @param \Application\UserBundle\Entity\GroupUser $member
     * @return member
     */
    public function addMember(\Application\UserBundle\Entity\GroupUser $member)
    {
        $this->member[] = $member;
    
        return $this;
    }

    /**
     * Remove member
     *
     * @param \Application\UserBundle\Entity\GroupUser $member
     */
    public function removeMember(\Application\UserBundle\Entity\GroupUser $member)
    {
        $this->member->removeElement($member);
    }

    /**
     * Get member
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getMembers()
    {
        return $this->member;
    }
}