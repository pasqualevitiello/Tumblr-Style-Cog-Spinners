jQuery(document).ready(function($) {
  
  function timer() {
    
    setTimeout(endAnim, 8000);  
    $('.again').hide();
   
  }
  
  timer();
  
  function restartAnim() {
    $('.loader-icon').removeClass('shrinking-cog').addClass('spinning-cog');
    $('.loader-background').addClass('color-flip'); 
    timer();
    $('.switches').show();
    
  }
  
  function endAnim() {
    $('.loader-icon').removeClass('spinning-cog').addClass('shrinking-cog');
    $('.loader-background').removeClass('color-flip'); 
    $('.again').delay(500).fadeIn('slow');
    $('.switches').fadeOut('slow');
     
  }
  
  
  $('.again').on('click', function(e) {
    
    e.preventDefault();
    restartAnim();
   
  });
  
  $('.switch').on('click', function(e) {
      
    var trigger = $(this);
    
    if ( !trigger.hasClass('active') ) {
      
      $('#loader').find('.loader-icon').addClass('hidden').filter('[data-cog*="' +  trigger.data('trigger') + '"]').removeClass('hidden');
      
      trigger.addClass('active').siblings('.active').removeClass('active');
      
    }
    
    e.preventDefault();
      
  });

});