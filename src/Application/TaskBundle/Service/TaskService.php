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
	 * Find one task
	 * @author Harrison <alex@likipe.se>
	 * @param array $args
	 * @return array
	 */
	public function findBy($args) {
		$result = $this->getRepository()->findByKeys($args);

		return $result;
	}

	/**
	 * Find all task
	 * @author Harrison <alex@likipe.se>
	 * @return array
	 */
	public function findAll() {
		$result = $this->getRepository()->findByKeys(array());

		return $result;
	}

	/**
	 * Update task
	 * @author Alex <alex@likipe.se>
	 * @param object $oCompanyJob
	 * @return boolean
	 */
	public function update($task) {
		if (empty($task)) {
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
	 * Filter 
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filterFromTo($aFilters = array(), $fromDate, $toDate) {
		$results = $this->getRepository()->filterFromTo($aFilters, $fromDate, $toDate);
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
	 * Filter by userIds
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filterByUserIds($limit, $offset, $aFilters = array(), $userIds) {
		$results = $this->getRepository()->filterByUserIds($limit, $offset, $aFilters, $userIds);
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
	 * Count task by userIds
	 * @author Alex
	 * @param $userIds
	 * @param $count
	 */
	public function countByUserIds($userIds) {
		$count = $this->getRepository()->countByUserIds($userIds);
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
