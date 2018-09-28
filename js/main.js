jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});
  $(".sticky").sticky({topSpacing:0, zIndex: '0'});

  $('.owl-carousel-home').owlCarousel({
    center: true,
    items:1.4,
    loop:false,
    margin:15,
    responsive:{
        600:{
            items:2
        }
    }
});



    
  $('.owl-buy').owlCarousel({
    
    margin:15,
    nav:false,
    responsive:{
      300:{
items:5
      },
        600:{
            items:8
        },
        900:{
          items:10
        }
    }
});

  // Initiate the wowjs animation library
  new WOW().init();


});
