<?php

namespace Application\TaskBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * TaskRepository
 */
class TaskRepository extends EntityRepository {

	/**
	 * Filter candidate with keyword/conditions/filter/paging
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
