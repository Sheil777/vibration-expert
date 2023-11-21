$(document).ready(
    function(){
        function cutCity(city){
            if(city.length >= 9){
                res = city.substr(0, 7)+'...';
            } else {
                res = city;
            }

            return res;
        }

        let city = $('.header-city__wrap p').text();

        $('.header-city__wrap p').text(cutCity(city));
        $('.header-phone-top__wrap p').text(cutCity(city));
    }
)