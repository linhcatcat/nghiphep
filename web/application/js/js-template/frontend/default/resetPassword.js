/**
 * Javascript of Dashboard Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptResetPassword) !== "undefined" && bCheckJavascriptResetPassword === true) {
		/**
		 * Validate Password when Form Submit
		 * @author Harrison <harrison@likipe.se>
		 */
		 $('form.fos_user_resetting_reset').submit(function( event ) {
			if($('#fos_user_resetting_form_plainPassword_first').val().length < 8) {
				$('<div class="alert alert-error error_reset_password_message">\n\
					<button class="close" data-dismiss="alert" type="button">×</button>\n\
					Your password must have at least 8 characters.\n\
				   </div>').insertBefore($(this));
				   event.preventDefault();
			}
		});
	}
});