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
    $(".workshops-page").hide();
});

$('.fa-angle-down').click(function(){
    $(".workshops-page").show();
})

// $(".fa-robot").click(function(){
//     $(".workshops-page").show();
//     $(".workshops-page__robotics").show();
//     $(".workshops-page__coding").hide();
//     $(".workshops-page__gaming").hide();
//     $(".workshops-page__mechanics").hide();
//     $(".workshops-page__flagship").hide();
//     $(".workshops-page__business").hide();
//     $(".workshops-page__miscellaneous").hide();
// });

// $(".fa-code").click(function(){
//     $(".workshops-page").show();
//     $(".workshops-page__robotics").hide();
//     $(".workshops-page__coding").show();
//     $(".workshops-page__gaming").hide();
//     $(".workshops-page__mechanics").hide();
//     $(".workshops-page__flagship").hide();
//     $(".workshops-page__business").hide();
//     $(".workshops-page__miscellaneous").hide();
// });

// $(".fa-gamepad").click(function(){
//     $(".workshops-page").show();
//     $(".workshops-page__robotics").hide();
//     $(".workshops-page__coding").hide();
//     $(".workshops-page__gaming").show();
//     $(".workshops-page__mechanics").hide();
//     $(".workshops-page__flagship").hide();
//     $(".workshops-page__business").hide();
//     $(".workshops-page__miscellaneous").hide();
// });

