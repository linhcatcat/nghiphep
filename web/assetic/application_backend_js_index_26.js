/**
 * Javascript of Index Candidate Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptIndexCandidateBackend) !== "undefined" && bCheckJavascriptIndexCandidateBackend === true) {
		/**
		* Set abuse with ajax
		* When click checkbox abuse
		* @param {object} e
		* @author Rony <rony@likipe.se>
		*/
	   $(document).on('click',"td.abuse span.checkbox", function(e) {
		   var $this = $(this);
		   var $parent = $this.parent('.abuse');
		   var iIdCandidate = parseInt($parent.children("input[name='sCandidateAbuseID']").val());
		   var $contentCandidate = $this.closest('div.active_user.content');
		   var oData = {};
		   oData['id'] = iIdCandidate;
		   $.ajax({
			   type: 'PUT',
			   url: Routing.generate('videocv_api_candidate_edit_abuse', {iIdCandidate: iIdCandidate}),
			   contentType: 'application/json',
			   data: oData,
			   beforeSend: function() {
				   $(ajaxLoader).appendTo($contentCandidate);
				   $contentCandidate.css('opacity', '0.5');
			   },
			   success: function(data) {
				   window.location.reload();
			   },
			   error: function (xhr, ajaxOptions, thrownError) {
				   showLightboxMessage("Can not found this Candiate in System");
			   },
			   complete: function() {
				   $contentCandidate.children('.ajax-loader-profile').remove();
				   $contentCandidate.css('opacity', '1');
			   }
		   });
		   e.preventDefault();
	   });

	   /**
		* Set abuse with ajax
		* When click abuse in Profile Candidate
		* @param {object} e
		* @author Harrison <harrison@likipe.se>
		*/

		$(document).on('click', ".candidate-profile .abuse-candidate", function(e) {
			var sure = confirm(videoCVTranslationMessages['are_you_sure']);
			if (sure) {
				var $this = $(this);
				var $popupProfile = $this.closest('div.candidate-profile-backend');
				var iIdCandidate = parseInt($this.data('idcandidate'));
				var oData = {};
				oData['id'] = iIdCandidate;
				//var abuse = $.parseJSON(sContent);
				$.ajax({
					type: 'PUT',
					url: Routing.generate('videocv_api_candidate_edit_abuse', {iIdCandidate: iIdCandidate}),
					contentType: 'application/json',
					data: oData,
					beforeSend: function() {
						$(ajaxLoader).appendTo($popupProfile);
						$popupProfile.css('opacity', '0.5');
					},
					success: function(data) {
						if (data.abuse) {
							showLightboxMessage("Abuse Successfully");
						} else {
							showLightboxMessage("Remove Abuse Successfully");
						}
						window.location.href = reloadUrl;
					},
					error: function(xhr, ajaxOptions, thrownError) {
						showLightboxMessage("Can not found this Candiate in System");
					},
					complete: function() {
						$popupProfile.children('.ajax-loader-profile').remove();
						$popupProfile.css('opacity', '1');
					}
				});
			}
			e.preventDefault();
		});

		/**
		 * Set Active/InActive with Ajax
		 * when click Active/InActive button in Profile Popup
		 * @author Harrison<harrison@likipe.se>
		 * @param {e} e
		 */
		$(document).on('click', ".candidate-profile .active-candidate", function(e) {
			var sure = confirm(videoCVTranslationMessages['are_you_sure']);
			if (sure) {
				var $this = $(this);
				var iIdCandidate = parseInt($this.data('idcandidate'));
				var $popupProfile = $this.closest('div.candidate-profile-backend');
				var oData = {};
				oData['id'] = iIdCandidate;
				$.ajax({
					type: 'PUT',
					url: Routing.generate('videocv_api_candidate_edit_active', {iIdCandidate: iIdCandidate}),
					contentType: 'application/json',
					data: oData,
					beforeSend: function() {
						$(ajaxLoader).appendTo($popupProfile);
						$popupProfile.css('opacity', '0.5');
					},
					success: function(data) {
						if (data.active) {
							showLightboxMessage("Active Successfully");
						} else {
							showLightboxMessage("InActive Successfully");
						}
						window.location.href = reloadUrl;
					},
					error: function(xhr, ajaxOptions, thrownError) {
						showLightboxMessage("Can not found this Candiate in System");
					},
					complete: function() {
						$popupProfile.children('.ajax-loader-profile').remove();
						$popupProfile.css('opacity', '1');
					}
				});
			}
			e.preventDefault();
		});
	   /**
		* Set Admin send email to Candidate
		* when click Send E-mail button in Profile Popup
		* @author Harrison<harrison@likipe.se>
		*  @param {e} e
		*/
	   $(document).on('click',".candidate-profile .email-candidate", function(e) {
		   var $this = $(this);
		   var iIdCandidate = parseInt($this.data('idcandidate'));
		   var $popupProfile = $this.closest('div.view-popup-profile');
		   var oData = {};
		   oData['id'] = iIdCandidate;
		   $.ajax({
			   type: 'POST',
			   url: Routing.generate('videocv_api_candidate_admin_send_email', {iIdCandidate: iIdCandidate}),
			   contentType: 'application/json',
			   data: oData,
			   beforeSend: function() {
				   $(ajaxLoader).appendTo($popupProfile);
				   $popupProfile.css('opacity', '0.5');
			   },
			   success: function(data) {
				   if(data) {
					   showLightboxMessage("Send E-mail Successfully");
				   }
			   },
			   error: function (xhr, ajaxOptions, thrownError) {
				   showLightboxMessage('Error: ' + xhr.responseJSON.error);
			   },
			   complete: function() {
				   $popupProfile.children('.ajax-loader-profile').remove();
				   $popupProfile.css('opacity', '1');
			   }
		   });
		   e.preventDefault();
	   });
	}
});