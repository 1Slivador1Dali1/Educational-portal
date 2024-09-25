 // Main page SWIPER slider config

 const mainSlider = () => {
    var mainSliderThumbs = new Swiper(".main-slider-thumbs-container", {
        slidesPerView: 4,
        loopedSlides: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: "vertical"
    });

    var mainSlider = new Swiper(".main-slider-container", {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
        keyboard: {
            enabled: false,
        },
        thumbs: {
            swiper: mainSliderThumbs
        },
        pagination: {
            el: '.main-slider-container .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        }
    });
};

try {
    mainSlider();
} catch(err) {

}