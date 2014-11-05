<?php

namespace Application\UserBundle\Event;

use Symfony\Component\EventDispatcher\Event;
use Application\UserBundle\Entity\User;

class ActiveUserEvent extends Event {

	protected $oUser;

	public function __construct(User $oUSer) {
		$this->oUser = $oUSer;
	}

	public function getUser() {
		return $this->oUser;
	}

	const USER_ACTIVATED = 'Application.user_activated';

}
