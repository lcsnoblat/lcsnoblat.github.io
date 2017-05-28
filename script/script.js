$(document).ready(function() {

  $('#animarFadeLeftToRight').css('opacity', 0);

  $('#animarFadeLeftToRight').waypoint(function() {
      $('#animarFadeLeftToRight').addClass('fadeInLeft');
  }, { offset: '30%' });

});

$(document).ready(function() {

  $('#animarFadeLeftToRight2').css('opacity', 0);

  $('#animarFadeLeftToRight2').waypoint(function() {
      $('#animarFadeLeftToRight2').addClass('fadeInRight');
  }, { offset: '30%' });

});

$('#vaiParaPagina2').scrollTo('#page2');
