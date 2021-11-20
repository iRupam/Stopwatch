var timeElapsed = 0;
var timerID = -1;
function tick() {
    timeElapsed++
    let tme = secondsToHms(timeElapsed);
    document.getElementById("time").innerHTML = tme;
}

function start() {
    if (timerID == -1) {
        timerID = setInterval(tick, 1000);
    }
}

function stop() {
    if (timerID != -1) {
        clearInterval(timerID)
        timerID = -1
    }
}

function reset() {
    stop();
    timeElapsed = -1;
    tick();
}
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

    return hDisplay + mDisplay + sDisplay;
}