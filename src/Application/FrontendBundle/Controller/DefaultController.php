<?php

namespace Application\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
	private function calculatorTime($startDate, $endDate) {
		$startDate = $startDate + 86400;
		$time = 0;
		while($startDate < $endDate) {
			$w = date("w", $startDate);
			if( $w ){
				if( $w == 6 ) {
					$time = $time + 4;
				} else {
					$time = $time + 8;
				}
			}
			$startDate = $startDate + 86400;
		}
		return $time;
	}
	public function indexAction(Request $request)
	{
		$securityContext = $this->container->get('security.context');
		if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
			$user = $this->container->get('security.context')->getToken()->getUser();
			$startDate = strtotime('2014-11-05');
			$startTime = '08:30';
			//---------
			$timeStart = '08:00';
			$timeEnd = '17:00';
			$startTimeArr = array(
				'08:00' => 0,
				'08:30' => 30,
				'09:00' => 60,
				'09:30' => 90,
				'10:00' => 120,
				'10:30' => 150,
				'11:00' => 180,
				'11:30' => 210,
				'13:00' => 240,
				'13:30' => 270,
				'14:00' => 300,
				'14:30' => 330,
				'15:00' => 360,
				'15:30' => 390,
				'16:00' => 420,
				'16:30' => 450,
			);
			$endDate = strtotime('2014-11-12');
			$endTimeArr = array(
				'08:00' => 0,
				'08:30' => 30,
				'09:00' => 60,
				'09:30' => 90,
				'10:00' => 120,
				'10:30' => 150,
				'11:00' => 180,
				'11:30' => 210,
				'12:00' => 240,
				'13:30' => 270,
				'14:00' => 300,
				'14:30' => 330,
				'15:00' => 360,
				'15:30' => 390,
				'16:00' => 420,
				'16:30' => 450,
				'17:00' => 480,
			);
			$endTime = '16:30';
			if( $startDate < $endDate ) {
				$time1 = $endTimeArr[$timeEnd] - $startTimeArr[$startTime];
				$time2 = $endTimeArr[$endTime] - $endTimeArr[$timeStart];
				var_dump($time1);
				var_dump('-');
				var_dump($time2);
				var_dump('-');
				var_dump($time1 + $time2 );
				var_dump($this->caculatorTime($startDate, $endDate));
			} else {

			}
			var_dump(date("Y-m-d H:i:s w", strtotime('2014-11-08')));

			
			/*$txtStartDate = $request->get('txtStartDate');
			$txtEndDate = $request->get('txtEndDate');
			if( $txtStartDate && $txtEndDate){
				var_dump($txtEndDate);
				var_dump($txtStartDate);exit();
			}*/
			return $this->render('ApplicationFrontendBundle:Default:index.html.twig', array('user' => $user));
		} else {
			return $this->redirect($this->generateUrl('application_frontend_login'));
		}
	}

	public function errorAction() {
		return $this->render('ApplicationFrontendBundle:Default:error.html.twig', array());
	}
}
