<?php

namespace Wincofood\ApplicationBundle\Service;


use Swift_Message;
use Swift_SmtpTransport;
use Swift_Mailer;

/**
 * Mail service using 
 */
class MailService {

    private $_container;
    private $_serEmailTemplate;
    private $_mailer;

    public function __construct($container, $mailer, $serEmailTemplate) {
        $this->_container = $container;
        $this->_mailer = $mailer;
        $this->_serEmailTemplate = $serEmailTemplate;
    }

    /**
     * Send mail
     * @author Kevin <kevin@likipe.se>
     * @param string $sSubject
     * @param string $sContent
     * @param string $sFromName
     * @param string $sFromEmail
     * @param string $sToName
     * @param string $sToEmail
     */
    public function send($sSubject, $sContent, $sFromName, $sFromEmail, $sToName, $sToEmail) {
        $message = \Swift_Message::newInstance()
                ->setSubject($sSubject)
                ->setFrom(array($this->_container->getParameter('mailer_sender_email') => $this->_container->getParameter('mailer_sender_name')))
                ->setTo($sToEmail)//set email for test
                ->setCc(array('linhcatcat@gmail.com' => 'Tran Cat Linh'))
                ->setBody($sContent, 'text/html');
        $this->_container->get('mailer')->send($message);
        return true;
    }

    
    public function sendEmail($subject, $recipient, $iTemplateID, $params, $reply_to = null) {
        $content = $this->_serEmailTemplate->getTemplateEmail($iTemplateID, $params);
        if (empty($content)) {
            return false;
        }
        try {
			$emailTemplate = $this->_serEmailTemplate->find($iTemplateID);
			if (!empty($emailTemplate)) {
				$subjectEmail = $emailTemplate->getSubjectEmail();
				if (!empty($subjectEmail)) {
					$subject = $subjectEmail;
				}
			}
            $message = new Swift_Message();
            $message->setSubject($subject);
            $message->setFrom($this->_container->getParameter('mailer_sender_email'));
            $message->setTo($recipient);
            $message->setBody($content, 'text/html');
            if ($reply_to) {
                $message->setReplyTo($reply_to);
            }
            $this->_mailer->send($message);
        } catch (Exception $exc) {
            return false;
        }
        return true;
    }
	
	/**
	 * Send email with SMTP Transport
	 * @author Rony <rony@likipe.se>
	 * @param string $subject
	 * @param type $recipient
	 * @param string $iTemplateID
	 * @param array $params
	 * @param string|null $reply_to
	 * @return boolean
	 */
	 public function sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params, $reply_to = null) {
        $content = $this->_serEmailTemplate->getTemplateEmail($iTemplateID, $params);
        if (empty($content)) {
            return false;
        }
        try {
			$emailTemplate = $this->_serEmailTemplate->find($iTemplateID);
			if (!empty($emailTemplate)) {
				$subjectEmail = $emailTemplate->getSubjectEmail();
				if (!empty($subjectEmail)) {
					$subject = $subjectEmail;
				}
			}
            $message = new Swift_Message();
            $message->setSubject($subject);
			$mailerUser = $this->_container->getParameter('custom_mailer_mailer_user');
            $message->setFrom($mailerUser);
            
            $message->setTo($recipient);
            $message->setBody($content, 'text/html');
	    $message->addPart(strip_tags($content), 'text/plain');
            if ($reply_to) {
                $message->setReplyTo($reply_to);
            }
			$transport = \Swift_SmtpTransport::newInstance($this->_container->getParameter('custom_mailer_mailer_host'), 25);
				#->setUsername($mailerUser)
				#->setPassword($this->_container->getParameter('custom_mailer_mailer_password'));
			$mailer = \Swift_Mailer::newInstance($transport);
			$mailer->send($message);
        } catch (Exception $exc) {
            return false;
        }
        return true;
    }

    /**
     * Send email to user who just refiled ticket in system
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCandidateCompleteRefillTicket($recipient, array $params, $subject = 'VideoCV - Refill ticket') {
        $iTemplateID = 1;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to candidate who just register new account (success) with activate link
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCandidateCompleteRegister($recipient, array $params, $subject = 'VideoCV - Register new account') {
        $iTemplateID = 2;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who forgot password
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserForgotPassword($recipient, array $params, $subject = 'VideoCV - Forgot password') {
        $iTemplateID = 3;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is favourite
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCandidateFavouriteAlert($recipient, array $params, $subject = 'VideoCV - Favourite account') {
        $iTemplateID = 4;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is unexciting (no-interesting)
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCandidateUnexcitingAlert($recipient, array $params, $subject = 'VideoCV - Unexciting account') {
        $iTemplateID = 5;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who completely reset password
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCompleteResetPassword($recipient, array $params, $subject = 'VideoCV - Reset password') {
        $iTemplateID = 7;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is invited to register as Company
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserEmployerInvitedEmail($recipient, array $params, $subject = 'VideoCV - Invited to register as Company') {
        $iTemplateID = 8;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is reported
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCandidateReportedAccount($recipient, array $params, $subject = 'VideoCV - Reported account') {
        $iTemplateID = 9;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to admin about reported account
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendAdminReportedAccount($recipient, array $params, $subject = 'VideoCV - Reported account') {
        $iTemplateID = 10;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
	
	    /**
     * Send email to user who is reported
     * @author Harrison <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCandidateInActiveAccount($recipient, array $params, $subject = 'VideoCV - Inactive account') {
        $iTemplateID = 9;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to admin about reported account
     * @author Harrison <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendAdminInActiveAccount($recipient, array $params, $subject = 'VideoCV - Inactive account') {
        $iTemplateID = 10;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to admin about reported account
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCompleteChangePassword($recipient, array $params, $subject = 'VideoCV - Change password') {
        $iTemplateID = 11;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is registered by company (contact people)
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserEmployerRegisterByCompany($recipient, array $params, $subject = 'VideoCV - Register as Company') {
        $iTemplateID = 12;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is contacted by ADMIN
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserContactedByAdmin($recipient, array $params, $subject = 'VideoCV - Admin contact') {
        $iTemplateID = 13;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is not viewed by Company (cronjob auto send email)
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserUnviewedByCompany($recipient, array $params, $subject = 'VideoCV - Account is not viewed in company') {
        $iTemplateID = 14;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is viewed by Company
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCandidateViewed($recipient, array $params, $subject = 'VideoCV - Account is viewed in company') {
        $iTemplateID = 15;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is invited to view video
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendNewUserViewVideo($recipient, array $params, $subject = 'VideoCV - Candidate video') {
        $iTemplateID = 16;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
    
    /**
     * Send email to user who is activated complete
     * @author Kevin <kevin@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
    public function sendUserCompleteActivated($recipient, array $params, $subject = 'VideoCV - Activate account completely') {
        $iTemplateID = 17;
        $result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
        return $result;
    }
	
    /**
     * Send email to user when Admin change password
     * @author Harrison <harrison@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
	public function sendUserAdminChangePassword($recipient, array $params, $subject = 'VideoCV - Admin Change Password') {
		$iTemplateID = 18;
		$result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
		return $result;
	}

	/**
     * Send email to candidate when Admin add ticket
     * @author Rony <rony@likipe.se>
     * @param string $recipient
     * @param array $params
     * @param string $subject
     * @return booldean
     */
	public function sendAdminAddTicketCandidate($recipient, array $params, $subject = 'VideoCV - Admin Add Ticket') {
		$iTemplateID = 19;
		$result = $this->sendEmailWithCustomTransport($subject, $recipient, $iTemplateID, $params);
		return $result;
	}
}
