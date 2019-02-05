var nav_trigger = document.querySelector('.nav_trigger');

nav_trigger.addEventListener("click",function(){

    document.querySelector('.main_wrapper').classList.toggle('nav_on_pers');
    document.querySelector('.main_wrapper').classList.toggle('nav_off_pers');

});

var close_btn = document.querySelector('.close_btn');

close_btn.addEventListener("click", function(){

    document.querySelector('.main_wrapper').classList.toggle('nav_on_pers');
    document.querySelector('.main_wrapper').classList.toggle('nav_off_pers');

});


