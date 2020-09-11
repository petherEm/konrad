/*!
    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// simple countdown

// This is an example with default parameters

simplyCountdown('.counter', {
    year: 2020, // required
    month: 11, // required
    day: 13, // required
    hours: 18, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: ' Dni',
        hours: ' Godzin',
        minutes: ' Minut',
        seconds: ' Sekund',
        pluralLetter: 'y'
    },
    plural: false, //use plurals
    inline: true, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC as default
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});