$(document).ready(function() {
	$('#fullpage').fullpage({
    
    anchors:['firstPage', 'secondPage', 'thirdPage','4thPage','5thPage'],
    menu: '#js-menu',
    autoScrolling: false,
    fitToSection: false,
    scrollingSpeed: 1200
    
  });
  
  if( screen.width > 768 ){
     var rellax = new Rellax('.rellax',{
      center: true
    });
     
  }
  
  
  
  
  $(window).on('scroll',function(){
    
    var scrollDistance = $(window).scrollTop();
    var $header = $('.js-header');
    if( scrollDistance  > 80 ){
       $header.addClass('header--scrolling');
    }
    else{
       $header.removeClass('header--scrolling');
    }
    
  });
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    navText: [],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1600:{
            items:4
        }
    }
  });
    
});