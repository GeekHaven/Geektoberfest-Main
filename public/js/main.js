document.addEventListener("DOMContentLoaded", () => {
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  // get all the links with an ID that starts with 'sectionLink'
  const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
  listOfLinks.forEach(function (link) {
    link.addEventListener("click", () => {
      listOfLinks.forEach((link) => {
        if (link.classList.contains("highlighted")) {
          link.classList.remove("highlighted");
        }
      });
      link.classList.add("highlighted");
      // get the element where to scroll
      let ref = link.href.split("#sectionLink");
      ref = "#section" + ref[1];

      if (isIE11) {
        window.scrollTo(0, document.querySelector(ref).offsetTop);
      } else {
        window.scroll({
          behavior: "smooth",
          left: 0,
          // top gets the distance from the top of the page of our target element
          top: document.querySelector(ref).offsetTop,
        });
      }
    });
  });
});

//
//toggle button
const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

//toggle button end
//

//code for countdown timer function starts

function countdown() {
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
  s %= 60; // (To reach 0:00:00 at 31/10/2020 - 23:59:59)

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (s < 0) {
    d = 0;
    h = 0;
    m = 0;
    s = 0;
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

//For the custom Cursor
const root = document.querySelector(":root");
document.addEventListener("mousemove", (e) => {
  root.style.setProperty("--x", e.clientX + "px");
  root.style.setProperty("--y", e.clientY + "px");
});

//Disables the cursor for touch device having width less then 768 px only
var supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
var cursor = document.getElementById("cursordiv");
function myFunction(x) {
  if (x.matches && supportsTouch === true) {
    while (cursor.firstChild) {
      cursor.removeChild(cursor.firstChild);
    }
  } else {
    var node1 = document.createElement("SPAN");
    node1.classList.add("cursor");
    node1.classList.add("cursor--large");
    cursor.appendChild(node1);

    var node2 = document.createElement("SPAN");
    node2.classList.add("cursor");
    node2.classList.add("cursor--small");
    cursor.appendChild(node2);
  }
}
var x = window.matchMedia("(max-width: 768px)");
myFunction(x);
x.addListener(myFunction);
