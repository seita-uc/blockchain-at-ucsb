const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
function getScreenSize() {
    return {
        height: window.parent.screen.height,
        width: window.parent.screen.width,
    }
}

$(document).ready(function() {
    const screen = getScreenSize();
    let slides = 3;
    if (screen.width < 768) {
        slides = 2;
    }
    $('.slick').slick({
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
});

$(window).on("load", function(){
    delay(500).then(() => {
        $(".rellax").fadeIn("slow");
    });
});

var rellax = new Rellax('.rellax');
