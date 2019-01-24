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
    $(".talks-page").hide();
});

$('.fa-angle-down').click(function(){
    $(".talks-page").show();
})

// $(".fa-robot").click(function(){
//     $(".talks-page").show();
//     $(".talks-page__robotics").show();
//     $(".talks-page__coding").hide();
//     $(".talks-page__gaming").hide();
//     $(".talks-page__mechanics").hide();
//     $(".talks-page__flagship").hide();
//     $(".talks-page__business").hide();
//     $(".talks-page__miscellaneous").hide();
// });

// $(".fa-code").click(function(){
//     $(".talks-page").show();
//     $(".talks-page__robotics").hide();
//     $(".talks-page__coding").show();
//     $(".talks-page__gaming").hide();
//     $(".talks-page__mechanics").hide();
//     $(".talks-page__flagship").hide();
//     $(".talks-page__business").hide();
//     $(".talks-page__miscellaneous").hide();
// });

// $(".fa-gamepad").click(function(){
//     $(".talks-page").show();
//     $(".talks-page__robotics").hide();
//     $(".talks-page__coding").hide();
//     $(".talks-page__gaming").show();
//     $(".talks-page__mechanics").hide();
//     $(".talks-page__flagship").hide();
//     $(".talks-page__business").hide();
//     $(".talks-page__miscellaneous").hide();
// });

