$('.name').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button.name').click(
    function(){
      console.log("Something");
      $('.name-section').addClass("fold-up");
      $('.institute-section').removeClass("folded");
    }
);

$('.institute').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button.institute').click(
    function(){
      console.log("Something");
      $('.institute-section').addClass("fold-up");
      $('.course-section').removeClass("folded");
    }
);

$('.course').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button.course').click(
    function(){
      console.log("Something");
      $('.course-section').addClass("fold-up");
      $('.year-section').removeClass("folded");
    }
);

$('.year').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button.year').click(
    function(){
      console.log("Something");
      $('.year-section').addClass("fold-up");
      $('.phone-section').removeClass("folded");
    }
);

$('.phone').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button.phone').click(
    function(){
      console.log("Something");
      $('.phone-section').addClass("fold-up");
      $('.email-section').removeClass("folded");
    }
);

$('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button.email').click(
    function(){
      console.log("Something");
      $('.email-section').addClass("fold-up");
      $('.password-section').removeClass("folded");
    }
  );

$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button.password').click(
    function(){
      console.log("Something");
      $('.password-section').addClass("fold-up");
      $('.repeat-password-section').removeClass("folded");
    }
  );

$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);

$('.next-button.repeat-password').click(
  function(){
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);

$('.animated-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

var value=0;
$('.next-button').click(
  function(){
    value=value+12.5;
    $('.bar').css('width',value+'%');
});



