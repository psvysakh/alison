 /*------------Preloader--------*/
$(window).on('load',function(){     //make sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    });

  /*-----CounterUp----*/
  $(document).ready(function(){
     $(".courselist1").click(function(){
        $(".card2").slideUp(500);
        $(".card4").slideUp(500);
         $(".card1").slideDown(500);
         $(".card1").mouseleave(function(){
            $(".card1").slideUp(500);
         });
        })
        $(".courselist2").click(function(){
            $(".card1").slideUp(500);
            $(".card4").slideUp(500);
            $(".card2").slideDown(500);
            $(".card2").mouseleave(function(){
                $(".card2").slideUp(500);
             });
        })
        $(".courselist4").click(function(){
            $(".card1").slideUp(500);
            $(".card2").slideUp(500);
            $(".card4").slideDown(500);
            $(".card4").mouseleave(function(){
                $(".card4").slideUp(500);
             });
        })
  });
 
 /*-----CounterUp----*/
 $(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
  });
  
   /*-----Slider----*/
  

$(function(){
    $(".btn-slider").click(function(){
        $("#collapseExample").slideToggle( 5000,"slow", function() {
            // Animation complete.
          });
    });
  });
 
   /*-----Testimonial-----*/
   $(document).ready(function(){
    $("#testimonial-left").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:false,
        nav:false,
        dots:false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            }
        }
    });
   });
   $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:false,
        nav:false,
        dots:true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            }
        }
    });
   });
   $(document).ready(function(){
    $(".employee-overlay").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:false,
        nav:false,
        dots:false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            }
        }
    });
   });
    
      
     
    
   
  
  /*----Show # hide whte navigation-----*/
$(function(){
    $(window).scroll(function(){
        //alert("scrolled");
        if($(window).scrollTop()>50){
          $("nav").addClass("navbar-inverse");
          $(".navbar-brand img").attr("src","img/logo/alis.svg");
          $("#back-to-top").fadeIn();
         
        }else{
            $("nav").removeClass("navbar-inverse");
            $(".navbar-brand img").attr("src","img/logo/alis.svg");
            $("#back-to-top").fadeOut();
           
        }
    });
});
/*----Smooth scrolling-----*/
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section_id=$(this).attr("href");
        $("html,body").animate({
            scrollTop:$(section_id).offset().top - 64
        },1250,"easeInOutExpo");
    });
});
