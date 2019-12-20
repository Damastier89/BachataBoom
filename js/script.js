$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-double-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-double-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                }
            },
            {   breakpoint:575,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });    
});