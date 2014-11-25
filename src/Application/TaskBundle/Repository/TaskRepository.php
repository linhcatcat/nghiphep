<?php

namespace Application\TaskBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * TaskRepository
 */
class TaskRepository extends EntityRepository {

	/**
	 * Filter 
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filter($limit, $offset, $aFilters) {
		$qb = $this->createQueryBuilder('t');
		$qb->setFirstResult($offset);
		if (0 <= $limit) {
			$qb->setMaxResults($limit);
		}
		if (isset($aFilters['id'])) {
			$qb->orderBy('t.id', $aFilters['id']);
		}
		if (isset($aFilters['created'])) {
			$qb->orderBy('t.created', $aFilters['created']);
		}

		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Filter fromdate to todate
	 * @author Alex
	 * @param array $aFilters
	 */
	public function filterFromTo($aFilters, $fromDate, $toDate) {
		$qb = $this->createQueryBuilder('t');
		$qb->where('(t.start >= :start or t.end >= :start) and (t.start <= :end or t.end <= :end)');
		$qb->setParameter('start', $fromDate);
		$qb->setParameter('end', $toDate);
		if (isset($aFilters['id'])) {
			$qb->orderBy('t.id', $aFilters['id']);
		}
		if (isset($aFilters['created'])) {
			$qb->orderBy('t.created', $aFilters['created']);
		}

		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Filter by user
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filterByUser($limit, $offset, $aFilters, $user) {
		$qb = $this->createQueryBuilder('t');
		$qb->where('t.user = :user');
		$qb->setParameter('user', $user->getId());
		$qb->setFirstResult($offset);
		if (0 <= $limit) {
			$qb->setMaxResults($limit);
		}
		if (isset($aFilters['id'])) {
			$qb->orderBy('t.id', $aFilters['id']);
		}
		if (isset($aFilters['created'])) {
			$qb->orderBy('t.created', $aFilters['created']);
		}

		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Get by user
	 * @author Alex
	 */
	public function getByUser($user) {
		$qb = $this->createQueryBuilder('t');
		$qb->where('t.user = :user');
		$qb->setParameter('user', $user->getId());
		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Filter by user ids
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filterByUserIds($limit, $offset, $aFilters, $userIds) {
		$qb = $this->createQueryBuilder('t');
		$qb->where('t.user in ('. implode( ',', $userIds ) .')');
		$qb->setFirstResult($offset);
		if (0 <= $limit) {
			$qb->setMaxResults($limit);
		}
		if (isset($aFilters['id'])) {
			$qb->orderBy('t.id', $aFilters['id']);
		}
		if (isset($aFilters['created'])) {
			$qb->orderBy('t.created', $aFilters['created']);
		}

		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Count all
	 * @author Alex
	 */
	public function countByUser($user) {
		$qb = $this->createQueryBuilder('t');
		$qb->where('t.user = :user');
		$qb->setParameter('user', $user->getId());
		$qb->select($qb->expr()->countDistinct('t.id'));
		$count = $qb->getQuery()->getSingleScalarResult();
		return $count;
	}

	/**
	 * Count by userIds
	 * @author Alex
	 */
	public function countByUserIds($userIds) {
		$qb = $this->createQueryBuilder('t');
		$qb->where('t.user in ('. implode( ',', $userIds ) .')');
		$qb->select($qb->expr()->countDistinct('t.id'));
		$count = $qb->getQuery()->getSingleScalarResult();
		return $count;
	}

	/**
	 * Count all
	 * @author Alex
	 */
	public function count() {
		$qb = $this->createQueryBuilder('t');
		$qb->select($qb->expr()->countDistinct('t.id'));
		$count = $qb->getQuery()->getSingleScalarResult();
		return $count;
	}

	/**
	 * Get product by product title
	 * @author Alex <alex@likipe.se>
	 * @param string $title Task title
	 * @param integer $iLimit and $iOffset
	 * @return array
	 */
	public function getProductByTitle($title, $iLimit = null, $iOffset = null) {
		
		$qb = $this->getEntityManager()->createQueryBuilder('t');
		$oSql = $qb->select('t')
			->from('ApplicationTaskBundle:Task', 't')
			->where($qb->expr()->like('t.title', $qb->expr()->literal('%' . $title . '%')))
			->orderBy('t.id', 'DESC')
			->setMaxResults($iLimit)
			->setFirstResult($iOffset)
			->getQuery();
		return $oSql->getResult();
	}
}
