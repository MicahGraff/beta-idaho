$(document).ready(function() {

var html = jQuery('html');
var scrollPosition;

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

  lockScroll();
}

function hideNav()
{
  $("#menuNav").addClass("hide");
  $("#menudiv").removeClass("hide");

  unlockScroll();
}

function lockScroll()
{
  scrollPosition = [
  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
  self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  ];

  html.data('scroll-position', scrollPosition);
  html.css('overflow', 'hidden');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function unlockScroll()
{
  scrollPosition = html.data('scroll-position');
  
  html.data('scroll-position', scrollPosition);
  html.css('overflow', 'visible');
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

});