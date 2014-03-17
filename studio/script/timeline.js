(function($) {

  $(function(){  
      $('#logo_main').fadeIn(1000,title);
      console.log('xxxx');
  });

	var title=function(){

		$('#title_text').delay(800).fadeIn(2000,slogan);
		console.log('??');};

	var slogan=function(){

		$('#slogan').delay(800).fadeIn(2000);
		console.log('??');};





  $(function(){
    var light_on = function() {
      $('#logo_light').fadeTo(1000, 1.0, light_off);
    };
  
    var light_off = function() {
      $('#logo_light').fadeTo(1000, 0.5, light_on);
    };
  
    light_off();
  });





})($);


