/**
 * Javascript of Edit Candidate Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptEditCandidateBackend) !== "undefined" && bCheckJavascriptEditCandidateBackend === true) {
	// Add all templates found in the DOM (it will search for <script> blocks which 
	// are of type 'text/html'.  Nb: jQuery.onReady must have fired before calling. 
	$('input#candidate_registration_plainPassword').attr('required',false);

	$.Mustache.addFromDom();
	/**
	 * Add a Language
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
			
			$('.my_timeline .language_profile.language_driving_content > ul').append($.Mustache.render('template-candidate-profile-language', 
					{ aListSettingLanguage: aListSettingLanguage }
			));
				
			var $added_lang_rating = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_rating');
			$added_lang_rating.barrating({
				showValues: false,
				showSelectedRating: false
			});
			$added_lang_rating.removeClass('added_language_rating');
			
			var $added_lang_selecter = $('.my_timeline .language_profile.language_driving_content > ul li .added_language_selecter');
			$added_lang_selecter.selecter();
			$added_lang_selecter.removeClass('added_language_selecter');
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
	* Validate Start Date and To Date of Education and Career when Form Submit
	* @author Harrison <harrison@likipe.se>
	*/
	$('form.register_candidate_form').submit(function( event ) {
	   var $form_this = $(this);
	   var $plainPassword = $('#candidate_registration_plainPassword').val();
	   if( '' !== $plainPassword) {
		if($plainPassword.length < 8) {
				 $('<div class="alert alert-error error_register_message">\n\
					 <button class="close" data-dismiss="alert" type="button">×</button>\n\
					 Your password must have at least 8 characters.\n\
					</div>').insertBefore($form_this);
					event.preventDefault();
					return false;
		}
	   }
	   var $listEducation = $('.my_timeline .education.timeline_content ul li');
	   $listEducation.each(function(){
		   var $this = $(this);
		   var $fromDate = parseInt($this.children('.input_date.from_date').val().replace('-',''));
		   var $toDate = parseInt($this.children('.input_date.to_date').val().replace('-',''));
		   if(!isNaN($fromDate) && !isNaN($toDate) && $fromDate > $toDate) {
			   $('<div class="alert alert-error error_register_message">\n\
			   <button class="close" data-dismiss="alert" type="button">×</button>\n\
			   Education: Start Date must be less To Date .\n\
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
			   <button class="close" data-dismiss="alert" type="button">×</button>\n\
			   Career: Start Date must be less To Date .\n\
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
	   //Check profile (language and driving)
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

   });
		
		$("input[name='candidateticket']").val(iPriceTicket);
		var url = Routing.generate('videocv_frontend_candidate_ticket');
		
		/**
		 * Remove Candidate Language when click
		 * @author Harrison <harrison@likipe.se>
		 */
		$(document).on('click','.language_profile a.remove_candidate_profile', function(e){
			var $ul = $(".my_timeline .language_driving .language_profile > ul");
			$(this).parent('li').remove();
			if ($ul.children().length === 0) {
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
		 * Colorbox for Avatar Candidate
		 * @author Harrison <harrison@likipe.se>
		 */
		var $listavatars = $(".name_video_language .info .avatar_gallery > a");
		if($listavatars.length > 0) {
			$listavatars.colorbox({
				rel:'group1',
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
		
		/**
		 * Fix Button Save When Window Resize
		 * @author Harrison <harrison@likipe.se>
		 */
		
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
		calculation();
		$(window).resize(calculation);

	}
});