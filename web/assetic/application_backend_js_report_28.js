/**
 * Javascript of Report Page Backend
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof(bCheckJavascriptReportCandidateBackend) !== "undefined" && bCheckJavascriptReportCandidateBackend === true) {
		/**
		 * Sunmit form: View report
		 * Validation - From date have to be after to date.
		 * @author Rony<rony@likipe.se>
		 */
	   var $form = $(".form-view-search form.form-view");
	   $form.submit(function( event ) {
		   var today = new Date().getTime();
		   var fromDate = new Date($("#form-view-from").val()).getTime();
		   if (fromDate > today) {
			   showLightboxMessage("From date have to be before today!");
			   return false;
		   } else {
			   var toDate = new Date($("#form-view-to").val()).getTime();
			   if ( toDate <= fromDate ) {
				   showLightboxMessage('To date have to be after from date!');
				   return false;
			   }
		   }
		   return true;
		   event.preventDefault();
	   });

	   /**
		* Videocv\BackendBundle\Controller\PdfController\printReportAction
		* Print PDF
		* @param {event} event
		* @author Rony<rony@likipe.se>
		*/
	   $(document).on('click',"#report .print .print-pdf", function(event) {
		   var urlCurrent = window.location.href;
		   var index = urlCurrent.indexOf("?");
		   var url = '';
		   if (-1 !== index) {
			   var key = urlCurrent.split('?');
			   url = Routing.generate('videocv_backend_pdf_report', { '_format': 'pdf' }) + '?' + key[1];
		   } else {
			   url = Routing.generate('videocv_backend_pdf_report', { '_format': 'pdf' });
		   }
		   window.location = url;
		   //$(location).attr('href', url);
		   event.preventDefault();
	   });
	}
});