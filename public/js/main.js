document.addEventListener("DOMContentLoaded", () => {

    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    // get all the links with an ID that starts with 'sectionLink'
    const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
    listOfLinks.forEach(function (link) {
      link.addEventListener('click',  () => {

        listOfLinks.forEach( (link) => {
          if (link.classList.contains('highlighted')) {
            link.classList.remove('highlighted');
          }
        });
        link.classList.add('highlighted');
        // get the element where to scroll
        let ref = link.href.split('#sectionLink');
        ref = "#section" + ref[1];

        if (isIE11) {
          window.scrollTo(0, document.querySelector(ref).offsetTop);
        } else {
          window.scroll({
            behavior: 'smooth',
            left: 0,
            // top gets the distance from the top of the page of our target element
            top: document.querySelector(ref).offsetTop
          });
        }
      })
    })
  })

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
  s %= 60;  // (To reach 0:00:00 at 31/10/2020 - 23:59:59)

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