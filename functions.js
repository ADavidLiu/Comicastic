$(document).ready(function () {
    // To change the carousel captions
    $("#featured-news").on('slide.bs.carousel', function (evt) {

        var step = $(evt.relatedTarget).index();

        $('#slider_captions .carousel-caption:not(#caption-' + step + ')').fadeOut('fast', function () {
            $('#caption-' + step).fadeIn();
        });

    });
});