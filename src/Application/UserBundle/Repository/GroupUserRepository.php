<?php

namespace Application\UserBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class GroupUserRepository extends EntityRepository {
	/**
	 * Filter user with filter/paging
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filter($limit, $offset, $aFilters, $groupID) {
		$qb = $this->createQueryBuilder('gu');
		$qb->where('gu.group = :group');
    	$qb->setParameter('group', $groupID);
		$qb->setFirstResult($offset);
		if (0 <= $limit) {
			$qb->setMaxResults($limit);
		}
		if (isset($aFilters['id'])) {
			$qb->orderBy('gu.id', $aFilters['id']);
		}
		if (isset($aFilters['created'])) {
			$qb->orderBy('gu.created', $aFilters['created']);
		}
		if (isset($aFilters['updated'])) {
			$qb->orderBy('gu.updated', $aFilters['updated']);
		}

		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Count all
	 * @author Alex
	 * Return count
	 */
	public function count($groupID) {
		$qb = $this->createQueryBuilder('gu');		
		$qb->where('gu.group = :group');
    	$qb->setParameter('group', $groupID);
		$qb->select($qb->expr()->countDistinct('gu.id'));
		$count = $qb->getQuery()->getSingleScalarResult();
		return $count;
	}

	/**
	 * Count all
	 * @author Alex
	 * Return members
	 */
	public function getMembers() {
		$qb = $this->createQueryBuilder('gu');
		//$qb->distinct('gu.user_id');
    	$results = $qb->getQuery()->getResult();
		return $results;
	}
}
