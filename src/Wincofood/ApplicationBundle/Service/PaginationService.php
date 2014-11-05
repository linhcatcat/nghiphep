<?php

namespace Wincofood\ApplicationBundle\Service;

use Doctrine\ORM\EntityManager;

/**
 * Pagination service using MongoCursor
 */
class PaginationService {

	private $em;
	private $container;
	private $default_items_per_page;
	private $templating;
	
	public function __construct($templating, EntityManager $em, $container) {
		$this->templating = $templating;
		$this->em = $em;
		$this->container = $container;		
		$this->default_items_per_page = $this->container->getParameter('limit_items_per_page');
	}

	/**
	 * Get Repository
	 * Example : $sRepositoryName = VideocvCandidateBundle:Candidate
	 * @param unknown_type $sRepositoryName
	 */
	public function getRepository($sRepositoryName) {
		return $this->em->getRepository($sRepositoryName);
	}

	/**
	 * Get result list for pagination
	 * @param unknown_type $sRepositoryName
	 * @param unknown_type $page
	 * @param unknown_type $criteria
	 * @param unknown_type $orderBy
	 * @param int $limit number items per page
	 * @return unknown
	 */
	public function paginate($sRepositoryName, $page = 1, $criteria = array(), $orderBy = array(), $limit = null) {
		$page = (int) $page;
		if($limit === null) {
			$limit = $this->default_items_per_page;
		}
		$limit = (int) $limit;
		$result = $this->getRepository($sRepositoryName)
			->findBy($criteria, $orderBy, $limit, $limit * ($page - 1));

		return $result;
	}
	
	/**
	 * Get Result of list for pagination of Company and order by jobcandidates 
	 * @author Harrison<harrison@likipe.se>
	 * @param type $sRepositoryName
	 * @param type $page
	 * @param type $criteria
	 * @param type $limit
	 * @return type
	 */
	public  function paginateJobCandidates($sRepositoryName, $page = 1, $criteria , $limit = null) {
		$page = (int) $page;
		if($limit === null) {
			$limit = $this->default_items_per_page;
		}
		$limit = (int) $limit;
		$query = $this->em->createQueryBuilder()
            ->select('c')
            ->from($sRepositoryName, 'c')
            ->leftJoin('c.jobCandidates', 'a')
			->addSelect('COUNT(a.id) AS HIDDEN mycount')
            ->addOrderBy( 'mycount', $criteria)
            ->addOrderBy( 'c.id', $criteria)
			->groupBy('c.id')
			->getQuery();
		
		$result = $query->getResult();
		return $result;
	}
	
	/**
	 * Get Result of list for pagination of Job ticket
	 * @author Harrison<harrison@likipe.se>
	 * @param type $sRepositoryName
	 * @param type $page
	 * @param type $criteria
	 * @param type $limit
	 * @return type
	 */
	public  function paginateJobTicket($sRepositoryName, $page = 1, $criteria ,$fieldOrder = 'id', $limit = null) {
		$page = (int) $page;
		if($limit === null) {
			$limit = $this->default_items_per_page;
		}
		$limit = (int) $limit;
		$query = $this->em->createQueryBuilder()
            ->select('c')
            ->from($sRepositoryName, 'c')
            ->leftJoin('c.candidate', 'a')
            ->addOrderBy( 'a.'. $fieldOrder, $criteria)
			->getQuery();
		
		$result = $query->getResult();
		return $result;
	}

	/**
	 * Render pagination html for normal page with filter
	 * @author Kevin <kevin@likipe.se>
	 * @param string $sRepositoryName
	 * @param int $page
	 * @param array $criteria
	 * @param string $sParamSort
	 * @param int $limit
	 */
	public function renderPagination($sRepositoryName, $page = 1, $criteria = array(), $sParamSort = '', $limit = null) {
		if($limit === null) {
			$limit = $this->default_items_per_page;
		}
		$limit = (int) $limit;
		$result = $this->getRepository($sRepositoryName)
			->findBy($criteria);
		$total_pages = ceil(count($result) / (int) $limit);
		if ('' != $sParamSort) {
			$sParamSort = '&' . $sParamSort;
		}
		return $this->templating->render('WincofoodApplicationBundle::pagination.html.twig', array(
				'total_pages' 	=> $total_pages,
				'current_page' 	=> $page,
				'sParamSort' 	=> $sParamSort,
				'sPageKey'		=> 'page'
		));
	}
	
	/**
	 * Render Pagination Report Abuse
	 * @author Harrison<harrison@likipe.se>
	 * @param type $sRepositoryName
	 * @param type $page
	 * @param type $criteria
	 * @param string $sParamSort
	 * @param type $limit
	 * @return type
	 */
	public function renderPaginationReport($sRepositoryName, $page = 1, $criteria = array(), $sParamSort = '', $limit = null) {
		if($limit === null) {
			$limit = $this->default_items_per_page;
		}
		$limit = (int) $limit;
		$result = $this->getRepository($sRepositoryName)
			->findBy($criteria);
		$total_pages = ceil(count($result) / (int) $limit);
		if ('' != $sParamSort) {
			$sParamSort = '&' . $sParamSort;
		}
		return $this->templating->render('WincofoodApplicationBundle::paginationReport.html.twig', array(
				'total_pages' 	=> $total_pages,
				'current_page' 	=> $page,
				'sParamSort' 	=> $sParamSort,
				'sPageKey'		=> 'page'
		));
	}

	/**
	 * Render pagination html for search page with filter
	 * @author Kevin <kevin@likipe.se>
	 */
	public function renderPaginations($iCurrentPage, $iTotalPages, $aSortParams, $sPageKey = 'page') {
		$param = '';
		if (!empty($aSortParams) && is_array($aSortParams)) {
			$param = implode('&', $aSortParams);
		}
		return $this->templating->render('WincofoodApplicationBundle::pagination.html.twig', array(
				'total_pages' 	=> $iTotalPages,
				'current_page' 	=> $iCurrentPage,
				'sParamSort' 	=> $param,
				'sPageKey'		=> $sPageKey
		));
	}
	
	/**
	 * Get parameters from request
	 * @author Kevin
	 * @param unknown_type $aParams
	 * @param unknown_type $aKeys
	 */
	public function getParameters($aParams, $aKeys) {
		if (empty($aParams)) return NULL;
		$aValuesReturned = array();
		foreach ($aParams as $key => $value) {
			if (!in_array($value, array('ASC', 'DESC'))) continue;
			$sDBFieldName 	= (!empty($aKeys) && isset($aKeys[$key])) ? $aKeys[$key] : $key;
			$sNextSortType 	= 'ASC';
			if ('ASC' === $value) {
				$sNextSortType = 'DESC';
			}
			$aValuesReturned['next_sort'][$key] 			= $sNextSortType; //Params used for next click
			$aValuesReturned['filter_sort'][$sDBFieldName] 	= $value; //Params used for query in db
			$aValuesReturned['param_sort'][] 				= "{$key}={$value}"; //Params used to paste for url
		}
		return $aValuesReturned;
	}
	
	/**
	 * Render Pagination When View Job Tickets From Date, To Date
	 * @author Harrison <harrison@likipe.se>
	 * @param type $iTotalItems
	 * @param type $page
	 * @param type $sParamSort
	 * @param type $limit
	 * @param type $fromDate
	 * @param type $toDate
	 * @return type
	 */
	public function renderPaginationViewWithTotalItems($iTotalItems, $page = 1, $sParamSort = '', $limit = null, $fromDate, $toDate) {
		if ($limit === null) {
			$limit = $this->default_items_per_page;
		}
		$limit = (int) $limit;
		$total_pages = ceil($iTotalItems / (int) $limit);
		$param = ('' === $fromDate ? '' : '&from-date=' . $fromDate);
		$param .= ('' === $toDate ? '' : '&to-date=' . $toDate);
		$param .= ('' === $sParamSort) ? '' : '&' . $sParamSort;
		return $this->templating->render('WincofoodApplicationBundle::pagination.html.twig', array(
				'total_pages' 	=> $total_pages,
				'current_page' 	=> $page,
				'sParamSort' 	=> $param,
				'sPageKey'		=> 'page'
		));
	}

}