/**
 * @file JQuery Script for Tribute Page; A freeCodeCamp Project
 * @author Bonface Mudiri 
 * Email: tastywebapps@gmail.com
 * Web: https://www.linkedin.com/in/bonface/
 */

$(function (){

		$("audio").trigger("pause");
	    $("audio").prop("loop", true);


	$(document).ready(function (){

		$("#zero").click(function(){
			$("audio").trigger("play");
			$("audio").prop("volume", 0.3);
		});

		$("#finito").click(function(){
			$("audio").trigger("pause");
		});

	

		$('body').addClass('hide-scroll');

		/*$('#finito').hide();*/

		$('#hyperLink').addClass('hide-hyperlink');
		$("#extra").addClass("hide-btn-extra");

		$("#zero").css("border-bottom", "none");

		$("#finito").css("border-bottom", "none");


		const height = $(window).height();

		$(window).scroll(function (){
			if($(window).scrollTop() < 1){
				$('#nav').show();
				$('#yearLink').css('margin-top', '50px');

			}

			if($(window).scrollTop() > height){
				$('#nav').hide();
				$('#yearLink').css('margin-top', '0');
				$(".right").addClass("add-transform");
			}
		});

		$("a").click(function(event){

			$('#hyperLink').removeClass('hide-hyperlink');
			$("#extra").addClass("hide-btn-extra");



			if(this.hash !== ""){
				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 1000, function(){
					window.location.hash = hash;
				});
				$('#nav').hide();
				$('#yearLink').css('margin-top', '0');
				$('#finito').show();
				$("#right1").css("transition","all 15s ease");
			}


		});

		$("#finito").click(function(){
			$("#hyperLink").addClass("hide-hyperlink");
			$("#extra").removeClass("hide-btn-extra");

		});

		$("#readMore").click(function(){
			$("#extra").removeClass("hide-btn-extra");

		});

			$(".right").hover(function(){
				$(this).removeClass("add-transform");
			});

			$(".left").hover(function(){
				$(".right").removeClass("add-transform");
			});



	});

})();