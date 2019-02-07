// ****** BACKEND DEVELOPER CONFIGURATION STARTS: *******

// FETCH THE USERDATA OBJECT FROM DATABASE

var userDetails = {
    name: "Full name",
    username: "username123",
    email: "email@abc.com",
    year: 2019,
    phoneNumber: "242353465",
    institute: "example ins",
    events: [
      {
        eventName: "event1",
        member1: "member1",
        member2: "member2",
        member3: "member3",
        member4: "member4",
        member5: "N/A"
      },
      {
        eventName: "event2",
        member1: "member1",
        member2: "member2",
        member3: "member2",
        member4: "N/A",
        member5: "N/A"
      }
    ]
  };
  
  // ****** BACKEND DEVELOPER CONFIGURATION ENDS: *******
  
  var username = document.getElementById("username");
  var name = document.getElementById("name");
  var institute = document.getElementById("institute");
  var year = document.getElementById("year");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var eventSelector = document.getElementById("eventSelector");
  var member1 = document.getElementById("member1");
  var member2 = document.getElementById("member2");
  var member3 = document.getElementById("member3");
  var member4 = document.getElementById("member4");
  var member5 = document.getElementById("member5");
  
  document.getElementById("name").innerHTML = userDetails.name;
  username.innerHTML = userDetails.username;
  institute.innerHTML = userDetails.institute;
  year.innerHTML = userDetails.year;
  phone.innerHTML = userDetails.phoneNumber;
  email.innerHTML = userDetails.email;
  
  function fillList() {
    userDetails.events.map(event => {
      var option = document.createElement("option");
      option.text = event.eventName;
      option.value = event.eventName;
      eventSelector.add(option);
    });
  }
  
  fillList();
  
  function getMembers(e) {
    var selectedVal = eventSelector[e.selectedIndex].value;
    if (selectedVal === "ps") {
      $("#memberSection").slideUp();
      return;
    }
    var index;
    console.log(eventSelector[e.selectedIndex].value);
    userDetails.events.map((event, i) => {
      if (event.eventName === selectedVal) {
        index = i;
        return;
      }
    });
    var selectedEvent = userDetails.events[index];
    member1.innerHTML = selectedEvent.member1;
    member2.innerHTML = selectedEvent.member2;
    member3.innerHTML = selectedEvent.member3;
    member4.innerHTML = selectedEvent.member4;
    member5.innerHTML = selectedEvent.member5;
    $("#memberSection").slideDown();
  
    for (let index1 = 1; index1 <= 5; index1++) {
      if ($("#member" + index1).text() !== "N/A") {
        $("#member" + index1 + "-list").slideDown();
      } else {
        $("#member" + index1 + "-list").slideUp();
      }
    }
  }