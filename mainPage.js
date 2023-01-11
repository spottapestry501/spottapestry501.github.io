window.addEventListener("load", () => {

});
function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("session");

    if (hrs > 12) {
      session.innerHTML = "PM";
    } else {
      session.innerHTML = "AM";
    }

    if (hrs > 12) {
      hrs = hrs - 12;
    }

    if (hrs < 10) {
      hrs = "0" + hrs;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }

    //hrs = (hrs < 10) ? "0" = hrs : hrs;
    //min = (hrs < 10) ? "0" = min : min;
    //sec = (sec < 10) ? "0" = sec : sec;

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
  }
  setInterval(displayTime, 10);