/**
 * CAROUSEL RESPONSIVE LAYOUT 
 * @author Rony
 * @param {boolean} bReload description
 * @returns {undefined}
 */
function jCarouselLoad(bReload) {
	var $carouselJob = $('.carousel-job');
	if ($carouselJob.length === 0) {
		return;
	}
	var aSettings;
	if (($(window).width() <= 767) && ($(window).width() > 480)) {
		aSettings = {
			slideWidth: 300,
			minSlides: 2,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else if ($(window).width() <= 480 && $(window).width() > 320) { 
		aSettings = {
			slideWidth: 300,
			minSlides: 3,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else if ($(window).width() <= 320) {
		aSettings = {
			slideWidth: 300,
			minSlides: 2,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else if ($(window).width() <= 979 && $(window).width() >= 768) {
		aSettings = {
			slideWidth: 300,
			minSlides: 3,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			infiniteLoop : false
		};
	} else {
		aSettings = {
			slideWidth: 200,
			minSlides: 4,
			maxSlides: 6,
			moveSlides: 1,
			slideMargin: 11,
			infiniteLoop : false
		};
	}
	$carouselJob.bxSlider(aSettings);
	 if (bReload) {
		var slider = $carouselJob.bxSlider();
		slider.reloadSlider(aSettings);
	 }
}

jQuery(document).ready(function($) {
	/*____BOOTSTRAP DATEPICKER____*/ 
//	$('.form-view input.to, .form-view input.from, .company-search .from-date, #CompanyJobType_startDate, #CompanyJobType_endDate').datepicker({
//		format: 'yyyy-mm-dd'
//	});
	/*____END OF BOOTSTRAP DATEPICKER____*/ 
	
	var $selecter_basic = $(".selecter_basic");
	if($selecter_basic.length > 0){
		$selecter_basic.selecter();
	}
	
	$(".title_icon .help, .li_renew_workads .help").click(function(e){
		e.preventDefault();
	});
	
	$(".title_icon .help, .li_renew_workads .help").popover({
		"placement": "top",
		"trigger": "hover"
	});
	
	var $rating_select = $(".rating_select");
	
	if($rating_select.length > 0)
	{
		$rating_select.barrating({
			showValues: false,
			showSelectedRating: false
		});
	}
	
	/*____BOOTSTRAP FILE INPUT____*/ 
	var $file_input = $('input[type=file]');
	if ($file_input.length > 0) {
		$('input[type=file]').bootstrapFileInput();
	}
	/*____END OF BOOTSTRAP FILE INPUT____*/ 
	
	//Call jCarousel
	jCarouselLoad(false);
	
	/*____SCROLL BAR____*/ 
//	if($('#scroll-candidates').length > 0)
//		$('#scroll-candidates').mCustomScrollbar();
	/*____END OF SCROLL BAR____*/
	
	var $left_sidebar = $(".left_sidebar");
	var $btn_collapse_sidebar = $(".button_collapse_sidebar");
	$btn_collapse_sidebar.click(function(e){
		var $this = $(this);
		$left_sidebar.toggleClass("show");
		$this.toggleClass("show_sidebar");
		if($left_sidebar.hasClass("show")) {
			$left_sidebar.show();
		}
		else {
			$left_sidebar.hide();
		}
		e.preventDefault();
	});
	
	/*____WINDOW RESIZE____*/
	$(window).resize(function() {
		if ($(window).width() < 769) {
			$left_sidebar.hide();
			if($btn_collapse_sidebar.hasClass("show_sidebar")) {
				$btn_collapse_sidebar.removeClass("show_sidebar");
			}
			if($left_sidebar.hasClass("show")){
				$left_sidebar.removeClass("show");
			}
		}
		else {
			$left_sidebar.show();
			if($btn_collapse_sidebar.hasClass("show_sidebar")) {
				$btn_collapse_sidebar.removeClass("show_sidebar");
			}
			if($left_sidebar.hasClass("show")){
				$left_sidebar.removeClass("show");
			}
		}
		
		//Reload jCarousel
		jCarouselLoad(false);
		/*____END OF CAROUSEL RESPONSIVE LAYOUT (WINDOW RESIZE)____*/
	});
	/*____END OF WINDOW RESIZE____*/
	
	/**
	 * Add Education
	 * @author harrison <harrison@likipe.se>
	 */
	
	var aListYears = [];
	for(var i = new Date().getFullYear(); i > 1929; i--)
		aListYears.push({val: i});
	
	function addEducation() {
		var $schoolInput = 0;
		var $education_input_school = $('.my_timeline .education.timeline_content ul li input[name="school_candidate[]"]');
		$education_input_school.each(function(){
			if($(this).val()) {
				$schoolInput++;
			}
			return;
		});
		if ($schoolInput === $education_input_school.length) {
			var indexlabel = $('.my_timeline .education.timeline_content ul li .still_studying input').length;
			$('.my_timeline .education.timeline_content > ul').append($.Mustache.render('template-candidate-profile-education', {
				'aListYears': aListYears,
				'indexlabel': indexlabel,
				'listEducations'	: listEducations
			}));
			var $added_selecter = $('.my_timeline .education.timeline_content ul li .added_education_selecter');
			$added_selecter.each(function(){
				var $this = $(this);
				$this.selecter();
				$this.removeClass('added_education_selecter');
			});
			var $added_Spancheckbox = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying span.checkbox');
			$added_Spancheckbox.click(function(){
				var $thisSpan = $(this);
				var $input_checkbox = $thisSpan.parent('.still_studying').children('input.styled');
				$input_checkbox.click();
				return;
			});
			var $added_input = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying input');
			$added_input.change(function(){
				var $thisInput = $(this);
				if($thisInput.is(':checked')) {
					$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 -24px');
				} else {
					$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 0');
				}
				return;
			});
			
			var $inputDate = $('.my_timeline .timeline_content.education ul li.added_education_profile .input_date');
			viewDatePicker($inputDate, undefined, addEducation);
				
			$('.my_timeline .timeline_content.education ul li.added_education_profile').removeClass('added_education_profile');
		}
	}
	$(document).on('change', '.my_timeline .education.timeline_content ul li input, .my_timeline .education.timeline_content ul li select', addEducation );
	$(document).on('click', '.my_timeline .education.timeline_content ul li .still_studying span.checkbox', addEducation);
	/*-------------------------------------- End Add Education -------------------------------------------*/
	/**
	 * Add Career
	 * @author Harrison <harrison@likipe.se>
	 */
	function addCareer() {
		var $iCountInput = 0;
		var $career_input = $('.my_timeline .career.timeline_content ul li input:not(".still_working input")');
		//var $career_select = $('.my_timeline .career.timeline_content ul li select');
		
		$career_input.each(function(){
			var $this = $(this);
			if( $this.val() ) {
				$iCountInput++;
			} else if($this.hasClass('to_date')) {
				if($this.parent('li').find('.still_working input').is(':checked')) {
					$iCountInput++;
				}
			}
			return;
		});
		if($iCountInput == $career_input.length) {
			var indexlabel = $('.my_timeline .career.timeline_content ul li .still_working input').length;
			$('.my_timeline .career.timeline_content > ul').append($.Mustache.render('template-candidate-profile-career', {
				'aListYears': aListYears,
				'indexlabel': indexlabel
			}));
			
			var $added_Spancheckbox = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working span.checkbox');
			$added_Spancheckbox.click(function(){
				var $thisSpan = $(this);
				var $input_checkbox = $thisSpan.parent('.still_working').children('input.styled');
				$input_checkbox.click();
				return;
			});
			var $added_input = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working input');
			$added_input.change(function(){
				var $thisInput = $(this);
				if($thisInput.is(':checked')) {
					$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 -24px');
				} else {
					$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 0');
				}
				return;
			});
			
			var $inputDate = $('.my_timeline .timeline_content.career ul li.added_career_profile .input_date');
			viewDatePicker($inputDate, undefined, addCareer);
				
			$('.my_timeline .timeline_content.career ul li.added_career_profile').removeClass('added_career_profile');
		}
	}
	
	$(document).on('change', '.my_timeline .career.timeline_content ul li input', addCareer );
	$(document).on('click', '.my_timeline .career.timeline_content ul li .still_working span.checkbox', addCareer);
	
	/**
	 * Set url image
	 * When click Upload
	 * @param {string} source
	 * @author Rony <rony@likipe.se>
	 */
	function showUploadedItem(source) {
		var $img = $('#img-preview');
		$img.attr('src', source);
		$('.avatar-profile .remove-avatar').css('display', 'block');
	}
	
	$(document).on('change', '#fileupload', function(evt) {
		$('.remove-image').css('display', 'block');
		var i = 0, len = this.files.length, img, reader, file;
		for (; i < len; i++) {
			file = this.files[i];
			//Check filesize upload
			var iLimitFileSizeByte = iLimitFileSize * 1024000;
			var fileSize = file.size;
			if (iLimitFileSizeByte < fileSize) {
				showLightboxMessage("File upload can't be larger than " + iLimitFileSize + "MB!");
				return false;
			}
			if (!!file.type.match(/image.*/)) {
				if (window.FileReader) {
					reader = new FileReader();
					reader.onloadend = function(e) {
						showUploadedItem(e.target.result, file.fileName);
					};
					reader.readAsDataURL(file);
				}
			}
		}
	});
	
	/**
	 * Remove image
	 * @author Alex <alex@likipe.se>
	 * @param {e} e
	 */
	$(document).on('click',' .remove-image', function(e){
		var $image = $('#img-preview');
		$image.attr('src', '');
		$('#fileupload').val('');
		$('.file-input-name').html('');
		$('.check_remove_image').val(true);
		$('.remove-image').css('display', 'none');
		e.preventDefault();
	});
	
	/**
	 * Remove Candidate Profile when click
	 * @author Harrison <harrison@likipe.se>
	 */
	$(document).on('click','.timeline_content a.remove_candidate_profile', function(e){
		
		var $div = $(this).closest('.timeline_content');
		if ($div.hasClass('education')) {
			$(this).parent('li').remove();
			var $ul = $(".my_timeline .timeline_content.education > ul");
			if ($ul.children().length === 0) {
				var indexlabel = $('.my_timeline .education.timeline_content ul li .still_studying input').length;
				$('.my_timeline .education.timeline_content > ul').append($.Mustache.render('template-candidate-profile-education', {
					'aListYears': aListYears,
					'indexlabel': 0
				}));
				$('.my_timeline .education.timeline_content > ul').append($.Mustache.render('template-candidate-profile-education', {
					'aListYears': aListYears,
					'indexlabel': 1
				}));
				var $added_selecter = $('.my_timeline .education.timeline_content ul li .added_education_selecter');
				$added_selecter.each(function(){
					var $this = $(this);
					$this.selecter();
					$this.removeClass('added_education_selecter');
				});
				var $added_Spancheckbox = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying span.checkbox');
				$added_Spancheckbox.click(function(){
					var $thisSpan = $(this);
					var $input_checkbox = $thisSpan.parent('.still_studying').children('input.styled');
					$input_checkbox.click();
					return;
				});
				var $added_input = $('.my_timeline .timeline_content.education ul li.added_education_profile .still_studying input');
				$added_input.change(function(){
					var $thisInput = $(this);
					if($thisInput.is(':checked')) {
						$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 -24px');
					} else {
						$thisInput.parent('.still_studying').children('span.checkbox').css('background-position','0 0');
					}
					return;
				});

				var $inputDate = $('.my_timeline .timeline_content.education ul li.added_education_profile .input_date');
				viewDatePicker($inputDate);
				
				$('.my_timeline .timeline_content.education ul li.added_education_profile').removeClass('added_education_profile');
			} else {
				var $aListstillStudying = $('.my_timeline .timeline_content.education ul li .still_studying');
				var iPosition = 0;
				$aListstillStudying.each(function(){
					var $this = $(this);
					$this.children('label').attr('for','still_studying_checkbox_' + iPosition);
					$this.children('input').attr('id','still_studying_checkbox_' + iPosition);
					iPosition++;
					return;
				});
			}
		} else {
			$(this).parent('li').remove();
			var $ul = $(".my_timeline .timeline_content.career > ul");
			if ($ul.children().length === 0) {
				$('.my_timeline .career.timeline_content > ul').append($.Mustache.render('template-candidate-profile-career', {
					'aListYears': aListYears,
					'indexlabel': 0
				}));
				$('.my_timeline .career.timeline_content > ul').append($.Mustache.render('template-candidate-profile-career', {
					'aListYears': aListYears,
					'indexlabel': 1
				}));

				var $added_Spancheckbox = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working span.checkbox');
				$added_Spancheckbox.click(function(){
					var $thisSpan = $(this);
					var $input_checkbox = $thisSpan.parent('.still_working').children('input.styled');
					$input_checkbox.click();
					return;
				});
				var $added_input = $('.my_timeline .timeline_content.career ul li.added_career_profile .still_working input');
				$added_input.change(function(){
					var $thisInput = $(this);
					if($thisInput.is(':checked')) {
						$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 -24px');
					} else {
						$thisInput.parent('.still_working').children('span.checkbox').css('background-position','0 0');
					}
					return;
				});

				var $inputDate = $('.my_timeline .timeline_content.career ul li.added_career_profile .input_date');
				viewDatePicker($inputDate);
				
				$('.my_timeline .timeline_content.career ul li.added_career_profile').removeClass('added_career_profile');
			} else {
				var $aListStillWorking = $('.my_timeline .timeline_content.career ul li .still_working');
				var iPosition = 0;
				$aListStillWorking.each(function(){
					var $this = $(this);
					$this.children('label').attr('for','still_working_checkbox_' + iPosition);
					$this.children('input').attr('id','still_working_checkbox_' + iPosition);
					iPosition++;
					return;
				});
			}
		}
		
		e.preventDefault();
	});
	
	/**
	 * Add DatePicker for Start Date and To Date of Profile Candidate
	 * @author Rony <rony@likipe.se>
	 * @param {object} selector
	 * @param {string} formatDate
	 * @param {object} functioncallChange
	 */
	function viewDatePicker(selector, formatDate, functioncallChange) {
		if(typeof formatDate !== 'undefined') {
			$options = {
				format: formatDate
			};
		} else {
			$options = {
				format: 'yyyy-mm',
				viewMode: 'years',
				minViewMode: 'months',
				customPopup: true,
			};
		}
		if (0 < selector.length) {
			selector.each(function(){
				var iNumberChange = 0; 
				var $datePicker = $(this).datepicker($options).on('changeDate', function(){
					iNumberChange++;
                    if('undefined' !== typeof functioncallChange) {
						functioncallChange.call();
					}
					if(2 === iNumberChange) {
						$datePicker.hide();
						iNumberChange = 0;
					}
				}).data('datepicker');
			});
		}
	}
	viewDatePicker($('.my_timeline .career.timeline_content ul li .input_date'),undefined, addCareer);
	viewDatePicker($('.my_timeline .education.timeline_content ul li .input_date'),undefined, addEducation);
	viewDatePicker($('.form-view input.to, .form-view input.from, .company-search .from-date, #CompanyJobType_startDate, #CompanyJobType_endDate, #fromdate-fta-field, #todate-fta-field'), 'yyyy-mm-dd');
	
	/**
	 * Data transfer
	 * @author Rony <rony@likipe.se>
	 * @param {e} e
	 */
	$(document).on('change','#CompanyJobType_companyTransfer', function(e){
		var $this = $(this);
		var $li = $this.parents('.li_transfer_job');
		if ($this.is(':checked')) {
			$li.find('.data-transfer').slideDown();
		} else {
			$li.find('.data-transfer').slideUp();
		}
		e.preventDefault();
	});
	
	/**
	 * Data transfer
	 * @author Rony <rony@likipe.se>
	 * @param {e} e
	 */
	$(document).on('click','.li_transfer_job .company-transfer .checkbox', function(e){
		var $this = $(this);
		if (!$this.hasClass('disabled')) {
			var $li = $this.parents('.li_transfer_job');
			if ($li.find('#CompanyJobType_companyTransfer').is(':checked')) {
				$li.find('.data-transfer').slideDown();
			} else {
				$li.find('.data-transfer').slideUp();
			}
		}
		e.preventDefault();
	});
	
	
	/**
	 * Upload & Edit Avatar Candidate
	 * @author Harrison <harrison@likipe.se>
	 */
	$(document).on('change', '.upload input.avatar_candidate_upload.uploadavatar', function(evt) {
		var $this = $(this);
		var i = 0, len = this.files.length, img, reader, file;
		for (; i < len; i++) {
			file = this.files[i];
			//Check filesize upload
			var iLimitFileSizeByte = iLimitFileSize * 1024000;
			var fileSize = file.size;
			if (iLimitFileSizeByte < fileSize) {
				showLightboxMessage("File upload can't be larger than " + iLimitFileSize + "MB!");
				return false;
			}
			if (!!file.type.match(/image.*/)) {
				if (window.FileReader) {
					reader = new FileReader();
					reader.onloadend = function(e) {
						$this.closest('.item').children('img').attr('src',e.target.result );
					};
					reader.readAsDataURL(file);
				}
			}
		}
	});
	
	/**
	 * Upload & Edit PDF profile
	 * @author Rony <rony@likipe.se>
	 */
	$(document).on('change', '.candidate_profile_pdf .upload_pdf_profile input.uploadpdf', function() {
		var i = 0, len = this.files.length, file;
		for (; i < len; i++) {
			file = this.files[i];
			//Check filesize upload
			var pdfimitFileSizeByte = pdfLimitFileSize * 1024000;
			var fileSize = file.size;
			if (pdfimitFileSizeByte < fileSize) {
				showLightboxMessage( videoCVTranslationMessages['pdf_file_upload_failed'] + " " + pdfLimitFileSize + "MB.");
				return false;
			} else {
				showLightboxMessage(videoCVTranslationMessages['pdf_file_uploaded_successfully']);
			}
		}
	});
	
	/**
	 * Remove PDF in Candidate register page and edit page
	 * @author Harrison <harrison@likipe.se>
	 */
	$('.candidate_profile_pdf .remove_candidate_profile_pdf').click(function(){
		var message = (typeof confirmMessage !== 'undefined') ? confirmMessage : 'Are you sure to delete?';
		var checkConfirm = confirm(message);
		if (checkConfirm) {
			var $this = $(this);
			$this.parent('.candidate_profile_pdf').find('.upload_pdf_profile span.file-input-name').remove();
			$this.parent('.candidate_profile_pdf').find('.upload_pdf_profile input[name="pdf_profile_candidate"]').val('');
		}
		
		return;
	});

	/**
	 * Add "hold" event to the avatar for open uploader
	 * Upload and edit avatar: Company profile
	 * @author Rony <rony@likipe.se>
	 */
	var $inputUpload = $("#fileupload");
	if (0 < $inputUpload.length) {
		var element = $("#fileupload")[0];
		Hammer(element).on("hold", function() {
			$inputUpload.click();
		});
	}
	
	/**
	 * Add "hold" event to the avatar for open uploader
	 * Upload and edit avatar: Candidate profile
	 * @author Rony <rony@likipe.se>
	 */
	var $avatar = $('.avatar_video .list_avatar .item > img');
	if (0 < $avatar.length) {
		$avatar.each(function(){
			var $uploadAvatar = $(this).parent('.item').find('.uploadavatar');
			var element = $(this)[0];
			Hammer(element).on("hold", function() {
				$uploadAvatar.click();
			});
		});
	}
	
	/**
	 * Add "hold" event to the job-tab (on company view) to open edit-popup
	 * Company profile: click item company job
	 * @author Rony <rony@likipe.se>
	 */
	var $itemJobs = $('.list-job .jobs .carousel-job .item-job');
	if (0 < $itemJobs.length) {
		$itemJobs.each(function() {
			var $this = $(this);
			var $lable = $this.find('.company-job');
			var el = $lable[0];
			Hammer(el).on("hold", function() {
				var idEditJob = $this.data('editjobs');
				$(idEditJob).modal('show');
			});
		});
	}
	
	/**
	 * Rotate Avatar
	 * @author Harrison <harrison@likipe.se>
	 * @param string parentSe
	 * @param string imgSe
	 */
	$('.rotate_uploaded_image input.rotate_uploaded_image_angel_input').val('');
	function rotateImageByClick(parentSe, imgSe) {
		var valAngel = 0;
		if(typeof iosDevice !== 'undefined' && true === iosDevice) {
			$('.rotate_uploaded_image').each(function(){
				var $this = $(this);
				Hammer($this[0]).on("tap", function() {
					valAngel = valAngel + 90;
					$this.closest(parentSe).children(imgSe).rotate({ animateTo:valAngel});
					$this.children('input.rotate_uploaded_image_angel_input').val(valAngel);
				});
			});
		} else {
			$('.rotate_uploaded_image').click(function(e){
				var $this = $(this);
				valAngel = valAngel + 90;
				$this.closest(parentSe).children(imgSe).rotate({ animateTo:valAngel});
				$this.children('input.rotate_uploaded_image_angel_input').val(valAngel);
				e.preventDefault();
			});
		}
	}
	rotateImageByClick('.item', 'img');
	rotateImageByClick('.avatar', '#img-preview');
	
	var $thankBuyTickets = $('#buy-tickets-with-your-card');
	if (0 < $thankBuyTickets.length) {
		$thankBuyTickets.modal('show');
	}
	
});

/**
 * Show Lightbox message
 * @author Harrison <harrison@likipe.se>
 */
function showLightboxMessage(messageContent)
{
	var lightBoxModal = $('#show_all_message_modal');
	lightBoxModal.find('.message_content').empty().append(messageContent);
	lightBoxModal.modal('show');
	return;
}