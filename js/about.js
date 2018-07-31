$(document).ready(function() {

$(window).scroll(function(e){
	if ($(this).scrollTop() <= 750)
  	{ 
   		$('body').removeClass('new-background-1');
   		$('body').removeClass('new-background-2');
   		$('body').removeClass('new-background-3');
  	}
  	if ($(this).scrollTop() > 750 && $(this).scrollTop() <= 1500)
  	{ 
    	$('body').removeClass('new-background-2');
    	$('body').removeClass('new-background-3');
    	$('body').addClass('new-background-1');
  	}
  	if ($(this).scrollTop() > 1500 && $(this).scrollTop() <= 2250)
  	{
    	$('body').removeClass('new-background-1');
    	$('body').removeClass('new-background-3');
    	$('body').addClass('new-background-2');
  	}
  	if ($(this).scrollTop() > 2250)
  	{
    	$('body').removeClass('new-background-1');
    	$('body').removeClass('new-background-2');
    	$('body').addClass('new-background-3');
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

});