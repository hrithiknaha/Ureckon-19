var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
});

$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5,
    easing: "cubic-bezier(.03,.98,.52,.99)" ,
    transition: true,
    scale: 1.2,
})

$(document).ready(function() {
    $(".teams-page").hide();
});

$('.fa-angle-down').click(function(){
    $(".teams-page").show();
})

// $(".fa-robot").click(function(){
//     $(".teams-page").show();
//     $(".teams-page__robotics").show();
//     $(".teams-page__coding").hide();
//     $(".teams-page__gaming").hide();
//     $(".teams-page__mechanics").hide();
//     $(".teams-page__flagship").hide();
//     $(".teams-page__business").hide();
//     $(".teams-page__miscellaneous").hide();
// });

// $(".fa-code").click(function(){
//     $(".teams-page").show();
//     $(".teams-page__robotics").hide();
//     $(".teams-page__coding").show();
//     $(".teams-page__gaming").hide();
//     $(".teams-page__mechanics").hide();
//     $(".teams-page__flagship").hide();
//     $(".teams-page__business").hide();
//     $(".teams-page__miscellaneous").hide();
// });

// $(".fa-gamepad").click(function(){
//     $(".teams-page").show();
//     $(".teams-page__robotics").hide();
//     $(".teams-page__coding").hide();
//     $(".teams-page__gaming").show();
//     $(".teams-page__mechanics").hide();
//     $(".teams-page__flagship").hide();
//     $(".teams-page__business").hide();
//     $(".teams-page__miscellaneous").hide();
// });

