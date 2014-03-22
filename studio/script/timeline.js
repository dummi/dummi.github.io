(function($) {

	$.fn.fullpage();
	console.log('fullpage');

	$(function(){  
      $('#logo_main').fadeIn(1000,title);
      console.log('xxxx');
  });

	var title=function(){

		$('#title_text').delay(800).animate({opacity:1},2000,slogan);
		//console.log('??');
	};

	var slogan=function(){

		$('#slogan').animate({opacity:1},2000);
		//console.log('??');
	};

})($);



