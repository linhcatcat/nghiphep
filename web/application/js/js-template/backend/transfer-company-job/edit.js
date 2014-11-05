/**
 * Javascript of Edit Transferred Company Job Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptEditTransferredCompanyJobBackend) !== "undefined" && bCheckJavascriptEditTransferredCompanyJobBackend === true) {
		var $liFocus = $('.edit-job-backend .form-company-job-popup .li_transfer_job .data-transfer .job-transfer');
		$liFocus.each(function() {
			var $this = $(this);
			var $transferField = $this.find('.transfer-field');
			var $alert = $this.find('.informaiton-message');
			$transferField.focusin(function() {
				$alert.fadeOut(1000);
				if ($this.hasClass('li_numberofjobvacancies_transfer')) {
					$this.find('.check-is-number').fadeOut(1000);
				}
			});
		});
		var $form = $(".edit-job-backend form.form-company-job-popup");
		$form.submit(function( event ) {
			var $thisForm = $(this);
			var startDate = new Date($thisForm.find("#CompanyJobType_startDate").val()).getTime();
			var endDate = new Date($thisForm.find("#CompanyJobType_endDate").val()).getTime();
			if ( endDate <= startDate ) {
				showLightboxMessage('End date have to be after start date!');
				return false;
			}
			if(15552000000 < (endDate - startDate)) {
				showLightboxMessage('The difference between End Date and Start Date can not be more than 180!');
				return false;
			}
			var $transferJobCheck = $thisForm.find('#CompanyJobType_companyTransfer');
			var $li = $thisForm.find('.job-transfer');
			if ($transferJobCheck.is(":checked")) {
				var checkInputError = false;
				$li.each(function(){
					var $this = $(this);
					var $elementTransferField = $this.find('.transfer-field');
					if (!$this.hasClass('li_car_field_transfer') && !$this.hasClass('li_license_category_field_transfer')) {
						if (0 < $elementTransferField.length) {
							var transferField = $elementTransferField.val();
						} else {
							var transferField = $this.find('.selecter_basic').val();
						}
						var $alert = $this.find('.informaiton-message');
						if ("" === transferField || !transferField) {
							$alert.css({'display': 'block'});
							checkInputError = true;
						} else {
							$alert.css({'display': 'none'});
						}
					} else if ($this.hasClass('li_car_field_transfer') && $this.find('#CompanyJobType_qualificationTypeCar').is(':checked')) {
						var $licenseCategory = $this.closest('.data-transfer').children('.li_license_category_field_transfer');
						var $listLicenseCategories = $licenseCategory.find('.checkbox-item input[type="checkbox"]');
						var checkValue = false;
						$listLicenseCategories.each(function(){
							if ($(this).is(':checked')) {
								checkValue = true;
								return false;
							}
						});
						if (!checkValue) {
							$licenseCategory.find('.informaiton-message').css({'display': 'block'});
							checkInputError = true;
						} else {
							$licenseCategory.find('.informaiton-message').css({'display': 'none'});
						}
					}
					if ($this.hasClass('li_numberofjobvacancies_transfer')) {
						var $checkIsNumber = $this.find('.check-is-number');
						if ("" !== transferField && (Math.floor(transferField) !== parseInt(transferField) || 1 > parseInt(transferField) || 999 < parseInt(transferField))) {
							$checkIsNumber.css({'display': 'block'});
							checkInputError = true;
						} else {
							$checkIsNumber.css({'display': 'none'});
						}
					}
				});
				if (checkInputError) {
					return false;
				}
				// Check Transfer Start Date and Transfer End Date
				var transferStartDate = new Date($thisForm.find("#CompanyJobType_startingDate").val()).getTime();
				var transferEndDate = new Date($thisForm.find("#CompanyJobType_transferredEndingDate").val()).getTime();
				if(transferEndDate <= transferStartDate) {
					showLightboxMessage('End date have to be after start date!');
					return false;
				}
				if(15552000000 < (transferEndDate - transferStartDate)) {
					showLightboxMessage('The difference between End Date and Start Date can not be more than 180!');
					return false;
				}
			}
			return true;
		});
		
		/**
		 * Update selector after updating its content
		 * @author Harrison <harrison@likipe.se>
		 * @param jquery selector
		 * @returns 
		 */
		function updateSelector(selector) {
			selector.parent('.pull-left').children('.selecter').remove();
			selector.selecter();
			return;
		}
		/**
		 * Get Ocupational Group when select occupational Field
		 * @author Harrison
		 */
		$(document).on('change','#CompanyJobType_occupationField', function(){
			var $this = $(this);
			var $valueOcupationField = $this.val();
			var $ulDataTransfer = $this.closest('ul.data-transfer');
			var $selectOccupationalGroup = $ulDataTransfer.find('#CompanyJobType_occupationGroup');
			$selectOccupationalGroup.empty();
			$selectOccupationalGroup.append('<option selected="selected" value="">Välj yrkesgrupp</option>');
			updateSelector($selectOccupationalGroup);
			var $selectOccupation = $ulDataTransfer.find('#CompanyJobType_occupationId');
			$selectOccupation.empty();
			$selectOccupation.append('<option selected="selected" value="">Välj yrke</option>');
			updateSelector($selectOccupation);
			if ('' !== $valueOcupationField) {
				$.ajax({
					type: 'GET',
					url: Routing.generate('videocv_api_company_getAllOccupationGroup', {idOccupationField: $valueOcupationField}),
					beforeSend: function() {
						$(img).appendTo($ulDataTransfer);
						$ulDataTransfer.css('opacity', '0.5');
					},
					success: function(data) {
						for (var i = 0; i < data.occupationalGroups.length; i++) {
							$selectOccupationalGroup.append('<option value="' +  data.occupationalGroups[i].id + '">' + data.occupationalGroups[i].name + '</option>');
						}
						updateSelector($selectOccupationalGroup);
						for (var i = 0; i < data.occupations.length; i++) {
							$selectOccupation.append('<option value="' +  data.occupations[i].id + '">' + data.occupations[i].name + '</option>');
						}
						updateSelector($selectOccupation);
					},
					error: function(xhr, status, exception) {
						//console.log(xhr)
						return;
					},
					complete: function() {
						$ulDataTransfer.children('.ajax-loader').remove();
						$ulDataTransfer.css('opacity', '1');
					}
				});
			}
		});
		
		/**
		 * Get Ocupation when select occupational Group
		 * @author Harrison
		 */
		$(document).on('change','#CompanyJobType_occupationGroup', function(){
			var $this = $(this);
			var $valueOcupationalGroup = $this.val();
			var $ulDataTransfer = $this.closest('ul.data-transfer');
			var $selectOccupation = $ulDataTransfer.find('#CompanyJobType_occupationId');
			$selectOccupation.empty();
			$selectOccupation.append('<option selected="selected" value="">Välj yrke</option>');
			updateSelector($selectOccupation);
			if ('' !== $valueOcupationalGroup) {
				$.ajax({
					type: 'GET',
					url: Routing.generate('videocv_api_company_getAllOccupationFromGroup', {idOccupationGroup: $valueOcupationalGroup}),
					beforeSend: function() {
						$(img).appendTo($ulDataTransfer);
						$ulDataTransfer.css('opacity', '0.5');
					},
					success: function(data) {
						
						for (var i = 0; i < data.length; i++) {
							$selectOccupation.append('<option value="' +  data[i].id + '">' + data[i].name + '</option>');
						}
						updateSelector($selectOccupation);
					},
					error: function(xhr, status, exception) {
						//console.log(xhr)
						return;
					},
					complete: function() {
						$ulDataTransfer.children('.ajax-loader').remove();
						$ulDataTransfer.css('opacity', '1');
					}
				});
			}
		});
		
		/**
		 * Change Country Code
		 * @author Harrison <harrison@likipe.se>
		 */
		$('#CompanyJobType_countryCode').change(function(){
			var $this = $(this);
			if ('SE' ===$this.val()) {
				$this.closest('ul.data-transfer').children('.li_municipality_location_transfer').removeClass('hide_municipality_location');
			} else {
				$this.closest('ul.data-transfer').children('.li_municipality_location_transfer').addClass('hide_municipality_location');
			}
			return;
		});
		$('#CompanyJobType_countryCode').trigger('change');
		
		/**
		 * Logic of License
		 * @param array list
		 */
		function uncheckLicense(list) {
			for (var i = 0; i < list.length; i++) {
				$('.item-' + list[i]).find('input').prop('checked', false);
				$('.item-' + list[i]).find('span.checkbox').css('background-position', '');
			}
		}    
        $('.item-license').on('click', 'li', function(e){
            var type = $(e.currentTarget).data('type');
            var list = new Array();
            switch(type) {
                case 'AM' : 
                    list = new Array('A1', 'A', 'B', 'C', 'D', 'BE', 'CE', 'DE');
                    break;
                case 'A1' : 
                    list = new Array('AM', 'A');
                    break;
                case 'A' : 
                    list = new Array('AM', 'A1');
                    break;
                case 'B' : 
                    list = new Array('AM', 'BE');
                    break;
                case 'C' : 
                    list = new Array('AM', 'CE');
                    break;
                case 'D' : 
                    list = new Array('AM', 'DE');
                    break;
                case 'BE' : 
                    list = new Array('AM', 'B');
                    break;
                case 'CE' : 
                    list = new Array('AM', 'C');
                    break;
                case 'DE' : 
                    list = new Array('AM', 'D');
                    break;
            }
            uncheckLicense(list);
        });
	}
});