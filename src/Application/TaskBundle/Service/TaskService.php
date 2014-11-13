<?php

namespace Application\TaskBundle\Service;

use Doctrine\ORM\EntityManager;

//use \InvalidArgumentException;

class TaskService {

	private $em;

	public function __construct(EntityManager $em) {
		$this->em = $em;
	}

	public function getRepository() {
		return $this->em->getRepository('ApplicationTaskBundle:Task');
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
	public function update($tasktask) {
		if (empty($tasktask)) {
			return false;
		}
		$this->em->flush();
		return true;
	}

	/**
	 * Remove Task by ID
	 * @author Alex <alex@likipe.se>
	 * @param string $id
	 * @return boolean
	 */
	public function remove($id) {
		$task = $this->getRepository()->find($id);
		if (empty($task)) {
			return false;
		}
		$this->em->remove($task);
		$this->em->flush();

		return true;
	}

	/**
	 * Filter 
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
	 * Filter by user
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filterByUser($limit, $offset, $aFilters = array(), $user) {
		$results = $this->getRepository()->filterByUser($limit, $offset, $aFilters, $user);
		return $results;
	}

	/**
	 * Count task by user
	 * @author Alex
	 * @param $user
	 * @param $count
	 */
	public function countByUser($user) {
		$count = $this->getRepository()->countByUser($user);
		return $count;
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
