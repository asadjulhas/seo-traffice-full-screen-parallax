(function ($) {
	"use strict";

		
	$(document).ready(function(){
	
    
        $(".box-open").click(function(){
            $("#demo-box").animate({left:"0px"});
            
            $(".box-close").css('display', 'block');
            $(this).css('display', 'none');
        });
	
        $(".box-close").click(function(){
            $("#demo-box").animate({left:"-250px"});
            $(".box-open").css('display', 'block');
            $(this).css('display', 'none');
        });
	
        $(".lightgren-color").click(function(){
            $("body").addClass("lightgren-color").removeClass("blue-color darkblue-color navyblue-color red-color default-color light-green");
        });
        
	
        $(".blue-color").click(function(){
            $("body").addClass("blue-color").removeClass("lightgren-color darkblue-color navyblue-color red-color default-color light-green");
        });
        
	
        $(".darkblue-color").click(function(){
            $("body").addClass("darkblue-color").removeClass("blue-color lightgren-color navyblue-color red-color default-color light-green");
        });
        
	
        $(".navyblue-color").click(function(){
            $("body").addClass("navyblue-color").removeClass("blue-color darkblue-color lightgren-color red-color default-color light-green");
        });
        
	
        $(".red-color").click(function(){
            $("body").addClass("red-color").removeClass("blue-color darkblue-color navyblue-color lightgren-color default-color light-green");
        });
        
	
        $(".default-color").click(function(){
            $("body").addClass("default-color").removeClass("blue-color darkblue-color navyblue-color red-color lightgren-color light-green");
        });
	
        $(".light-green").click(function(){
            $("body").addClass("light-green").removeClass("blue-color darkblue-color navyblue-color red-color lightgren-color default-color");
        });
	
        $(".wide_mood").click(function(){
            $("body").addClass("wide_moodstyle").removeClass("boxwidth_body");
        });
        
        $(".boxwith_mood").click(function(){
            $("body").addClass("boxwidth_body").removeClass("wide_moodstyle");
        });
        
        
        
        $(".body_bg_1").click(function(){
            $("body").addClass("body_bg_1").removeClass(" body_bg_2 body_bg_3 body_bg_4 body_bg_5 body_bg_6 body_bg_7 body_bg_8 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_2").click(function(){
            $("body").addClass("body_bg_2").removeClass("body_bg_1 body_bg_3 body_bg_4 body_bg_5 body_bg_6 body_bg_7 body_bg_8 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_3").click(function(){
            $("body").addClass("body_bg_3").removeClass("body_bg_1 body_bg_2 body_bg_4 body_bg_5 body_bg_6 body_bg_7 body_bg_8 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_4").click(function(){
            $("body").addClass("body_bg_4").removeClass("body_bg_1 body_bg_2 body_bg_3 body_bg_5 body_bg_6 body_bg_7 body_bg_8 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_5").click(function(){
            $("body").addClass("body_bg_5").removeClass("body_bg_1 body_bg_2 body_bg_3 body_bg_4 body_bg_6 body_bg_7 body_bg_8 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_6").click(function(){
            $("body").addClass("body_bg_6").removeClass("body_bg_1 body_bg_2 body_bg_3 body_bg_4 body_bg_5 body_bg_7 body_bg_8 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_7").click(function(){
            $("body").addClass("body_bg_7").removeClass("body_bg_1 body_bg_2 body_bg_3 body_bg_4 body_bg_5 body_bg_6 body_bg_8 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_8").click(function(){
            $("body").addClass("body_bg_8").removeClass("body_bg_1 body_bg_2 body_bg_3 body_bg_4 body_bg_5 body_bg_6 body_bg_7 body_bg_9 body_bg_10");
        }); 
        
        $(".body_bg_9").click(function(){
            $("body").addClass("body_bg_9").removeClass("body_bg_1 body_bg_2 body_bg_3 body_bg_4 body_bg_5 body_bg_6 body_bg_7 body_bg_8 body_bg_10");
        }); 
        
        $(".body_bg_10").click(function(){
            $("body").addClass("body_bg_10").removeClass("body_bg_1 body_bg_2 body_bg_3 body_bg_4 body_bg_5 body_bg_6 body_bg_7 body_bg_8 body_bg_9");
        });
        
	
		
	});
    
    $(window).load(function(){
		$("#demo-box").delay(2000).animate({left:"-250px"});
		$(".box-open").delay(2000).css('display', 'block');
		$(".box-close").delay(2000).css('display', 'none');    
    });
    

}(jQuery));	