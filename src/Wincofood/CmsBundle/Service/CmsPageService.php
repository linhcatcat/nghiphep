<?php

namespace Wincofood\CmsBundle\Service;

use Doctrine\ORM\EntityManager;
use \InvalidArgumentException;
use Wincofood\CmsBundle\Entity\CmsPage;

class CmsPageService {

	private $em;
	private $container;
	
	protected static $mandatory_keys = array('name', 'slug', 'content');

	public function __construct(EntityManager $em, $container) {
		$this->em = $em;
		$this->container = $container;
	}

	public function getRepository() {
		return $this->em->getRepository('WincofoodCmsBundle:CmsPage');
	}

	/**
	 * Find by ID
	 * @author Alex <alex@likipe.se>
	 * @param string $id
	 * @return object
	 */
	public function find($id) {
		$result = $this->getRepository()->find($id);
		return $result;
	}
	
	/**
	 * Find one CMS
	 * @author Alex <alex@likipe.se>
	 * @param string $key
	 * @param string $value
	 * @return object
	 */
	public function findOneBy($key, $value) {
		$result = $this->getRepository()
				->findOneBy(array($key => $value));
		return $result;
	}

	/**
	 * Find one CMS
	 * @author Alex <alex@likipe.se>
	 * @param array $args
	 * @return array
	 */
	public function findBy($args) {
		$result = $this->getRepository()->findBy($args);
		return $result;
	}
	
	/**
	 * Find CMS by slug
	 * @author Alex <alex@likipe.se>
	 * @param string $slug
	 */
	public function findBySlug($slug)
	{
		return $this->findOneBy('slug', $slug);
	}


	/**
	 * Find all
	 * @author Alex <alex@likipe.se>
	 * @return object
	 */
	public function findAll() {
		$result = $this->getRepository()->findAll();
		return $result;
	}

	/**
	 * Insert new
	 * @author Alex <alex@likipe.se>
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
		$oCmsPage = new CmsPage();
		$oCmsPage->setName($data['name']);
		$oCmsPage->setSlug($data['slug']);
		$oCmsPage->setContent($data['content']);
		$this->em->persist($oCmsPage);
		$this->em->flush();
		return $oCmsPage;
	}
	
	/**
	 * Update 
	 * @author Alex <alex@likipe.se>
	 * @param object
	 * @return boolean
	 */
	public function update($oCmsPage) {
		if (empty($oCmsPage))
			return false;
		try {
			$this->em->flush();
		} catch (Exception $e) {
			return false;
		}
		return true;
	}

	/**
     * Remove Product by ID
     * @author Alex <alex@likipe.se>
     * @param string $id
     * @return boolean
     */
    public function remove($id) {
        $cmsPage = $this->getRepository()->find($id);
        if (empty($cmsPage)) {
            return false;
        }
        $this->em->remove($cmsPage);
        $this->em->flush();

        return true;
    }
}