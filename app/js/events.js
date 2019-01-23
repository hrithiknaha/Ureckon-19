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
    // $(".events-page__robotics").hide();
    // $(".events-page__coding").hide();
    // $(".events-page__gaming").hide();
    // $(".events-page__mechanics").hide();
    // $(".events-page__flagship").hide();
    // $(".events-page__business").hide();
    // $(".events-page__miscellaneous").hide();
    $(".events-page").hide();
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
});


