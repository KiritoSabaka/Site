new Swiper ('.swiper-content', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".swiper-offer",
    },
    //колличество слайдов для показа
    slidesPerView: '3', //auto
    slidesPerGroup: 1,
    spaceBetween: 30,//отступ между слайдами
    speed:800,
    effect:'coverflow',
    coverflowEffect: {
        rotate: 25,
        stretch:10,
        slideShadow: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

});