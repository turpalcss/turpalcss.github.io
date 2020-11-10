
$(function(){
    $('.slider-inner').slick({
       arrows: true,
       dots: false,
       adaptiveHeight: false,
       slidesToShow: 5,
       slidesToScroll: 1,
       infinite: true,
        initialSlider: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: true,
        variableWidth: true,
    });
});