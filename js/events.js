var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
});

$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5,
    easing: "cubic-bezier(.03,.98,.52,.99)" 
})

$(document).ready(function() {
    $(".events-page").hide();
    $(".footer").hide();
});

$(".fa-robot").click(function(){
    $(".events-page").show();
    $(".events-page__robotics").show();
    $(".events-page__coding").hide();
    $(".events-page__gaming").hide();
    $(".events-page__mechanics").hide();
    $(".events-page__flagship").hide();
    $(".events-page__business").hide();
    $(".events-page__miscellaneous").hide();
    $("#events-page__initiatives").hide();
    $(".footer__events").show();
});

$(".fa-code").click(function(){
    $(".events-page").show();
    $(".events-page__robotics").hide();
    $(".events-page__coding").show();
    $(".events-page__gaming").hide();
    $(".events-page__mechanics").hide();
    $(".events-page__flagship").hide();
    $(".events-page__business").hide();
    $(".events-page__miscellaneous").hide();
    $("#events-page__initiatives").hide();
    $(".footer__events").show();
});

$(".fa-gamepad").click(function(){
    $(".events-page").show();
    $(".events-page__robotics").hide();
    $(".events-page__coding").hide();
    $(".events-page__gaming").show();
    $(".events-page__mechanics").hide();
    $(".events-page__flagship").hide();
    $(".events-page__business").hide();
    $(".events-page__miscellaneous").hide();
    $("#events-page__initiatives").hide();
    $(".footer__events").show();
});

$(".fa-drafting-compass").click(function(){
    $(".events-page").show();
    $(".events-page__robotics").hide();
    $(".events-page__coding").hide();
    $(".events-page__gaming").hide();
    $(".events-page__mechanics").show();
    $(".events-page__flagship").hide();
    $(".events-page__business").hide();
    $(".events-page__miscellaneous").hide();
    $("#events-page__initiatives").hide();
    $(".footer__events").show();
});

$(".fa-free-code-camp").click(function(){
    $(".events-page").show();
    $(".events-page__robotics").hide();
    $(".events-page__coding").hide();
    $(".events-page__gaming").hide();
    $(".events-page__mechanics").hide();
    $(".events-page__flagship").show();
    $(".events-page__business").hide();
    $(".events-page__miscellaneous").hide();
    $("#events-page__initiatives").hide();
    $(".footer__events").show();
});

$(".fa-briefcase").click(function(){
    $(".events-page").show();
    $(".events-page__robotics").hide();
    $(".events-page__coding").hide();
    $(".events-page__gaming").hide();
    $(".events-page__mechanics").hide();
    $(".events-page__flagship").hide();
    $(".events-page__business").show();
    $(".events-page__miscellaneous").hide();
    $("#events-page__initiatives").hide();
    $(".footer__events").show();
});

$(".fa-microchip").click(function(){
    $(".events-page").show();
    $(".events-page__robotics").hide();
    $(".events-page__coding").hide();
    $(".events-page__gaming").hide();
    $(".events-page__mechanics").hide();
    $(".events-page__flagship").hide();
    $(".events-page__business").hide();
    $(".events-page__miscellaneous").show();
    $("#events-page__initiatives").hide();
    $(".footer__events").show();
});

$(".fa-bolt").click(function () {
    $(".events-page").show();
    $(".events-page__robotics").hide();
    $(".events-page__coding").hide();
    $(".events-page__gaming").hide();
    $(".events-page__mechanics").hide();
    $(".events-page__flagship").hide();
    $(".events-page__business").hide();
    $(".events-page__miscellaneous").hide();
    $("#events-page__initiatives").show();
    $(".footer__events").show();
});


