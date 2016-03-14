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

// sticky header
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $(".main_header").addClass("sticky");
    } else {
        $(".main_header").removeClass("sticky");
    }
});

// mobile navigation
$(".mobile-toggle").click(function() {
    if ($(".main_header").hasClass("open-nav")) {
        $(".main_header").removeClass("open-nav");
    } else {
        $(".main_header").addClass("open-nav");
    }
});

$(".main_header li a").click(function() {
    if ($(".main_header").hasClass("open-nav")) {
        $(".navigation").removeClass("open-nav");
        $(".main_header").removeClass("open-nav");
    }
});

// navigation scroll
$("nav a").click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $("html, body").animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

// wow js
new WOW().init();

// nice scroll
$(document).ready(function() {
    $("html").niceScroll({
        cursorwidth: "8",
        cursorborderradius: "none",
        cursorborder: "none",
        cursorcolor: "#3498db",
        mousescrollstep: "60"
    });
});

$(function() {
    // activate owl-carousel
    $('#services-list').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            767:{
                items:4,
                nav:false
            }
        }
    });
});

// portfolio filter
$(function() {
    var filterList = {
        init: function() {
            // http://mixitup.io
            $("#portfoliolist").mixitup({
                targetSelector: ".portfolio",
                filterSelector: ".filter",
                effects: [ "fade" ],
                easing: "snap",
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });
        },
        hoverEffect: function() {
            // simple parallax effect
            $("#portfoliolist .portfolio").hover(function() {
                $(this).find(".label").stop().animate({
                    bottom: 0,
                    left: 0
                }, 200, "easeOutQuad");
                $(this).find("img").stop().animate({
                    top: -30
                }, 500, "easeOutQuad");
            }, function() {
                $(this).find(".label").stop().animate({
                    bottom: -60,
                }, 200, "easeInQuad");
                $(this).find("img").stop().animate({
                    top: 0
                }, 300, "easeOutQuad");
            });
        }
    };
    // run the show
    filterList.init();
});