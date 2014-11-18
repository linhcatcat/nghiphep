<?php

namespace Application\LocaleBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
	public function localeAction(Request $request, $lang)
	{
		$locateService = $this->get("application_locale_service");
		$locateService->setSelectedLocale($lang);
		return $this->redirect($request->headers->get('referer'));
	}
}
