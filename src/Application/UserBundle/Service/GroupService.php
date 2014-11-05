<?php

namespace Application\UserBundle\Service;

use Doctrine\ORM\EntityManager;

//use \InvalidArgumentException;

class GroupService {

	private $em;

	public function __construct(EntityManager $em) {
		$this->em = $em;
	}

	public function getRepository() {
		return $this->em->getRepository('ApplicationUserBundle:Group');
	}

	/**
	 * Find Product by ID
	 * @author Alex <alex@likipe.se>
	 * @param string $id
	 * @return object
	 */
	public function find($id) {
		$result = $this->getRepository()->findOneById($id);
		return $result;
	}

	/**
	 * Find one Product
	 * @author Alex <alex@likipe.se>
	 * @param string $key
	 * @param string $value
	 * @return object
	 */
	public function findOneBy($key, $value) {
		$result = $this->getRepository()->findOneByKey($key, $value);
		return $result;
	}

	/**
	 * Find one Product
	 * @author Harrison <alex@likipe.se>
	 * @param array $args
	 * @return array
	 */
	public function findBy($args) {
		$result = $this->getRepository()->findByKeys($args);

		return $result;
	}

	/**
	 * Find all Product
	 * @author Harrison <alex@likipe.se>
	 * @return array
	 */
	public function findAll() {
		$result = $this->getRepository()->findByKeys(array());

		return $result;
	}

	/**
	 * Update Product
	 * @author Alex <alex@likipe.se>
	 * @param object $oCompanyJob
	 * @return boolean
	 */
	public function update($group) {
		if (empty($group)) {
			return false;
		}
		$this->em->flush();
		return true;
	}

	/**
	 * Remove Product by ID
	 * @author Alex <alex@likipe.se>
	 * @param string $id
	 * @return boolean
	 */
	public function remove($id) {
		$group = $this->getRepository()->find($id);
		if (empty($group)) {
			return false;
		}
		$this->em->remove($group);
		$this->em->flush();

		return true;
	}

	/**
	 * Filter product with keyword/conditions/filter/paging
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filter($limit, $offset, $aFilters = array()) {
		$results = $this->getRepository()->filter($limit, $offset, $aFilters);
		return $results;
	}

	/**
	 * Count all with params & keyword
	 * @author Alex
	 * @param string $sKeyword
	 * @param array $aParams
	 */
	public function count() {
		$count = $this->getRepository()->count();
		return $count;
	}
}
