/*  preloader */
jQuery(window).load(function() {
    $("#preloader").fadeOut("slow");
});

/*  welcome section slider */
$(function() {
    var Page = function() {
        var $navArrows = $("#nav-arrows"), $nav = $("#nav-dots > span"), slitslider = $("#slider").slitslider({
            onBeforeChange: function(slide, pos) {
                $nav.removeClass("nav-dot-current");
                $nav.eq(pos).addClass("nav-dot-current");
            }
        }), init = function() {
            initEvents();
        }, initEvents = function() {
            // add navigation events
            $navArrows.children(":last").on("click", function() {
                slitslider.next();
                return false;
            });
            $navArrows.children(":first").on("click", function() {
                slitslider.previous();
                return false;
            });
            $nav.each(function(i) {
                $(this).on("click", function(event) {
                    var $dot = $(this);
                    if (!slitslider.isActive()) {
                        $nav.removeClass("nav-dot-current");
                        $dot.addClass("nav-dot-current");
                    }
                    slitslider.jump(i + 1);
                    return false;
                });
            });
        };
        return {
            init: init
        };
    }();
    Page.init();
});

$(document).ready(function() {
    /*  menu item highlighting */
    jQuery("#nav").singlePageNav({
        offset: jQuery("#nav").outerHeight(),
        filter: ":not(.external)",
        speed: 2e3,
        currentClass: "current",
        easing: "easeInOutExpo",
        updateHash: true,
        beforeStart: function() {
            // console.log("begin scrolling");
        },
        onComplete: function() {
            // console.log("done scrolling");
        }
    });

    // collapse after click
    $('.nav a').on('click', function(){
        //bootstrap 3.x by Richard
        $('.navbar-toggle').click() 
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color", "#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            // $(".navbar-brand a").css("color","inherit");
            $(".navbar-brand a").css("color", "#FE8F44");
            $("#navigation").addClass("animated-header");
        }
    });
    /*  fix slider height */
    var slideHeight = $(window).height();
    $("#home-slider, #slider, .sl-slider, .sl-content-wrapper").css("height", slideHeight);
    $(window).resize(function() {
        "use strict", $("#home-slider, #slider, .sl-slider, .sl-content-wrapper").css("height", slideHeight);
    });

    $("#works, #testimonial").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 700,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: [ "<i class='fa fa-angle-left fa-lg'></i>", "<i class='fa fa-angle-right fa-lg'></i>" ]
    });

    $('#services-list').owlCarousel({
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,
        navigation: true,
        pagination: false,
        slideSpeed: 700,
        paginationSpeed: 400,
        navigationText: [ "<i class='fa fa-angle-left fa-lg'></i>", "<i class='fa fa-angle-right fa-lg'></i>" ],
    });

    /* featured project lightbox */
    $(".fancybox").fancybox({
        padding: 0,
        openEffect: "elastic",
        openSpeed: 650,
        closeEffect: "elastic",
        closeSpeed: 550,
        closeClick: true,
        beforeShow: function() {
            this.title = $(this.element).attr("title");
            this.title = "<h3>" + this.title + "</h3>" + "<p>" + $(this.element).parents(".portfolio-item").find("img").attr("alt") + "</p>";
        },
        helpers: {
            title: {
                type: "inside"
            },
            overlay: {
                css: {
                    background: "rgba(0,0,0,0.8)"
                }
            }
        }
    });
});