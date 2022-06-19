(function ($) {
    "use strict";

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
            $('#section__what_our_products_offer__promo_content').addClass('owl-carousel', 'owl-theme');
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

            $('#content-details__smarter_security_for_everyone').css('margin-top', '0px');
            $('#header__opening').css('margin-bottom', '6%');
            $('#header__opening__text1').addClass('text-center');
            $('#header__opening__p1').addClass('text-center');
            $('#header__opening__button_contact_us').css('margin-right', '2%');
            $('#navbar__item__faq').attr('href', 'index.html#faq__mobile');
            $('#catalog__doorbell__img').css('padding-top', '2%');
            $('#about_us__mission__mobile').show();
            $('#about_us__mission').hide();
            $('#about_us__background__mobile').show();
            $('#about_us__background').hide();
            $('#detail_product__doorbell__mobile').show();
            $('#detail_product__doorbell').hide();

            $('#detail_product__portable_cctv__mobile').show();
            $('#detail_product__portable_cctv').hide();

            $('#detail_product__solar_panel__mobile').show();
            $('#detail_product__solar_panel').hide();

            $('#detail_product__battery_powered_cctv__mobile').show();
            $('#detail_product__battery_powered_cctv').hide();

        } else {
            $('#navbar__logo__not_mobile').show();
            $('#navbar__logo__mobile').hide();

            $('#footer').show();
            $('#footer__mobile').hide();

            $('#faq').show();
            $('#faq__mobile').hide();
            $('#navbar__item__faq').attr('href', 'index.html#faq');
            $('#about_us__mission__mobile').hide();
            $('#about_us__mission').show();
            $('#about_us__background__mobile').hide();
            $('#about_us__background').show();
            $('#detail_product__doorbell__mobile').hide();
            $('#detail_product__doorbell').show();

            $('#detail_product__portable_cctv__mobile').hide();
            $('#detail_product__portable_cctv').show();

            $('#detail_product__solar_panel__mobile').hide();
            $('#detail_product__solar_panel').show();

            $('#detail_product__battery_powered_cctv__mobile').hide();
            $('#detail_product__battery_powered_cctv').show();
        }


    });

})(jQuery);