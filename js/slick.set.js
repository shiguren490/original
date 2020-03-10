jQuery(function ($) {
    $(document).ready(function () {
        $('.slider').slick({
            dots: true,
            infinite: true,
            rows: 2,
            slidesPerRow: 3,
            slidesToShow: 3,
            slidesToScroll: 2,
        });
    });
});
