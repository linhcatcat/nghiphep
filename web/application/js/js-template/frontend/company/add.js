/**
 * Javascript of Add Company Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptAddCompany) !== "undefined" && bCheckJavascriptAddCompany === true) {
		function rederContact() {
			var $emailList = $('#contactperson-fields-list');

			// grab the prototype template
			var newWidget = $emailList.attr('data-prototype');
			// replace the "__name__" used in the id and name of the prototype
			// with a number that's unique to your emails
			// end name attribute looks like name="contact[emails][2]"
			newWidget = newWidget.replace(/__name__/g, contactCount);
			contactCount++;
			
			var dataHelp = $('.form-profile .date-help-email').data('help');
			var help = '';
			help += '<a class="help" data-content="' + dataHelp + '" href="#" data-toggle="popover" data-original-title="" title="">';
			help += '<i class="icon-question-sign"></i>';
			help += '</a>';
			// create a new list element and add it to the list
			var newLi = $('<li class="contactperson-item clearfix"></li>').html(newWidget);
			$(help).appendTo(newLi);
			newLi.appendTo($('#contactperson-fields-list'));

			return false;
		}
		
		if($('#contactperson-fields-list > .contactperson-item').length <= 0) {
			rederContact();
		}
        $('#add-another-contact').click(function() {
			var emailList = $('#contactperson-fields-list');

			// grab the prototype template
			var newWidget = emailList.attr('data-prototype');
			// replace the "__name__" used in the id and name of the prototype
			// with a number that's unique to your emails
			// end name attribute looks like name="contact[emails][2]"
			newWidget = newWidget.replace(/__name__/g, contactCount);
			contactCount++;

			// create a new list element and add it to the list
			var newLi = $('<li class="contactperson-item clearfix"></li>').html(newWidget);
			var remove = $('<a class="remove-contactperson pull-right" title="Remove contact" href="#"><i class="icon-remove"></i></a>');
			remove.appendTo(newLi);
			newLi.appendTo($('#contactperson-fields-list'));

			return false;
        });
		
		/**
		 * Remove avatar
		 * @author Rony <rony@likipe.se>
		 * @param {e} e
		 */
		$(document).on('click','.contactperson-item .remove-contactperson', function(e){
			var $parent = $(this).parent('.contactperson-item');
			$parent.remove();
			e.preventDefault();
		});
		
		/**
		 * Remove avatar
		 * @author Rony <rony@likipe.se>
		 * @param {event} event
		 */
		$('#employer-setup-profile form.setup-profile').submit(function( event ) {
			var bsubmit = true;
			$('#contactperson-fields-list .contactperson-item').each(function() {
				var $this = $(this);
				var $email = $this.find("input[type='email']");
				var $emailMessage = $this.find(".error_register_message_email");
				if ('' === $email.val()) {
					if ($emailMessage.length > 0) {
						$emailMessage.remove();
					}
					$('<div class="alert alert-error error_register_message_email clearfix">\n\
						<button class="close" data-dismiss="alert" type="button">×</button>\n\
						Vänligen ange e-post adress.\n\
						</div>').appendTo($this);
					bsubmit = false;
					return false;
				} else {
					if ($emailMessage.length > 0) {
						$emailMessage.remove();
					}
				}
				
				var $password = $this.find("input[type='password']");
				var $message = $this.find(".error_register_message");
				if ($password.val().length < 8) {
					if ($message.length > 0) {
						$message.remove();
					}
					$('<div class="alert alert-error error_register_message clearfix">\n\
						<button class="close" data-dismiss="alert" type="button">×</button>\n\
						' + videoCVTranslationMessages['lengthofPassword'] + '\n\
						</div>').appendTo($this);
					bsubmit = false;
					return false;
				} else {
					if ($message.length > 0) {
						$message.remove();
					}
				}
			});
			if(!bsubmit) {
				event.preventDefault();
				return false;
			}
			if (!$('#CompanyType_terms').is(':checked')) {
				$('<div class="alert alert-error error_register_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					' + videoCVTranslationMessages['acceptTerm'] + ' </div>').insertBefore($(this));
				return false;
			}
		});
		
		$("#contactperson-fields-list .help").popover({
			"placement": "top",
			"trigger": "hover"
		});
		
		$("#contactperson-fields-list .help").click(function(e){
			e.preventDefault();
		});
	}
});