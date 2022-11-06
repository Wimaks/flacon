$(document).ready(function () {

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.burger').toggleClass('active'); // появление меню при нажатии на бургер
        $(this).toggleClass('active'); // изменение меню бургер при открытии меню
    });

    $('.slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.works__slider-btns'),
        fade: true,
        waitForAnimate: false,
        adaptiveHeight: true
    });

    $('.reviews').slick({
        infinite: false,
        fade: true,
        appendArrows: $('.reviews__slider-btns'),
    });

    $('.documents').slick({
        appendArrows: $('.documents__slider-btns'),
        slidesToShow: 4
    })
})