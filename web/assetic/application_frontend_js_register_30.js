/**
 * Javascript of Register Candidate Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof bCheckJavascriptRegisterCandidate !== "undefined" && bCheckJavascriptRegisterCandidate === true) {
		// Add all templates found in the DOM (it will search for <script> blocks which 
		// are of type 'text/html'.  Nb: jQuery.onReady must have fired before calling. 
		$.Mustache.addFromDom();
		
		/**
		 * Add a Language When Select Change
		 * @author Harrison <harrison@likipe.se>
		 */
		function addLanguage() {
			var $iCountInput = 0;
			var $language_select = $('.my_timeline .language_profile.language_driving_content li select');
			$language_select.each(function(){
				if( $(this).val() ) {
					$iCountInput++;
				}
				return;
			});
			if($iCountInput == $language_select.length)
			{
				//console.log(aListSettingLanguage);
				$('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language', 
					{ aListSettingLanguage: aListSettingLanguage }
				));
					
				var $added_rating = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_rating');
				$added_rating.barrating({
					showValues: false,
					showSelectedRating: false
				});
				$added_rating.removeClass('added_language_rating');
				
				var $added_language_selecter = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_selecter');
				$added_language_selecter.selecter();
				$added_language_selecter.removeClass('added_language_selecter');
			}
		}

		$(document).on('change','.my_timeline .language_profile.language_driving_content li select', addLanguage);
		
		/**
		 * Compare select
		 * @param string valueCompare
		 * @param array arrayCompare
		 * @author Harrison <harrison@likipe.se>
		 * @return boolean
		 */
		function compareinArray(valueCompare, arrayCompare) {
			var countCompare = 0;
			arrayCompare.each(function() {
				if(valueCompare.val() === $(this).val()) {
					countCompare++;
				}
				return;
			});
			if(countCompare === 2) {
				return true;
			} else {
				return false;
			}
		 }
		
		/**
		 * Check empty input
		 * @author Harrison <harrison@likipe.se>
		 * @param string idSelector
		 * @param string message
		 * @param jquery object insertedElement
		 * @returns {undefined}
		 */
		function checkValidValueInput(idSelector, messageError, insertedElement) {
			if (!$(idSelector).val()) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + messageError + '</div>').insertBefore(insertedElement);
				return true;
			}
			return false;
		}
		
		/**
		 * Validate Password, Start Date and To Date of Education and Career when Form Submit
		 * @author Harrison <harrison@likipe.se>
		 */
		 
		 $('form.register_candidate_form').submit(function( event ) {
			var $form_this = $(this);
			if (checkValidValueInput('#candidate_registration_firstName', videoCVTranslationMessages['firstNameCandidate'] , $form_this)) {
				return false;
			}
			if (checkValidValueInput('#candidate_registration_lastName', videoCVTranslationMessages['lastNameCandidate'] , $form_this)) {
				return false;
			}
			if (checkValidValueInput('#candidate_registration_email', videoCVTranslationMessages['emailCandidate'] , $form_this)) {
				return false;
			}
			if (checkValidValueInput('#candidate_registration_yearOfBirth', videoCVTranslationMessages['yearOfBirthCandidate'] , $form_this)) {
				return false;
			}
			if($('#candidate_registration_plainPassword').val().length < 8) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + videoCVTranslationMessages['lengthofPassword'] + '\n\
				   </div>').insertBefore($form_this);
				   event.preventDefault();
				   return false;
			}
			var $listEducation = $('.my_timeline .education.timeline_content ul li');
			$listEducation.each(function(){
				var $this = $(this);
				var $fromDate = parseInt($this.children('.input_date.from_date').val().replace('-',''));
				var $toDate = parseInt($this.children('.input_date.to_date').val().replace('-',''));
				if(!isNaN($fromDate) && !isNaN($toDate) && $fromDate > $toDate) {
					$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n' +
					translations['profile-education-date'] + '\n\
				   </div>').insertBefore($form_this);
					event.preventDefault();
					return false;
				}
				var $input = $this.find("input[name='still_studying_candidate[]']");
				var $inputValue = $this.find("input[name='value_still_studying_candidate[]']");
				if ($input.is(':checked')) {
					$inputValue.val('yes');
				} else {
					$inputValue.val('no');
				}
			});
			var $listCareer = $('.my_timeline .career.timeline_content ul li');
			$listCareer.each(function(){
				var $this = $(this);
				var $fromDateCareer = parseInt($this.children('.input_date.from_date').val().replace('-',''));
				var $toDateCareer = parseInt($this.children('.input_date.to_date').val().replace('-',''));
				if(!isNaN($fromDateCareer) && !isNaN($toDateCareer) && $fromDateCareer > $toDateCareer) {
					$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n' +
					translations['profile-career-date'] + '\n\
				   </div>').insertBefore($form_this);
					event.preventDefault();
					return false;
				}
				var $inputCareer = $this.find("input[name='still_working_candidate[]']");
				var $inputValueCareer = $this.find("input[name='value_still_working_candidate[]']");
				if ($inputCareer.is(':checked')) {
					$inputValueCareer.val('yes');
				} else {
					$inputValueCareer.val('no');
				}
			});
			//Check profile (language)
			var aDataId = new Array();
			var key = 0;
			$(".language_profile ul li").each(function(){
				var sId = $(this).find("select[name='language_profile_candidate[]']").val();
				if (sId !== "") {
					var id = parseInt($(this).find("select[name='language_profile_candidate[]']").val());
					aDataId[key] = id;
					key++;
				}
			});
			var iTotal = aDataId.length;
			if (0 !== iTotal) {
				var aCheck = new Array();
				$.each(aDataId, function(i, el){
					if($.inArray(el, aCheck) === -1) aCheck.push(el);
				});
				var $div = $(".my_timeline .language_driving .language_profile");
				if (aCheck.length < iTotal) {
					var error = "";
						error += "<div class='alert alert-error' style='margin-bottom: 0; margin-top: 20px;'>";
						error += "<button title='Close' class='close' data-dismiss='alert' type='button'>×</button>";
						error += "You should only be able to add the same Language once!";
						error += "</div>";
					$div.find(".alert-error").remove();
					$div.append(error);
					event.preventDefault();
				} else {
					$div.find(".alert-error").remove();
				}
			}
			if (!$form_this.find('#candidate_registration_terms').is(':checked')) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + videoCVTranslationMessages['acceptTerm'] + '</div>').insertBefore($form_this);
				return false;
			}
		});
		
		/**
		 * Remove Candidate Language when click
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('click','.language_profile a.remove_candidate_profile', function(e){
			var $ul = $(".my_timeline .language_driving .language_profile > ul");
			$(this).parent('li').remove();
			if ($ul.children().length === 0) {
				//console.log(aListSettingLanguage);
				$('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language', 
					{ aListSettingLanguage: aListSettingLanguage }
				));

				$('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language', 
					{ aListSettingLanguage: aListSettingLanguage }
				));
				var $added_rating = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_rating');
				$added_rating.barrating({
					showValues: false,
					showSelectedRating: false
				});
				$added_rating.removeClass('added_language_rating');

				var $added_language_selecter = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_selecter');
				$added_language_selecter.selecter();
				$added_language_selecter.removeClass('added_language_selecter');
			}
			e.preventDefault();
		});
		
		/**
		 * Record Video
		 * First it should only show the record button, all others are hidden.
		 * @author Rony <rony@likipe.se>
		 */
		$('#flash_recorder .commands .btn[disabled]').css('display', 'none');
		var $recordVideo = $('#flash_recorder .commands .record-video');
		var $stopVideo = $('#flash_recorder .commands .stop-video');
		var $playVideo = $('#flash_recorder .commands .play-video');
		var $saveVideo = $('#flash_recorder .commands .save-video');
		$recordVideo.css({
			'border-radius': '4px',
			'-moz-border-radius': '4px',
			'-webkit-border-radius': '4px'
		});
		
		/**
		 * Click button record
		 * @param {e} e
		 * @author Rony <rony@likipe.se>
		 */
		$recordVideo.click(function(e){
			var $this = $(this);
			$this.css('display', 'none');
			$stopVideo.css({
				'display': 'inline-block'
			});
			if ($stopVideo.hasClass('stop-button')) {
				$playVideo.css({
					'display': 'inline-block',
					'border-radius': '0',
					'-moz-border-radius': '0',
					'-webkit-border-radius': '0'
				});
				$stopVideo.css({
					'border-radius': '0',
					'-moz-border-radius': '0',
					'-webkit-border-radius': '0'
				});
			}
			if (!$this.hasClass('record-button')) {
				$stopVideo.css({
					'border-radius': '4px',
					'-moz-border-radius': '4px',
					'-webkit-border-radius': '4px'
				});
			} else {
				$playVideo.css({
					'display': 'inline-block',
					'border-radius': '0',
					'-moz-border-radius': '0',
					'-webkit-border-radius': '0'
				});
				$stopVideo.css({
					'border-radius': '4px 0 0 4px',
					'-moz-border-radius': '4px 0 0 4px',
					'-webkit-border-radius': '4px 0 0 4px'
				});
				$stopVideo.toggleClass('stop-button');
			}
			e.preventDefault();
		});
		
		/**
		 * Click button stop
		 * @param {e} e
		 * @author Rony <rony@likipe.se>
		 */
		$stopVideo.click(function(e){
			var $this = $(this);
			$this.css('display', 'none');
			$recordVideo.css({
				'display': 'inline-block',
				'border-bottom-right-radius': '0',
				'border-top-right-radius': '0'
			});
			$recordVideo.toggleClass('record-button');
			$saveVideo.css({
				'display': 'inline-block'
			});
			$playVideo.css({
				'display': 'inline-block',
				'border-radius': '0',
				'-moz-border-radius': '0',
				'-webkit-border-radius': '0'
			});
			e.preventDefault();
		});
		
		/**
		 * Click button play
		 * @param {e} e
		 * @author Rony <rony@likipe.se>
		 */
		$playVideo.click(function(e){
			var $this = $(this);
			$this.css('display', 'none');
			$stopVideo.css({
				'display': 'inline-block',
				'border-radius': '0',
				'-moz-border-radius': '0',
				'-webkit-border-radius': '0'
			});
			$saveVideo.attr( "disabled", "disabled" );
			e.preventDefault();
		});
		
		
		function calculation() {
			var $listcontent = $(".list-content .content");
			var $btnRegister = $(".register_candidate_form .candidate-register");
			//var location = $listcontent.offset();
			var left = $listcontent.offset().left;
			if($(window).width() > 1040) {
				left = left + $listcontent.width() - 39;
			} else {
				left = left + $listcontent.width() -65;
			}
			
			$btnRegister.css({
				'left': left + 'px'
			});
		}
		
		/**
		 * Fix Button Save When Window Resize
		 * @author Harrison <harrison@likipe.se>
		 */
		calculation();
		$(window).resize(calculation);

	}
});