$(document).ready(function() {

$(window).scroll(function(e){
	if ($(this).scrollTop() <= 800)
  	{ 
      $('body').css('background','url("../images/aboutImages/betaidaho.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');
  	}
  	if ($(this).scrollTop() > 800 && $(this).scrollTop() <= 1700)
  	{ 
    	$('body').css('background','url("../images/aboutImages/ww2.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');
  	}
  	if ($(this).scrollTop() > 1700 && $(this).scrollTop() <= 2500)
  	{
    	$('body').css('background','url("../images/aboutImages/oldmain.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');
  	}
  	if ($(this).scrollTop() > 2500)
  	{
    	$('body').css('background','url("../images/aboutImages/betaflag.jpg") repeat center fixed').fadeIn('slow');
      $('body').css('background-size','cover').fadeIn('slow');
  	}
});

$('#ggHist').click(function() {
  $("html, body").animate({ scrollTop: "900px" }, 'slow');
});

$('#btpHist').click(function() {
	$("html, body").animate({ scrollTop: "1800px" }, 'slow');
});

$('#mopIn').click(function() {
	$("html, body").animate({ scrollTop: "2700px" }, 'slow');
});

$('#aboutarrowtop').click(function() {
  $("html, body").animate({ scrollTop: "1800px" }, 'slow');
});

$('#aboutarrowmiddle').click(function() {
  $("html, body").animate({ scrollTop: "2700px" }, 'slow');
});

});