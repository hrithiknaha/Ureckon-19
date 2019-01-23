var output;

// ****** BACKEND DEVELOPER CONFIGURATION STARTS: *******

var members = ["Sayan", "Somsubhra", "Raja", "Baja", "Khaja"]; // FETCH USERNAMES FROM DATABASE AND ADD TO THIS ARRAY

var isSignedUp = true; // GET USER SIGNED UP STATUS FROM DATABASE

// ********* BACKEND DEVELOPER CONFIGURATION ENDS: *********

document.getElementById('registrationform').addEventListener('submit', submitted);

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    
    
    /*==================================================================
    [ Show / hide contact ]*/
    $('.btn-hide-contact100').on('click', function () {       
        $(".container-contact100").fadeOut(300);
    });

    $('.btn-show-contact100').on('click', function () {
        if (isSignedUp) {
            $(".container-contact100").css("top", "0.1%");
            $('.container-contact100').fadeIn(300);
            $(".container-contact100").css("visibility", "visible");
            
        } else {
            notSignedUp();
            $(".container-contact100").css("top", "0.1%");
            $(".container-contact100").fadeIn(300);
            $(".container-contact100").css('visibility', 'visible');
        }
        
    });    

})(jQuery);

// TODO: Add on click listeners to all buttons

$("#roborace").on("click", function() {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text('Register For RoboRace');
    
    $("#member1").css("display", "block");
    $("#member2").css("display", "block");
    $("#member3").css("display", "none");
    $("#member4").css("display", "none");
    $("#member5").css("display", "none");
    $("#member1 #email").prop('required', true);
    $("#member2 #email").prop('required', true);
    $("#member3 #email").prop('required', false);
    $("#member4 #email").prop('required', false);
    $("#member5 #email").prop('required', false);
});

$('#robowar').on('click', function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For RoboWar");
    $('#member1').css('display', 'block');
    $('#member2').css('display', 'block');
    $('#member3').css('display', 'block');
    $('#member4').css('display', 'none');
    $('#member5').css('display', 'none');
    $("#member1 #email").prop("required", true);
    $("#member2 #email").prop("required", true);
    $("#member3 #email").prop("required", true);
    $("#member4 #email").prop("required", false);
    $("#member5 #email").prop("required", false);
});

// not signed up

function notSignedUp() {
    $("#signed").css('display', 'none');
    $("#notSigned").css('display', 'block');
}

// typeahead:

var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
        var matches, substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function (i, str) {
            if (substrRegex.test(str)) {
                matches.push(str);
            }
        });

        cb(matches);
    };
};


$('#the-basics .typeahead').typeahead({
    hint: false,
    highlight: true,
    minLength: 1
},
    {
        name: 'states',
        source: substringMatcher(members)
    }
);

function submitted(event) {
    event.preventDefault();
    console.log('submitted');
    
}