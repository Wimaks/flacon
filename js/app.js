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

    // function visitMaster() {
    //     const masters = document.querySelectorAll('.option__input')

    //     for (let master of masters) {
    //         master.addEventListener('click', () => {
    //             clearActiveClasses()

    //             master.classList.add('active')
    //             $(event.currentTarget).closest('.popup__list-card').toggleClass('active')

    //         })
    //     }

    //     function clearActiveClasses() {
    //         masters.forEach((master) => {
    //             master.classList.remove('active')
    //             $('.popup__list-card').removeClass('active')
    //         })
    //     }

    // }

    // visitMaster()

    $('.popup__list-link').on('click', function (event) {
        event.preventDefault()

        $(this).next('.popup__list-card').toggleClass('active')
        $(this).toggleClass('active')
        $('.option__item').removeAttr('checked')
    })

    $('.popup-link').on('click', function (event) {
        event.preventDefault();

        $('.popup').toggleClass('active')
    })

    $('.popup__close').on('click', function (event) {
        event.preventDefault();

        $('.popup, .popup__second, .popup__learn').removeClass('active')
    })

    $('.popup__close-second, .popup__close').on('click', function (event) {
        event.preventDefault();

        $('.popup__second').removeClass('active')

        $('#form').trigger("reset");
    })

    $('.popup__link-learn').on('click', function (event) {
        event.preventDefault();

        $('.popup__learn').toggleClass('active')
    })

    // SERVICES

    $('.services__table-link').on('click', function (event) {
        event.preventDefault()

        $(this).closest('.services__content').toggleClass('opened')
    })

    $("#phone").mask("+7 (999) 999-9999");
})