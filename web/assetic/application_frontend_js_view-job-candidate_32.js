/**
 * Javascript of Company View Job Candidate
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptViewJobCandidate) !== "undefined" && bCheckJavascriptViewJobCandidate === true) {
		/**
		 * Colorbox for Avatar Candidate
		 * @author Harrison <harrison@likipe.se>
		 */
		var $listavatars = $(".company-candidate-profile .info .thumb-avatar > a");
		if($listavatars.length > 0) {
			$listavatars.colorbox({
				rel:'group1',
				maxWidth:"900px",
				close: '<i class="icon-remove"></i>'
			});
		}
		
		var $listAvatarsMobile = $(".company-candidate-profile .list_avatar .thumb-avatar > a");
		if($listAvatarsMobile.length > 0) {
			$listAvatarsMobile.colorbox({
				rel:'group1',
				maxWidth:"900px",
				close: '<i class="icon-remove"></i>'
			});
		}
		
		var $recordedVideo = $('.recorded_video_candidate');
		if($recordedVideo.length > 0) {
			$recordedVideo.colorbox({
				iframe:true, 
				width:"1000px", 
				height:"625px",
				close: '<i class="icon-remove"></i>'
			});
		}
		//Global Variable
		//var $urlProfileCompany = "{{ app.request.getSchemeAndHttpHost() ~ path('videocv_frontend_company_profile') }}";
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\putFavourite
		 * Frontend - Candidate profile pop-up
		 * Favourite - send email to user
		 * When click "Favourite"
		 * @author Rony<rony@likipe.se>
		 */
		$(document).on('click',".frontend .candidate-control .email-candidate", function(e) {
			var $parent = $(this).parents('.candidate-profile');
			//var iIdJobCandidate = parseInt($parent.children("input[name='iIdJobCandidate']").val());
			$(ajaxLoader).appendTo($parent);
			$parent.css('opacity', '0.5');
			$.ajax({
				type: 'PUT',
				url: Routing.generate('videocv_api_company_edit_favourite_jobCandidate', {iIdJobCandidate: iIdJobCandidate}),
				contentType: 'application/json',
				success: function(data) {
					$parent.children('.ajax-loader-profile').remove();
					$parent.css('opacity', '1');
					window.location.href = $urlProfileCompany;
				},
				error: function(xhr, status, exception) {
					$parent.children('.ajax-loader-profile').remove();
					$parent.css('opacity', '1');
					showLightboxMessage('Error: ' + xhr.responseJSON.error);
				}
			});
			e.preventDefault();
		});
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\deleteNoInterest
		 * Frontend - Candidate profile pop-up
		 * No interest - It will delete from list & a notification will be send to user
		 * When click "No interest"
		 * @author Rony<rony@likipe.se>
		 */
		$(document).on('click',".frontend .candidate-control .edit-candidate", function(e) {
			var $parent = $(this).parents('.candidate-profile');
			//var iIdJobCandidate = parseInt($parent.children("input[name='iIdJobCandidate']").val());
			$(ajaxLoader).appendTo($parent);
			$parent.css('opacity', '0.5');
			$.ajax({
				type: 'DELETE',
				url: Routing.generate('videocv_api_company_deleteNoInterest', {iIdJobCandidate: iIdJobCandidate}),
				success: function(data) {
					$parent.children('.ajax-loader-profile').remove();
					$parent.css('opacity', '1');
					window.location.href = $urlProfileCompany;
				},
				error: function(xhr, status, exception) {
					showLightboxMessage('Error: ' + xhr.responseJSON.error);
				}
			});
			e.preventDefault();
		});
		
		/**
		 * Videocv\ApiBundle\Controller\CompanyController\deleteReportAbuse
		 * Frontend - Candidate profile pop-up
		 * Report Abuse => table: job_candidate (remove job candidate), remove job candidate in list all candidate, 
		 * table: candidate ( SET `abuse` = TRUE AND  `active` = FALSE), INSERT INTO `videocv`.`report_abuse`
		 * When click "Report Abuse"
		 * @author Rony<rony@likipe.se>
		 */
		$(document).on('click',".frontend .candidate-control .abuse-candidate", function(e) {
			var r = confirm(videoCVTranslationMessages['confirm_report_abuse_candidate']);
			if (true === r) {
				var $parent = $(this).parents('.candidate-profile');
				//var iIdJobCandidate = parseInt($parent.children("input[name='iIdJobCandidate']").val());
				$(ajaxLoader).appendTo($parent);
				$parent.css('opacity', '0.5');
				$.ajax({
					type: 'DELETE',
					url: Routing.generate('videocv_api_company_deleteReportAbuse', {iIdJobCandidate: iIdJobCandidate}),
					success: function(data) {
						$parent.children('.ajax-loader-profile').remove();
						$parent.css('opacity', '1');
						window.location.href = $urlProfileCompany;
					},
					error: function(xhr, status, exception) {
						showLightboxMessage('Error: ' + xhr.responseJSON.error);
					}
				});
			}
			e.preventDefault();
		});
		
		/**
		 * Click Close Button
		 * @author Harrison <harrison@likipe.se> 
		 */
		 $('#back-history-browser').click(function(e){
			if(!clickX) {
				$.ajax({
					type: 'PUT',
					url: Routing.generate('videocv_api_company_job_candidate_editClickedJobCandidate', {iIdJobCandidate: iIdJobCandidate}),
					success: function(data) {
                        history.go(-2);
						e.preventDefault();
					},
					error: function(xhr, status, exception) {                        
						history.go(-2);
						e.preventDefault();
					}
				});
			} else {
				history.go(-1);
				e.preventDefault();
			}
		 });
	}
});