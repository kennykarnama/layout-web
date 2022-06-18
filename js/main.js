/* Sintex Theme Scripts */

(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');
    });


    /*=========================================================================
    	Sticky Header
    =========================================================================*/
    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed-top");
            } else {
                header.removeClass("navbar-fixed-top");
            }

        });
    });

    /*=========================================================================
            Mobile Menu
    =========================================================================*/
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });

    /*=========================================================================
        Product Carousel
    =========================================================================*/
    $('#product-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    /*=========================================================================
        Sponsor Carousel
    =========================================================================*/
    $('#sponsor-carousel').owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3,
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            }
        }
    });

    /*=========================================================================
    	Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
    	Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    /**
     * Mobile responsive conditional script
     */

    $(function () {
        console.log("isMobile dari main.js", isMobile.any)

        if (isMobile.any) {

            $('#navbar__logo__not_mobile').hide();
            $('#navbar__logo__mobile').show();

            $('.btn-primary').each(function (item) {
                $(this).css('font-size', 'inherit');
            })

            $('#features__cutting_edge_technology > .container > .my-card').children().each(function (child) {
                if ($(this).hasClass('default-btn btn-primary')) {
                    $(this).css('padding', '5%');
                }
            })

            $('#features__cutting_edge_technology > .container > .my-card > .my-card__sub__content').children().each(function (child) {
                if ($(this).hasClass('default-btn btn-primary')) {
                    $(this).css('padding', '5%');
                }
            })
            $('.owl-carousel').owlCarousel({
                dots: true,
            });

            $('#footer').hide();
            $('#footer__mobile').show();

            $('#faq').hide();
            $('#faq__mobile').show();

            $('#faq__mobile').css('background-color', '#FAF9F9');

            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    /* Toggle between adding and removing the "active" class,
                    to highlight the button that controls the panel */
                    this.classList.toggle("active");

                    /* Toggle between hiding and showing the active panel */
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                });
            }

        } else {
            $('#navbar__logo__not_mobile').show();
            $('#navbar__logo__mobile').hide();

            $('#footer').show();
            $('#footer__mobile').hide();

            $('#faq').show();
            $('#faq__mobile').hide();
        }


    });

})(jQuery);