(function($){
    $(function(){
        
        /*skrolovani k sekcim*/

        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });
    
        $(".jq--scroll-about-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-references").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1000);
        });

        $(".jq--scroll-photogallery").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photogallery").offset().top}, 1000);
        });

        $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1000);
        });

        /* Mobile navigation */

        $(".jq--nav-icon").click(function(){
            $(".nav-background").fadeToggle(0);
            $(".mobile-nav-back").fadeToggle(0);
            $("nav ul"). fadeToggle(0);
        });

        /* Chanhe hamburger to cross and back */

        $(".jq--image-hamburger").click(function(){

            if($(".jq--image-hamburger").attr("src") == "images/hamburgerMenu.png")
            {
                $( $(".jq--image-hamburger").attr("src","images/crossMenu.png"));
            }
            else{
                $( $(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
            }
        });

    });

})(jQuery);