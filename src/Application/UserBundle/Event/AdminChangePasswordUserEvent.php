<?php

namespace Application\UserBundle\Event;

use Symfony\Component\EventDispatcher\Event;
use Application\UserBundle\Entity\User;

class AdminChangePasswordUserEvent extends Event {

	protected $oUser;
	private $sPlainPassword;


	public function __construct(User $oUSer, $sPlainPassword) {
		$this->oUser = $oUSer;
		$this->sPlainPassword = $sPlainPassword;
	}

	public function getUser() {
		return $this->oUser;
	}
	
	public function getPlainPassword() {
		return $this->sPlainPassword;
	}

	const ADMIN_CHANGE_PASSWORD_USER = 'Application.admin.change_password_user';

}
