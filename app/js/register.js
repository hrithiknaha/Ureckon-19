var output;

// ****** BACKEND DEVELOPER CONFIGURATION STARTS: *******

var members = ["Sayan", "Somsubhra", "Raja", "Baja", "Khaja"]; // FETCH USERNAMES FROM DATABASE AND ADD TO THIS ARRAY

var isSignedUp = true; // GET USER SIGNED UP STATUS FROM DATABASE

// ********* BACKEND DEVELOPER CONFIGURATION ENDS: *********

var events = {
    // roborace: 5,
    // robowar: 3,
    robosoccer: 5,
    roborumble: 5,
    bridgemaking: 3,
    getsetsell: 4,
    admaking: 4,
    spyder: 2,
    codegolf: 2,
    coderanch: 2,
    pubg: 4,
    cluex: 2,
    uic: 5,
};

var idName = "";

var count = 1;

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
        count = 1;
        idName = "";
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

//robotics

$("#roborace").on("click", function() {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text('Register For RoboRace');

    $('#addmember').on('click', function () { 
        if (count <= events.roborace) {
            count++;
            idName = "member" + count;
            document.getElementById(idName).style.display = "block";
        } 
        if (count >= 1 && count <= event.roborace) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = false;
        }
        if (count === events.roborace) {
            document.getElementById('addmember').disabled = true;
            document.getElementById('delmember').disabled = false;
        }
        // console.log(count);
        
        
    })
    $('#delmember').on('click', function () {
        if (count >= 1) {
            idName = "member" + count;
            document.getElementById(idName).style.display = "none";
            count--;
        }
        if (count >= 1 && count <= event.roborace) {
          document.getElementById("addmember").disabled = false;
          document.getElementById("delmember").disabled = false;
        }
        if (count === 1) {
            document.getElementById("addmember").disabled = false;            
            document.getElementById("delmember").disabled = true;            
        }
        // console.log(count);
        
    })
});

$('#robowar').on('click', function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For RoboWar");

    $('#addmember').on('click', function () {
        if (count <= events.robowar) {
            count++;
            idName = "member" + count;
            document.getElementById(idName).style.display = "block";
        }
        if (count >= 1 && count <= event.robowar) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = false;
        }
        if (count === events.robowar) {
            document.getElementById('addmember').disabled = true;
            document.getElementById('delmember').disabled = false;
        }
        // console.log(count);


    })
    $('#delmember').on('click', function () {
        if (count >= 1) {
            idName = "member" + count;
            document.getElementById(idName).style.display = "none";
            count--;
        }
        if (count >= 1 && count <= event.robowar) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = false;
        }
        if (count === 1) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = true;
        }
        // console.log(count);

    })
});

$("#robosoccer").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Robo Soccer");
    $("#addmember").on("click", function() {
      if (count <= events.robosoccer) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.robosoccer) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.robosoccer) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.robosoccer) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

//coding:
$("#coderanch").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text('Register For Code Ranch');

    $("#addmember").on("click", function() {
      if (count <= events.coderanch) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.coderanch) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.coderanch) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.coderanch) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

$("#codegolf").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Code Golf");

    $("#addmember").on("click", function() {
      if (count <= events.codegolf) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.codegolf) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.codegolf) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.codegolf) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

$("#spyder").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
    $(".contact100-form-title span").text("Register For Spyder");
    
    $("#addmember").on("click", function() {
      if (count <= events.spyder) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.spyder) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.spyder) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function () {
        if (count >= 1) {
            idName = "member" + count;
            document.getElementById(idName).style.display = "none";
            count--;
        }
        if (count >= 1 && count <= event.spyder) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = false;
        }
        if (count === 1) {
            document.getElementById("addmember").disabled = false;
            document.getElementById("delmember").disabled = true;
        }
        // console.log(count);
    });
});

// Gaming:

$("#pubg").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For PUBG");

    $("#addmember").on("click", function() {
      if (count <= events.pubg) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.pubg) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.pubg) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.pubg) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

// mechanical:
$("#bridgemaking").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Bridge Making");

    $("#addmember").on("click", function() {
      if (count <= events.bridgemaking) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.bridgemaking) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.bridgemaking) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.bridgemaking) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

// Flagship:
$("#uic").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For UIC");

    $("#addmember").on("click", function() {
      if (count <= events.uic) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.uic) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.uic) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.uic) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

// business:

$("#getsetsell").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For Get Set Sell");

    $("#addmember").on("click", function() {
      if (count <= events.getsetsell) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.getsetsell) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.getsetsell) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.getsetsell) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

$("#admaking").on("click", function () {
    if (!isSignedUp) {
        notSignedUp();
        return;
    }
    $(".contact100-form-title span").text("Register For Ad making");

    $("#addmember").on("click", function() {
      if (count <= events.admaking) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.admaking) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.admaking) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.admaking) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
});

// misc:
$("#cluex").on("click", function() {
  if (!isSignedUp) {
    notSignedUp();
    return;
  }
  $(".contact100-form-title span").text("Register For ClueX");

    $("#addmember").on("click", function() {
      if (count <= events.cluex) {
        count++;
        idName = "member" + count;
        document.getElementById(idName).style.display = "block";
      }
      if (count >= 1 && count <= event.cluex) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === events.cluex) {
        document.getElementById("addmember").disabled = true;
        document.getElementById("delmember").disabled = false;
      }
      // console.log(count);
    });
    $("#delmember").on("click", function() {
      if (count >= 1) {
        idName = "member" + count;
        document.getElementById(idName).style.display = "none";
        count--;
      }
      if (count >= 1 && count <= event.cluex) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = false;
      }
      if (count === 1) {
        document.getElementById("addmember").disabled = false;
        document.getElementById("delmember").disabled = true;
      }
      // console.log(count);
    });
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