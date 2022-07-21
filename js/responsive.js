(function ($) {
    "use strict";

    $(function () {
        console.log("isMobile dari main.js", isMobile.any)

        if (isMobile.any) {

            $('#navbar__logo__not_mobile').hide();
            $('#navbar__logo__mobile > img').css('margin-right', '10%');
            $('#navbar__logo__mobile > img').css('max-width', '30%');
            $('#navbar__logo__mobile').show();

            $('.btn-primary').each(function (item) {
                if (!$(this).hasClass('custom-font-size')) {
                    $(this).css('font-size', 'inherit');
                }
            })

            $('#features__cutting_edge_technology__mobile > .container > .my-card').children().each(function (child) {
                if ($(this).hasClass('default-btn btn-primary')) {
                    $(this).css('padding', '5%');
                    $(this).css('margin-right', '0%');
                }
            })

            $('#features__cutting_edge_technology__mobile > .container > .my-card > .my-card__sub__content').children().each(function (child) {
                if ($(this).hasClass('default-btn btn-primary')) {
                    $(this).css('padding', '5%');
                    $(this).css('margin-right', '0%');
                }
            })
            $('#section__what_our_products_offer__promo_content__mobile').addClass('owl-carousel', 'owl-theme');
            $('.owl-carousel').owlCarousel({
                dots: true,
                items: 1,
                stagePadding: 80,
                margin: 20,
                loop: true,
            });

            $('#footer').hide();
            $('#footer__mobile').show();

            $('#faq').hide();
            $('#faq__mobile').show();

            $('#faq__mobile').css('background-color', '#FAF9F9');

            var acc = document.getElementsByClassName("accordion-mobile");
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
            // $('#catalog__doorbell__img').css('padding-top', '2%');
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
            $('#content-section__safety_and_comfort_your_home__img').attr('src', 'img/index__section_improve_assets/asset1.png');
            $('#content-section__safety_and_comfort_your_home__img').css('margin-left', '-7%');
            $('#content-section__safety_and_comfort_your_home__img').css('max-width', 'fit-content');
            $('#header__opening__button_group').css('margin-top', '6%');
            $('#header__opening__button_contact_us').css('padding', '9px 15px');
            $('#header__opening__button_contact_us').css('font-size', '1.5vh');
            $('#header__opening__button_buy_now').css('padding', '9px 15px');
            $('#header__opening__button_buy_now').css('font-size', '1.5vh');
            $('#promo-section__what_our_products_offer__mobile').show();
            $('#promo-section__what_our_products_offer__mobile').addClass('margin-bottom-60-percnt');
            $('#promo-section__what_our_products_offer').hide();
            $('#features__cutting_edge_technology').hide();
            $('#features__cutting_edge_technology__mobile').show();

            $('#features__cutting_edge_technology__mobile__slider').addClass('owl-carousel__features_cutting_edge', 'owl-theme');
            $('.owl-carousel__features_cutting_edge').owlCarousel({
                dots: true,
                items: 1,
            });
            $('#feature-section__feel-secure-wherever-you-are').hide();
            $('#feature-section__feel-secure-wherever-you-are__mobile').show();
            $('#feature-section__smarter-security-for-everyone__mobile').show();
            $('#feature-section__smarter-security-for-everyone').hide();
            $('#feature-section__dont-know-where-to-start__mobile').show();
            $('#feature-section__dont-know-where-to-start').hide();
            $('#product-catalogue__mobile').show();
            $('#product-catalogue').hide();
            $('#about_us__mission').hide();
            $('#about_us__mission__mobile').show();
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

            $('#promo-section__what_our_products_offer__mobile').hide();
            $('#promo-section__what_our_products_offer').show();

            $('#features__cutting_edge_technology__mobile').hide();
            $('#features__cutting_edge_technology').show();
            $('#feature-section__feel-secure-wherever-you-are').show();
            $('#feature-section__feel-secure-wherever-you-are__mobile').hide();
            $('#feature-section__smarter-security-for-everyone__mobile').hide();
            $('#feature-section__smarter-security-for-everyone').show();
            $('#feature-section__dont-know-where-to-start__mobile').hide();
            $('#feature-section__dont-know-where-to-start').show();
            $('#product-catalogue__mobile').hide();
            $('#product-catalogue').show();
            $('#about_us__mission').show();
            $('#about_us__mission__mobile').hide();
            $('#header__opening__p1').addClass('text-real-black-important');
            $('#content-section__safety_and_comfort_your_home__img').attr('src', 'img/desktop__section__header.png');
            $('#content-section__safety_and_comfort_your_home__img').css('margin-top', '-63%');
            $('#content-section__safety_and_comfort_your_home__img').css('margin-left', '-71%');
            $('#faq').css('background-color', '#FAF9F9');
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
        }


    });

})(jQuery);