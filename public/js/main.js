//code for countdown timer function starts

function countdown(){
    var now = new Date();
    var eventDate = new Date(2020, 10, 1);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60 - 1;  // (To reach 0:00:00 at 31/10/2020 - 23:59:59)

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if(s < 0){
        d = 0; h = 0; m = 0; s = 0;
    }

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}
countdown();

// code for countdown timer function ends