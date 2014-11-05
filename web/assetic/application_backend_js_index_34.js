/**
 * Javascript of Edit Transferred Company Job Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if ("undefined" !== typeof(bCheckJavascriptIndexTransferredCompanyJobBackend) && true === bCheckJavascriptIndexTransferredCompanyJobBackend) {
		$('.transferred_job_action .delete-transferred-job-admin').click(function(){
			var confirmDelete = confirm(messageConfirmDelete);
			if (confirmDelete){
				return true;
			} else {
				return false;
			} 
		});
		if (showDeleteTransferredJobMessage) {
			showLightboxMessage(messageDeleteTransferredJob);
		}
	}
});