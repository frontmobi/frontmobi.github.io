jQuery(function($) {
    // superslides slider
    jQuery("#slides").superslides({
        animation: "slide",
        play: "5000"
    });

    // fixed top menubar
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".navbar-fixed-top").addClass("past-main");
        } else {
            $(".navbar-fixed-top").removeClass("past-main");
        }
    });

    // featured slider
    $(".featured_slider").slick({
        dots: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slide: "div",
        autoplay: true,
        fade: true,
        autoplaySpeed: 5e3,
        cssEase: "linear"
    });

    // team slider
    $(".team_slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [ {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        } ]
    });

    // blog slider
    $(".blog_slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [ {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        } ]
    });

    // testimonial slider
    $(".testimonial_slider").slick({
        dots: true,
        infinite: true,
        speed: 600,
        arrows: false,
        slidesToShow: 1,
        slide: "li",
        autoplay: true,
        fade: true,
        autoplaySpeed: 3e3,
        cssEase: "linear"
    });

    // portfolio slider
    $(".portfolio_slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [ {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        } ]
    });

    // preloader 
    jQuery(window).load(function() {
        // makes sure the whole site is loaded
        $("#status").fadeOut();
        // will first fade out the loading animation
        $("#preloader").delay(100).fadeOut("slow");
        // will fade out the white DIV that covers the website.
        $("body").delay(100).css({
            overflow: "visible"
        });
    });

    // menu scrolling with active item selected
    // cache selectors
    var lastId, topMenu = $("#top-menu"), topMenuHeight = topMenu.outerHeight() + 13, // All list items
    menuItems = topMenu.find("a"), // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
    // bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e) {
        var href = $(this).attr("href"), offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $("html, body").stop().animate({
            scrollTop: offsetTop
        }, 900);
        e.preventDefault();
    });
    // bind to scroll
    $(window).scroll(function() {
        // get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;
        // get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop) return this;
        });
        // get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            // set/remove active class
            menuItems.parent().removeClass("active").end().filter('a[href="#' + id + '"]').parent().addClass("active");
        }
    });

    // mobile menu active close 
    $(".navbar-nav").on("click", "li a", function() {
        $(".navbar-collapse").collapse("hide");
    });
});