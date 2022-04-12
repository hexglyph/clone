window.addEventListener('load', function () {
    let element = document.querySelector('.glider');

    let slider = new Glider(element, {
        slidesToShow: 5,
        slidesToScroll: 2,
        draggable: true,
        itemWidth: 300,
        scrollLock: true,
        dots: '.dots',
        duration: 3,
        rewind: true,
    });

    let autoplayDelay = 5000;

    let autoplay = setInterval(() => {
        slider.scrollItem('next')
    }, autoplayDelay);

    element.addEventListener('mouseover', (event) => {
        if (autoplay != null) {
            clearInterval(autoplay);
            autoplay = null;
        }
    }, 300);

    element.addEventListener('mouseout', (event) => {
        if (autoplay == null) {
            autoplay = setInterval(() => {
                slider.scrollItem('next')
            }, autoplayDelay);
        }
    }, 300);

})

