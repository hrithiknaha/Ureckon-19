var isSignedUp = true;
var output;

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
        $(".container-contact100").css('visibility', 'hidden');
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

    // TODO: Add on click listeners to all buttons

    $('#robowar').on('click', function () {
        if (!isSignedUp) {
            notSignedUp();
            return;
        }    

        output = `<div class="wrap-contact100">
            <button class="btn-hide-contact100" onclick="document.getElementById('output').style.display='none'">
                <i class="zmdi zmdi-close"></i>
            </button>
    
            <div class="contact100-form-title" style="background: #eeeeee">
                <span>Register</span>
            </div>
    
            <form class="contact100-form validate-form">
                <div class="wrap-input100 validate-input">
                    <input id="name" class="input100" type="text" name="name" placeholder="Team name">
                    <span class="focus-input100"></span>
                    <label class="label-input100" for="name">
                        <span class="lnr lnr-user m-b-2"></span>
                    </label>
                </div>
    
    
                <div class="wrap-input100 validate-input">
                    <input id="email" class="input100" type="text" name="email" placeholder="Enter Email (Eg. example@email.com)">
                    <span class="focus-input100"></span>
                    <label class="label-input100" for="email">
                        <span class="lnr lnr-envelope m-b-5"></span>
                    </label>
                </div>

                <div class="wrap-input100 validate-input">
                    <input id="email" class="input100" type="text" name="email" placeholder="Enter Email (Eg. example@email.com)">
                    <span class="focus-input100"></span>
                    <label class="label-input100" for="email">
                        <span class="lnr lnr-envelope m-b-5"></span>
                    </label>
                </div>
    
                <div class="container-contact100-form-btn">
                    <button class="contact100-form-btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>`;

        $("#output").html(output);
    });

})(jQuery);

function notSignedUp() {
    output = `<div class="wrap-contact100 notSigned">
                <button class="btn-hide-contact100 mt-2" onclick="document.getElementById('output').style.display='none'">
                <i class="zmdi zmdi-close"></i>
                </button>
                 <div class="contact100-form-title" style="background: #eeeeee">
                <span style="text-align:center;">It seems like you are not signed up. Sign Up here:</span>
                </div>
                <div class="container-contact100-form-btn">
                    <a href="./signup.html"><button class="contact100-form-btn">
                        Sign Up
                    </button></a>
                </div>            
            </div>`;
    $("#output").html(output);
}