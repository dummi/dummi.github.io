(function($) {

	$.fn.fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'fifthPage','lastPage'],
		scrollingSpeed: 700,
        easing: 'easeInQuart',
        continuousVertical: true,
		//menu: '#menu',
		//continuousVertical: false,
		css3:false
		//loopTop: true,
		//loopBottom: true
			});
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

  $('.product').mouseenter(function () {
    var $el = $(this);
    $('#section3').css({'background-color': $el.css('background-color')});
    $('.product-detail').addClass('hidden');
    $('.product-detail:eq('+$('.product').index(this)+')').removeClass('hidden');
  });

})($);



