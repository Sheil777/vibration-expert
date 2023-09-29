$(document).ready(
    function(){
        $('.burger').click(
            function (event) {
                $('div.burger').toggleClass('burger_close');
                $('div.header-phone').toggleClass('active');
                $('body').toggleClass('lock');
            }
        );

        // Маски для номеров телефонов
        $(".request__input").mask("+7 (999) 999-99-99");
        $(".faq-right__phone").mask("+7 (999) 999-99-99");
    }
);

let feedbackSlider = new Swiper('.feedback__slider',{
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 3,

    navigation: {
        nextEl: ".feedback__next",
        prevEl: ".feedback__prev",
    },
});