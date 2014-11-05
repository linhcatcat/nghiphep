/**
 * Javascript of Edit Company Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptIndexCompanyBackend) !== "undefined" && bCheckJavascriptIndexCompanyBackend === true) {
		function updateFsta(){
			var bData = false;
			if($('.facebook_share_to_apply_on_off #checkbox-fsta-on-off').is(':checked')) {
				bData = true;
			}
			var $listTab = $('#list-tabs');
			$.ajax({
			   type: 'PUT',
			   url: Routing.generate('videocv_api_company_edit_facebook_share_to_apply_configuration'),
			   data: {
				   'valueFsta': bData 
			   },
			   beforeSend: function() {
				   $(ajaxLoader).appendTo($listTab);
				   $listTab.css('opacity', '0.5');
			   },
			   success: function(data) {
				   if(data) {
					   showLightboxMessage("Turn on Facebook share to apply for free successfully");
				   } else {
					   showLightboxMessage("Turn off Facebook share to apply for free successfully");
				   }
				   //window.location.reload();
			   },
			   error: function (xhr, ajaxOptions, thrownError) {
				   showLightboxMessage("Can not turn on or off");
			   },
			   complete: function() {
				   $listTab.children('.ajax-loader-profile').remove();
				   $listTab.css('opacity', '1');
			   }
		   });
		}
		$('.facebook_share_to_apply_on_off #checkbox-fsta-on-off').change(updateFsta);
		$(document).on('click', '.facebook_share_to_apply_on_off span.checkbox', updateFsta);
	}
});