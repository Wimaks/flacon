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


    // POPUP

    $('.popup__list-link').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.visit-master').text($(this).html())
        $(event.currentTarget).next().toggleClass('active')
    })

    $('.popup-link').on('click', function (event) {
        event.preventDefault();

        $('.popup').toggleClass('active')
    })

    $('.popup__close, .popups__close').on('click', function (event) {
        event.preventDefault();


        $('.popup, .popup__list-card').removeClass('active')
    })

    $('.popup__close-second').on('click', function (event) {
        event.preventDefault();

        $('.popup__second').removeClass('active')
    })

    $('.popup__button').on('click', function (event) {
        event.preventDefault();

        let visitDate = $('#date').val(),
            visitPhone = $('#phone').val(),
            clientName = $('#name').val()

        $('.visit-date').text(visitDate)
        $('.visit-phone').text(visitPhone)
        $('.client-name').text(clientName)
        $('.popup__second').toggleClass('active')
    })

    $('.popup__times-link').on('click', function (event) {
        event.preventDefault()

        $(this).toggleClass('active')
        let visitTime = $(this).html()
        $('.visit-time').text(visitTime)
    })

    // SERVICES

    $('.services__table-link').on('click', (event) => {
        event.preventDefault()

        $(event.currentTarget).closest('.services__table-block.hidden').toggleClass('visible')
    })

    $("#phone").mask("+7 (999) 999-9999");

    $(".flatpickr").flatpickr();



})