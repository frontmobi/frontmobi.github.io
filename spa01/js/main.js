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

function closeNav() {
    $("#menu-close").click();
}

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[id^="mn-"][href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});