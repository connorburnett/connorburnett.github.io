$(document).ready(function () {
    $("#click").click(function () {
        $('html, body').animate({
            scrollTop: $("#square").offset().top
        }, 2000);
    })
})

$(document).ready(function () {
    $("#clicktwo").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 2000);
    })
})

$(document).ready(function () {
    $("#clickthree").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    })
})