$(document).ready(
    function(){
        // $('.header__burger').click(
        //     function (event) {
        //         $('div.header__burger').toggleClass('header__burger_close');
        //         $('nav.header__menu').toggleClass('header__menu_phone');
        //     }
        // );

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