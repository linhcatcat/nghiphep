<?php

namespace Wincofood\ProductBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Wincofood\ProductBundle\Entity\Product
 * @ORM\Table(name="product")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Wincofood\ProductBundle\Repository\ProductRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Product {

    /**
     * @var integer $id
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string $title
     * @ORM\Column(name="title", type="string", length=255, nullable=true)
     */
    protected $title;

    /**
     * @var string $slug
     * @ORM\Column(name="slug", type="string", length=255, nullable=true)
     */
    protected $slug;

    /**
     * @var text $summary
     * @ORM\Column(type="text", nullable=true)
     */
    protected $summary;

    /**
     * @var text $content
     * @ORM\Column(type="text", nullable=true)
     */
    protected $content;

    /**
     * @var string $image
     * @ORM\Column(name="image", type="string", length=255, nullable=true)
     */
    protected $image;

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
     * Set title
     *
     * @param string $title
     * @return Product
     */
    public function setTitle($title) {
        $this->title = $title;
        return $this;
    }

    /**
     * Get title
     *
     * @return string 
     */
    public function getTitle() {
        return $this->title;
    }



    /**
     * Set slug
     *
     * @param string $slug
     * @return Product
     */
    public function setSlug($slug) {
        $this->slug = $slug;
        return $this;
    }

    /**
     * Get slug
     *
     * @return string 
     */
    public function getSlug() {
        return $this->slug;
    }

    /**
     * Set image
     *
     * @param string $image
     * @return Product
     */
    public function setImage($image) {
        $this->image = $image;
        return $this;
    }

    /**
     * Get image
     *
     * @return string 
     */
    public function getImage() {
        return $this->image;
    }

    /**
     * Set summary
     *
     * @param string $summary
     * @return CmsPage
     */
    public function setSummary($summary)
    {
        $this->summary = $summary;
    
        return $this;
    }

    /**
     * Get summary
     *
     * @return string 
     */
    public function getSummary()
    {
        return $this->summary;
    }

    /**
     * Set content
     *
     * @param string $content
     * @return CmsPage
     */
    public function setContent($content)
    {
        $this->content = $content;
    
        return $this;
    }

    /**
     * Get content
     *
     * @return string 
     */
    public function getContent()
    {
        return $this->content;
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