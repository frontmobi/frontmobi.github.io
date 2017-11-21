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


jQuery(function($) {
    "use strict";
    // navigation scroll
    $(window).scroll(function(event) {
        Scroll();
    });
    $(".navbar-collapse ul li a").on("click", function() {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1e3);
        return false;
    });
    // user define function
    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $(".navbar-collapse").find(".scroll a").each(function() {
            contentTop.push($($(this).attr("href")).offset().top);
            contentBottom.push($($(this).attr("href")).offset().top + $($(this).attr("href")).height());
        });
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                $(".navbar-collapse li.scroll").removeClass("active").eq(i).addClass("active");
            }
        });
    }
    $("#tohash").on("click", function() {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1e3);
        return false;
    });
    // accordian
    $(".accordion-toggle").on("click", function() {
        $(this).closest(".panel-group").children().each(function() {
            $(this).find(">.panel-heading").removeClass("active");
        });
        $(this).closest(".panel-heading").toggleClass("active");
    });
    // slider
    $(document).ready(function() {
        var time = 7;
        // time in seconds
        var $progressBar, $bar, $elem, isPause, tick, percentTime;

        // collapse after click
        $('.nav a').on('click', function(){
            //bootstrap 3.x by Richard
            $('.navbar-toggle').click() 
        });
    
        // init the carousel
        $("#main-slider").find(".owl-carousel").owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: true,
            navigation: true,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ],
            afterInit: progressBar,
            afterMove: moved,
            startDragging: pauseOnDragging,
            //autoHeight : true,
            transitionStyle: "fadeUp"
        });

        // init progressbar where elem is $("#owl-demo")
        function progressBar(elem) {
            $elem = elem;
            //build progress bar elements
            buildProgressBar();
            //start counting
            start();
        }

        // create div#progressBar and div#bar then append to $(".owl-carousel")
        function buildProgressBar() {
            $progressBar = $("<div>", {
                id: "progressBar"
            });
            $bar = $("<div>", {
                id: "bar"
            });
            $progressBar.append($bar).appendTo($elem);
        }
        function start() {
            // reset timer
            percentTime = 0;
            isPause = false;
            // run interval every 0.01 second
            tick = setInterval(interval, 10);
        }
        function interval() {
            if (isPause === false) {
                percentTime += 1 / time;
                $bar.css({
                    width: percentTime + "%"
                });
                // if percentTime is equal or greater than 100
                if (percentTime >= 100) {
                    // slide to next item 
                    $elem.trigger("owl.next");
                }
            }
        }

        // pause while dragging 
        function pauseOnDragging() {
            isPause = true;
        }

        // moved callback
        function moved() {
            // clear interval
            clearTimeout(tick);
            // start again
            start();
        }
    });

    // smoothScroll
    smoothScroll.init();
    // portfolio filter
    $(window).load(function() {
        "use strict";
        var $portfolio_selectors = $(".portfolio-filter >li>a");
        var $portfolio = $(".portfolio-items");
        $portfolio.isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows"
        });
        $portfolio_selectors.on("click", function() {
            $portfolio_selectors.removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });

    // pretty photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
});