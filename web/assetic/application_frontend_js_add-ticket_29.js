/**
 * Javascript of Candidate Add Ticket Page
 * @author Harrison <harrison@likipe.se>
 */
jQuery(document).ready(function($) {
	if(typeof bCheckJavascriptAddTicketCandidate !== "undefined" && bCheckJavascriptAddTicketCandidate === true) {
		function calculateMoneyTicket() {
			var numberTickets = parseInt($('form #form_add_currency input[name="candidate_buy_ticket"]:checked').val());
			if (1 === numberTickets) {
				$('form #form_add_currency > input[name="amount"]').val(2500);
			} else if (2 === numberTickets) {
				$('form #form_add_currency > input[name="amount"]').val(10000);
			} else {
				$('form #form_add_currency > input[name="amount"]').val(0);
			}
			return;
		}
		var $candidateBuyTicket = $('form #form_add_currency input[name="candidate_buy_ticket"]');
		$candidateBuyTicket.change(calculateMoneyTicket);
		$candidateBuyTicket.change();
		$(document).on('click','form #form_add_currency .buy_ticket_radios span.radio',calculateMoneyTicket);
		function fbshare() {
			FB.ui(
			  {
			   method: 'feed',
			   name: 'Vi tror på personkemi!',
			   caption: ' ',
			   description: (
				  'Ett traditionellt CV kanske kan vara bra om man vill söka jobb som programmerare, arkitekt eller kanske läkare.' +
				  'Men skall man söka ett vanligt jobb som servitris, vårdbiträde eller varför inte lagerarbetare, så tror vi det viktigaste är om man är glad och trevlig.' +
				  'Så skapa ditt "video.cv" redan idag, och visa din personlighet!'
			   ),
			   link: linkShare,
			   picture: logoSite
			  },
			  function(response) {
				if (response && response.post_id) {
					  var $listContent = $('.form_add_currency .list-content'); 
					  $.ajax({
						type: 'POST',
						url: Routing.generate('videocv_api_candidate_refillFacebookTicket', {iIdCandidate: $iIDCandidate}),
						data:
						{
							'idCandidate': $iIDCandidate
						},
						dataType: 'json',
						beforeSend: function(){
							$listContent.append($(ajaxLoader));
							$listContent.css('opacity','0.5');
						},
						success: function(data)
						{
							$('.buy_ticket_radios .facebook_ticket').remove();
							showLightboxMessage(data.message);
						},
						error: function (xhr, status, exception) {
							return;
						},
						complete: function() {
							$listContent.children('.ajax-loader-profile').remove();
							$listContent.css('opacity', '1');
						}
					});
				}
			  }
			);
		}
		$('form.form-add-ticket').submit(function(event){
			var valueRadio = parseInt($('form #form_add_currency input[name="candidate_buy_ticket"]:checked').val());
			if (0 === valueRadio && true === shownFacebookShare) {
				event.preventDefault();
				fbshare();
			}
		});
	}
});