$(document).ready(
    function(){

        $('.faq-spoiler__header').click(
            function (event) {
                if($('.faq-spoiler').hasClass('one')){
                    $('.faq-spoiler__header').not($(this)).removeClass('active');
                    $('.faq-spoiler__body').not($(this).next()).slideUp(300);
                }
                $(this).toggleClass('active').next().slideToggle(300);
            }  
        );
    }
);