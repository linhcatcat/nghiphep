<?php

namespace Application\UserBundle\Service;

use Doctrine\ORM\EntityManager;
use \InvalidArgumentException;
use Application\CandidateBundle\Event\RegisterCandidateEvent;
use Application\CompanyBundle\Event\RegisterCompanyEvent;
use Application\UserBundle\Event\ActiveUserEvent;
use Application\UserBundle\Event\AdminChangePasswordUserEvent;
use Application\CandidateBundle\Event\ActiveCandidateEvent;

class UserService {

	private $em;
	private $userManager;
	private $mailService;
	private $router;
	private $oEventDispatcher;

	protected static $mandatory_user_keys = array('email');

	public function __construct(EntityManager $em, $userManager, $mailService, $router, $oEventDispatcher) {
		$this->em = $em;
		$this->userManager = $userManager;
		$this->mailService = $mailService;
		$this->router = $router;
		$this->oEventDispatcher = $oEventDispatcher;
	}

	public function getRepository() {
		return $this->em->getRepository('ApplicationUserBundle:User');
	}
	
	/**
	 * Insert a new user
	 * @author Harrison <harrison@likipe.se>
	 * @param array $data
	 * @return object
	 * @throws InvalidArgumentException
	 */
	public function insert($data = array()) {
		foreach (static::$mandatory_user_keys as $v) {
            if (!isset($data[$v])) {
                throw new InvalidArgumentException(
                'Missing candidate data for key: ' . $v);
            }
        }
		$oUser = $this->userManager->createUser();
		if(!empty($data['confirmtoken'])) {
			$oUser->setConfirmationToken($data['confirmtoken']);
		}
		$oUser->setEnabled($data['enabled']);
		$oUser->setUsername($data['username']);
		$oUser->setEmail($data['email']);
		$oUser->setPlainPassword($data['plainPassword']);
		$oUser->addRole($data['role_user']);
		if(!empty($data['candidate'])) {
			$oUser->setCandidate($data['candidate']);
		} else {
			$oUser->setEmployer($data['employer']);
		}
		$oUser->setName($data['nameUser']);
		$this->userManager->updateUser($oUser);
		return $oUser;
	}
	
	/**
	 * Insert new User and Send Email
	 * @author Harrison <harrison@likipe.se>
	 * @param array $data
	 * @param string $sTypeUser
	 * @return boolean
	 */
	public function insertAndSendMail($data = array()) {
		$oUser = $this->insert($data);
		if(empty($oUser)) {
			return false;
		}
		
		if(!empty($data['candidate'])) {
			if($this->oEventDispatcher) {
				$event = new RegisterCandidateEvent($data);
				$this->oEventDispatcher->dispatch(RegisterCandidateEvent::CANDIDATE_REGISTERED, $event);
			}
		} else {
			if($this->oEventDispatcher) {
				$event = new RegisterCompanyEvent($data);
				$this->oEventDispatcher->dispatch(RegisterCompanyEvent::COMPANY_REGISTERED, $event);
			}
		}
		return true;
	}
	
	/**
	 * Update Password for User
	 * @author Harrison <harrison@likipe.se>
	 * @param string $sEmailUser
	 * @param string $sPlainPassword
	 * @return object if successfully, otherwise false
	 */
	public function updatePassword($sEmailUser, $sPlainPassword) {
		if(empty($sPlainPassword)) {
			return false;
		}
		$oUser = $this->userManager->findUserByEmail($sEmailUser);
		if(empty($oUser)) {
			return false;
		}
		$oUser->setPlainPassword($sPlainPassword);
		$this->userManager->updateUser($oUser);
		return $oUser;
	}
	
	/**
	 * Update password and send mail for user
	 * @author Harrison <harrison@likipe.se>
	 * @param string $sEmailUser
	 * @param string $sPlainPassword
	 * @return boolean
	 */
	public function updatePasswordAndSendMail($sEmailUser, $sPlainPassword) {
		$oUser = $this->updatePassword($sEmailUser, $sPlainPassword);
		if(empty($oUser)) {
			return false;
		}
		//Send Mail To Candidate
		if($this->oEventDispatcher) {
			$event = new AdminChangePasswordUserEvent($oUser, $sPlainPassword);
			$this->oEventDispatcher->dispatch(AdminChangePasswordUserEvent::ADMIN_CHANGE_PASSWORD_USER, $event);
		}
		return true;
	}
	
	/**
	 * Active and Send Mail to User by CodeActive
	 * @author Harrison <harrison@likipe.se>
	 * @param string $sCodeActivate
	 * @return boolean
	 */
	public function activeUserByCode($sCodeActivate) {
		$oUser = $this->userManager->findUserBy(array('confirmationToken' => $sCodeActivate));
		if (empty($oUser)) {
			return false;
		} 
		$oUser->setEnabled(TRUE);
		$oUser->setConfirmationToken(NULL);
		$this->userManager->updateUser($oUser);
		if($this->oEventDispatcher) {
			$eventCandidate = new ActiveCandidateEvent($oUser);
			$this->oEventDispatcher->dispatch(ActiveCandidateEvent::CANDIDATE_ACTIVATED, $eventCandidate);
			//Send Email
			$eventMail = new ActiveUserEvent($oUser);
			$this->oEventDispatcher->dispatch(ActiveUserEvent::USER_ACTIVATED, $eventMail);
		}
		
		return true;
	}
	
	/**
	 * Get user by role
	 * @author Rony <rony@likipe.se>
	 * @param string $role
	 * @return array
	 */
	public function getUserByRoles($role) {
		$qb = $this->em->createQueryBuilder();
		$sql = $qb->select('u')
			->from('ApplicationUserBundle:User', 'u')
			->where('u.roles LIKE :roles')
			->setParameter('roles', "%{$role}%")
			->getQuery();
			
		return $sql->getResult();
	}
	
	/**
	 * Insert user
	 * @author Alex <alex@likipe.se>
	 * @param array $data
	 * @return object
	 * @throws InvalidArgumentException
	 */
	public function insertUser($data = array()) {
		foreach (static::$mandatory_user_keys as $v) {
			if (!isset($data[$v])) {
				throw new InvalidArgumentException(
				'Missing candidate data for key: ' . $v);
			}
		}
		$user = $this->userManager->createUser();
		$user->setEnabled(true);
		$user->setFirstName($data['first_name']);
		$user->setLastName($data['last_name']);
		$user->setUsername($data['username']);
		$user->setEmail($data['email']);
		$user->setEntitled($data['entitled']);
		$user->setGender($data['gender']);
		$user->setPlainPassword($data['user_plain_password']);
		$user->setRoles($data['role']);
		$this->userManager->updateUser($user);
		
		return $user;
	}
	
	/**
	 * Update user
	 * @author Alex <alex@likipe.se>
	 * @param object $user
	 * @param array $data
	 * @return object
	 */
	public function updateUser($user, $data = array()) {
		if (empty($user)) {
			return false;
		}
		$user->setFirstName($data['first_name']);
		$user->setLastName($data['last_name']);
		$user->setUsername($data['username']);
		$user->setEmail($data['email']);
		$user->setEntitled($data['entitled']);
		$user->setGender($data['gender']);
		if (!empty($data['user_plain_password'])) {
			$user->setPlainPassword($data['user_plain_password']);
		}
		$user->setRoles($data['role']);
		$this->userManager->updateUser($user);
		
		return $user;
	}
	
	/**
	 * Delete user admin
	 * @author Rony <rony@likipe.se>
	 * @param object $user
	 * @return boolean
	 */
	public function deleteUser($user) {
		if (empty($user)) {
			return false;
		}
		$this->userManager->deleteUser($user);
		
		return true;
	}
	
	/**
	 * Count all with params & keyword
	 * @author Alex
	 */
	public function count() {
		$count = $this->getRepository()->count();
		return $count;
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
}
