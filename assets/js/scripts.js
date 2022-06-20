/*-----------------------------------------------------------------------------------

    Template Name:
    
-----------------------------------------------------------------------------------*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*************************
         ******PRELOADER JS****
         **************************/

        $(window).on('load', function () {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });


        /*************************
         ******OWLCAROUSEL*****
         **************************/

        $("#owl-demo").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 5,
            margin: 50,

        });


        /*************************
         ******FULLWIDTH SEARCH****
         **************************/

        $(".ss-trigger").on('click', function () {
            $(".ss-content").addClass("ss-content-act");
        });
        $(".ss-close").on('click', function () {
            $(".ss-content").removeClass("ss-content-act");
        });


        $('#myTabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })

        /*************************
         *********STICKY MENU*****
         **************************/

        $(".sticky_area").sticky({
            topSpacing: 0
        });


        /*************************
         ******SMOOTH MENU*****
         **************************/

        $('li.smooth-menu a').on('click', function (event) {
            var $anchor = $(this);
            var headerH = '20';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 800, 'easeInOutExpo');

            event.preventDefault();
        });

        /*************************
         ******MOVE TOP JS*****
         **************************/

         $().UItoTop({ easingType: 'easeOutQuart' });
        
        /*************************
        ******WOW JS*****
        **************************/
        
        new WOW().init();
        
        
        /*************************
        **********TOHASH********
        **************************/
           
        $('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 1}, 1000);
		return false;
	    });
        
        /*************************
        ******JQUERY SCROLLY*****
        **************************/
        
        $('.slider_one').scrolly({bgParallax: true});

   });

})(jQuery);
