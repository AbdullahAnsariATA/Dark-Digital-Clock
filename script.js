var hoursDom = document.querySelector("#hours-num");
var minsDom = document.querySelector("#mins-num");
var secDom = document.querySelector("#sec-num");


function clock() {
    var currentTime = new Date()
    var currentHours = currentTime.getHours()
    var currentMins = currentTime.getMinutes()
    var currentSec = currentTime.getSeconds()

    if (currentSec < 10) {
        currentSec = "0" + currentSec;
    }

    hoursDom.innerHTML = currentHours;
    minsDom.innerHTML = currentMins;
    secDom.innerHTML = currentSec;
}

setInterval(clock, 1000);