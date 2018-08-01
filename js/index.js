$(document).ready(function() {

var html = jQuery('html');
var scrollPosition;
var hidOnce = false;
var showOnce = false;

$(window).scroll(function(e){ 
  var $el = $('.fixedElement'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() == 0)
  {
    hidOnce = false;
    showOnce = false;
  }
  if ($(this).scrollTop() > 0.5 && !isPositionFixed)
  { 
    $('.fixedElement').css({'position': 'fixed', 'top': '20px'});
    $('#logodiv').css({'position': 'fixed', 'top': '10px'});
    $('#menuNav').css({'position': 'fixed', 'top': '0px'});
  }
  if ($(this).scrollTop() < 0.5 && isPositionFixed)
  {
    $('.fixedElement').css({'position': 'absolute', 'top': '20px'});
    $('#logodiv').css({'position': 'absolute', 'top': '10px'});
    $('#menuNav').css({'position': 'fixed', 'top': '0px'});
  }
  if ($(this).scrollTop() > 150)
  {
    $('.fixedElementHide').fadeIn(400);
    if ($('#menuNavBar').is(':visible') && !hidOnce)
    {
      hideNavBar();
      hidOnce = true;
    }
  }
  if ($(this).scrollTop() < 150)
  {
    $('.fixedElementHide').fadeOut(400);
    if ($('#menuNavBar').is(':hidden') && !showOnce)
    {
      showNavBar();
      showOnce = true;
    }
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

$("#menu").click(hideNavBar);
$("#secondarymenu").click(showNavBar);

$("#opennav").click(showNavScreen);
$("#closenav").click(hideNavScreen);

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

function showNavScreen()
{
  $("#menuNav").removeClass("hide");
  $("#something").addClass("hide");
  lockScroll();
}

function hideNavScreen()
{
  $("#menuNav").addClass("hide");
  $("#something").removeClass("hide");
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

function hideNavBar()
{
  $("#menuNavBar").toggle(600);
  $("#menu").toggle();
  $("#secondarymenu").fadeToggle(300);
}

function showNavBar()
{
  $("#menuNavBar").toggle(600);
  $("#menu").fadeToggle(300);
  $("#secondarymenu").toggle();
}

});