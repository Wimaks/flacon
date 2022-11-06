$(document).ready(function () {

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.burger').toggleClass('active'); // появление меню при нажатии на бургер
        $(this).toggleClass('active'); // изменение меню бургер при открытии меню
    });

    $('.slider').slick({
        slidesToShow: 3,
        infinite: false,
        appendArrows: $('.works__slider-btns'),
        waitForAnimate: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews').slick({
        infinite: false,
        appendArrows: $('.reviews__slider-btns'),
        slidesToShow: 2,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.documents').slick({
        appendArrows: $('.documents__slider-btns'),
        slidesToShow: 4,
        infinite: false,
        responsive: [{
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})