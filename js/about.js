$(document).ready(function() {

$(window).scroll(function(e){
	if ($(this).scrollTop() <= 500)
  	{ 
      $('body').css('background','url("../images/aboutImages/betaidaho.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');

      $('#aboutarrowtop').fadeOut(200);
      $('#aboutarrowmiddle').fadeOut(200);
  	}
  	if ($(this).scrollTop() > 500 && $(this).scrollTop() <= 1150)
  	{ 
    	$('body').css('background','url("../images/aboutImages/ww2.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');

      $('#aboutarrowtop').fadeIn(200);
      $('#aboutarrowmiddle').fadeOut(200);
  	}
  	if ($(this).scrollTop() > 1150 && $(this).scrollTop() <= 1800)
  	{
    	$('body').css('background','url("../images/aboutImages/oldmain.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');

      $('#aboutarrowmiddle').fadeIn(200);
      $('#aboutarrowtop').fadeOut(200);
  	}
  	if ($(this).scrollTop() > 1800)
  	{
    	$('body').css('background','url("../images/aboutImages/betaflag.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');

      $('#aboutarrowtop').fadeOut(200);
      $('#aboutarrowmiddle').fadeOut(200);
  	}
});

$('#ggHist').click(function() {
	$('html,body').animate({
        scrollTop: $("#gghistoryscroll").offset().top},
        'slow');
});

$('#btpHist').click(function() {
	$('html,body').animate({
        scrollTop: $("#btphistoryscroll").offset().top},
        'slow');
});

$('#mopIn').click(function() {
	$('html,body').animate({
        scrollTop: $("#mopinitiativescroll").offset().top},
        'slow');
});

$('#aboutarrowtop').click(function() {
  $('html,body').animate({
        scrollTop: $("#btphistoryscroll").offset().top},
        'slow');
});

$('#aboutarrowmiddle').click(function() {
  $('html,body').animate({
        scrollTop: $("#mopinitiativescroll").offset().top},
        'slow');
});

});