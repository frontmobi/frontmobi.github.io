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

// scrolls to the selected menu item on the page
$(function() {
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
            $(".navbar-brand a").css("color", "#ffffff");
            $("#navigation").addClass("animated-header");
        }
    });

    // activate owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: false,
        responsive: {
            0: {items: 1}, 
            767: {items: 4}
        }
    });
});