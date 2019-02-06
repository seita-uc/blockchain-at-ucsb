$(document).ready(function() {
    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    if(Kube.Detect.isMobile) {
        var $nav = $('#nav-toggle');
        $nav.removeClass('sticky');
    }
});

var rellax = new Rellax('.rellax');
