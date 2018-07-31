$(document).ready(function() {
  

$(window).scroll(function(e){ 
  var $el = $('.fixedElement'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 0.5 && !isPositionFixed)
  { 
    $('.fixedElement').css({'position': 'fixed', 'top': '10px'});
    $('#menuNav').css({'position': 'fixed', 'top': '0px'});
  }
  if ($(this).scrollTop() < 0.5 && isPositionFixed)
  {
    $('.fixedElement').css({'position': 'absolute', 'top': '10px'});
    $('#menuNav').css({'position': 'fixed', 'top': '0px'});
  }
  if ($(this).scrollTop() > 150)
  {
  	$('.fixedElementHide').fadeIn(400);
  }
  if ($(this).scrollTop() < 150)
  {
	$('.fixedElementHide').fadeOut(400);
  }
});

$(".meetscroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#meetpage").offset().top},
        'slow');
});

$("#nextarrowbottom").click(function() {
    $('html,body').animate({
        scrollTop: $("#locationpage").offset().top},
        'slow');
});

$("#authorHover").hover(onAuthorHover, offAuthorHover);

$("#menudiv").click(showNav);
$("#menu").click(showNav);

$("#closenav").click(hideNav);

function onAuthorHover()
{
  $(".minusSymbol").hide();
  $(".plusSymbol").show();
}

function offAuthorHover()
{
  $(".minusSymbol").show();
  $(".plusSymbol").hide();
}

function showNav()
{
  $("#menuNav").removeClass("hide");
  $("#menudiv").addClass("hide");
}

function hideNav()
{
  $("#menuNav").addClass("hide");
  $("#menudiv").removeClass("hide");
}


});