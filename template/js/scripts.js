$(document).ready(
    function(){
        $('.burger').click(
            function (event) {
                $('div.burger').toggleClass('burger_close');
                $('div.header-phone').toggleClass('active');
                $('body').toggleClass('lock');
            }
        );

        $('.header-phone__menu-item a').click(
            function (event) {
                $('div.burger').toggleClass('burger_close');
                $('div.header-phone').toggleClass('active');
                $('body').toggleClass('lock');
            }
        );
        // Маски для номеров телефонов
        $(".request__input").mask("+7 (999) 999-99-99");
        $(".faq-right__phone").mask("+7 (999) 999-99-99");
        $(".mask-phone").mask("+7 (999) 999-99-99");


        // $('.header-top__city').hover(
        //     function (event) {
        //         if(document.querySelector(".wrapper").offsetWidth > 980)
        //             $('.header-top__city').toggleClass('active');
        
        //         //$('.close-city-list').toggleClass('active');
        //     }
        // );
        
        $('.header-phone-top__city').click(
            function (event) {
                if(document.querySelector(".wrapper").offsetWidth <= 980) {
                    $('.header-phone-top__city').toggleClass('active');
                }
            }
        );



    }
);

if($('.feedback__slider.disable').length == 0) {
    let feedbackSlider = new Swiper('.feedback__slider',{
        // direction: 'horizontal',
        spaceBetween: 30,
        loop: true,

        breakpoints: {
            1100: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        },
        
        slidesPerView: 1,
        slidesPerGroup: 1,


        navigation: {
            nextEl: ".feedback__next",
            prevEl: ".feedback__prev",
        },
    });
}

let worksSlider = new Swiper('.works__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
        nextEl: ".works__next",
        prevEl: ".works__prev",
    },

    // Миниатюры
    thumbs: {
        swiper: {
            observer: true,
            el: '.works-min__slider',
            spaceBetween: 10,
            slidesPerView: 4,
            slidesPerGroup: 4,
            breakpoints: {
                450: {
                    spaceBetween: 20,
                }
            },
        }
    }
});



/* Клик мышкой по карте */

wrapMap.onclick = function() {
    // убираем атрибут "style", в котором прописано свойство "pointer-events"
    this.children[0].removeAttribute('style');
}

// Клик вне карты 

// const div = wrapMap;
 
// document.addEventListener( 'click', (e) => {
// 	const withinBoundaries = e.composedPath().includes(div);
 
//     console.log(withinBoundaries);

// 	if ( ! withinBoundaries ) {
// 		wrapMap.style.pointerEvents = 'none';
// 	}
// })