$(document).ready(function() {

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
    if ($('#menuNavBar').is(':visible') && !hidOnce && $('#menuNav').is(':hidden'))
    {
      hideNavBar();
      hidOnce = true;
    }
  }
  if ($(this).scrollTop() < 150)
  {
    $('.fixedElementHide').fadeOut(400);
    if ($('#menuNavBar').is(':hidden') && !showOnce && $('#menuNav').is(':hidden'))
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
  hideNavBar();
  $("#secondarymenu").hide();
  $("#menu").hide();
  $("#menuNav").slideToggle(400);
}

function hideNavScreen()
{
  showNavBar();
  $("#secondarymenu").hide();
  $("#menu").show();
  $("#menuNav").slideToggle(400);
  hidOnce = false;
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