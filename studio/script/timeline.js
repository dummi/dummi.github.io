(function($) {

  $(function(){
    var light_on = function() {
      $('#logo_light').fadeTo(1000, 1.0, light_off);
    };
  
    var light_off = function() {
      $('#logo_light').fadeTo(1000, 0.0, light_on);
    };
  
    light_off();
  });

})($);
