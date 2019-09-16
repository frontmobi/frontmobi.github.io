// loader 
$(window).load(function() {
    // makes sure the whole site is loaded
    $("#status").fadeOut();
    // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow");
    // will fade out the white DIV that covers the website.
    $("body").delay(350).css({
        overflow: "visible"
    });
});

function main() {
    (function() {
        "use strict";
        
        // testimonial slider
        $("a.page-scroll").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        // show menu on book
        $(window).bind("scroll", function() {
            // var navHeight = $(window).height() - 100;
            var navHeight = $(window).width()*0.55;
            if ($(window).scrollTop() > navHeight) {
                $(".navbar-default").addClass("on");
            } else {
                $(".navbar-default").removeClass("on");
            }
        });
        $("body").scrollspy({
            target: ".navbar-default",
            offset: 80
        });
        $(document).ready(function() {
            // collapse after click
            $('.nav a').on('click', function(){
                //bootstrap 3.x by Richard
                $('.navbar-toggle').click() 
            });
                    
            $('div[id^="team-list"]').owlCarousel({
                navigation: false,
                // show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [ [ 0, 1 ], [ 450, 2 ], [ 600, 2 ], [ 700, 2 ], [ 1e3, 4 ], [ 1200, 4 ], [ 1400, 4 ], [ 1600, 4 ] ]
            });
            $('div[id^="client-list"]').owlCarousel({
                navigation: false,
                // show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: true,
                itemsCustom: [ [ 0, 1 ], [ 450, 2 ], [ 600, 2 ], [ 700, 2 ], [ 1e3, 4 ], [ 1200, 5 ], [ 1400, 5 ], [ 1600, 5 ] ]
            });
            $('div[id^="testimonial-list"]').owlCarousel({
                navigation: false,
                // Show next and prev buttons
                slideSpeed: 300,
                paginationspeed: 400,
                singleItem: true
            });
        });

        // portfolio isotope filter
        $(window).load(function() {
            var $container = $("#lightbox");
            $container.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
            $(".cat a").click(function() {
                $(".cat .active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr("data-filter");
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false
                    }
                });
                return false;
            });
        });
    })();
}

main();