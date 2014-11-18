<?php

namespace Application\UserBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class LogRepository extends EntityRepository {
	/**
	 * Filter user with filter/paging
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filter($limit, $offset, $aFilters) {
		$qb = $this->createQueryBuilder('l');
		$qb->setFirstResult($offset);
		if (0 <= $limit) {
			$qb->setMaxResults($limit);
		}
		if (isset($aFilters['id'])) {
			$qb->orderBy('l.id', $aFilters['id']);
		}
		if (isset($aFilters['created'])) {
			$qb->orderBy('l.created', $aFilters['created']);
		}

		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Count all
	 * @author Alex
	 * Return count
	 */
	public function count() {
		$qb = $this->createQueryBuilder('l');
		$qb->select($qb->expr()->countDistinct('l.id'));
		$count = $qb->getQuery()->getSingleScalarResult();
		return $count;
	}
}