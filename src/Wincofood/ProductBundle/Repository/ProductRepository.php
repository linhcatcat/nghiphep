<?php

namespace Wincofood\ProductBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * ProductRepository
 */
class ProductRepository extends EntityRepository {

	/**
	 * Filter candidate with keyword/conditions/filter/paging
	 * @author Alex
	 * @param array $aFilters
	 * @param integer $limit
	 * @param integer $offset
	 */
	public function filter($limit, $offset, $aFilters) {
		$qb = $this->createQueryBuilder('p');
		$qb->setFirstResult($offset);
		if (0 <= $limit) {
			$qb->setMaxResults($limit);
		}
		if (isset($aFilters['id'])) {
			$qb->orderBy('p.id', $aFilters['id']);
		}
		if (isset($aFilters['created'])) {
			$qb->orderBy('p.created', $aFilters['created']);
		}
		if (isset($aFilters['title'])) {
			$qb->orderBy('p.title', $aFilters['title']);
		}

		$results = $qb->getQuery()->getResult();
		return $results;
	}

	/**
	 * Count all
	 * @author Alex
	 */
	public function countAll() {
		$qb = $this->createQueryBuilder('p');
		$qb->select($qb->expr()->countDistinct('p.id'));
		$count = $qb->getQuery()->getSingleScalarResult();
		return $count;
	}

	/**
	 * Create query builder conditions with params & keyword
	 * @author Alex
	 * @param string $sKeyword
	 * @param array $aParams
	 */
	protected function _buildConditions() {
		$qb = $this->createQueryBuilder('p');
		return $qb;
	}

	/**
	 * Get product by product title
	 * @author Alex <alex@likipe.se>
	 * @param string $title Product title
	 * @param integer $iLimit and $iOffset
	 * @return array
	 */
	public function getProductByTitle($title, $iLimit = null, $iOffset = null) {
		
		$qb = $this->getEntityManager()->createQueryBuilder('p');
		$oSql = $qb->select('p')
			->from('WincofoodProductBundle:Product', 'p')
			->where($qb->expr()->like('p.title', $qb->expr()->literal('%' . $title . '%')))
			->orderBy('p.id', 'DESC')
			->setMaxResults($iLimit)
			->setFirstResult($iOffset)
			->getQuery();
		return $oSql->getResult();
	}
}
