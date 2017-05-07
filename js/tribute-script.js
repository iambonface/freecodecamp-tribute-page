/**
 * @file JQuery Script for Tribute Page; A freeCodeCamp Project
 * @author Bonface Mudiri 
 * Email: tastywebapps@gmail.com
 * Web: https://www.linkedin.com/in/bonface/
 */

$(function (){

	$(document).ready(function (){

		$(window).scroll(function (){
			if($(window).scrollTop() < 1){
				$('#nav').show();
				$('#yearLink').css('margin-top', '70px');

			}
		});



		$("a").click(function(event){

			if(this.hash !== ""){
				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});
				$('#nav').hide();
				$('#yearLink').css('margin-top', '0');

			}



		});

	});

})();