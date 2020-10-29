const loader = document.querySelector("#loader");
const main = document.querySelector("#content");
var g;
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 2000);
}

init();

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

let t = true;

//toggle button
let darkMode = localStorage.getItem("darkMode");
const toggleButton = document.getElementById("toggle");
const darkModeToggle = document.querySelector(".btn-toggle");

const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem("darkMode", "enabled");
  document.getElementById("myImg").src = "public/img/gh.png";
  toggleButton.checked = true;
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("darkMode", null);
  document.getElementById("myImg").src = "public/img/Nav-logo.png";
  toggleButton.checked = false;
};
if (darkMode === "enabled") {
  enableDarkMode();
}
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  t = !t;
});
// const btn = document.querySelector(".btn-toggle");
// let t = true;
// btn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-theme");
//   if (t) document.getElementById("myImg").src = "public/img/gh.png";
//   else document.getElementById("myImg").src = "public/img/Nav-logo.png";
//   t = !t;
// });
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
  s %= 60;

  if (s >= 0) {
    d = d < 10 ? "0" + d : d;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  }

  if (s < 0) {
    d = "0" + 0;
    h = "0" + 0;
    m = "0" + 0;
    s = "0" + 0;
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

let smallcursor = document.querySelector(".cursor--darks");
let largecursor = document.querySelector(".cursor--darkl");

document.addEventListener("mousemove", movecursor);

function movecursor(e) {
  const root = document.querySelector(":root");
  document.addEventListener("mousemove", (e) => {
    root.style.setProperty("--x", e.clientX + "px");
    root.style.setProperty("--y", e.clientY + "px");
  });
}

let links = Array.from(document.querySelectorAll("a"));
if (t) {
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      smallcursor.classList.add("grow");
      //smallcursor.classList.remove("cursor--small");
    });
    link.addEventListener("mouseout", () => {
      smallcursor.classList.remove("grow");
    });
  });
}

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

// Scroll to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 40) {
    $("#scrollbtn").fadeIn();
  } else {
    $("#scrollbtn").fadeOut();
  }
});

$(document).ready(function () {
  $("#scrollbtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});

// custom Image URL goes here

const customUrl = "./public/img/user.png";

//code for fetching participants from json files in contributionsfolder

const githubApiUrl =
  "https://api.github.com/repos/GeekHaven/Geektoberfest-Main/commits/main";
const participantBaseUrl =
  "https://geekhaven.github.io/Geektoberfest-Main/contributions/";
const participantProfile =
  "https://geekhaven.github.io/Geektoberfest-Main/profile.html?username=";
const participantsContainer = document.getElementById("participants-container");
fetch(githubApiUrl)
  .then((res) => res.json())
  .then((data) => {
    const treeUrl = data.commit.tree.url;
    fetch(treeUrl)
      .then((treeRes) => treeRes.json())
      .then((treeData) => {
        const contributionsUrl = treeData.tree[2].url;
        fetch(contributionsUrl)
          .then((contributionsRes) => contributionsRes.json())
          .then((contributionsData) => {
            let participants = contributionsData.tree.map(
              (contributor) => contributor.path
            );
            participants.forEach((participant) => {
              const participantUsername = participant.substring(
                0,
                participant.length - 5
              );
              fetch(`${participantBaseUrl + participant}`)
                .then((res) => res.json())
                .then((data) => {
                  //code for rendering participants in partcipants-container
                  //participant image is available as data.imageurl
                  x =
                    '<div class="image"><img class="image__img" src="' +
                    data.imageurl +
                    '" onerror="this.src=' +
                    "customUrl" +
                    '"><div class="image__overlay image__overlay_blur"><div class="image__title text-center">' +
                    data.name;
                  x =
                    x +
                    '</div><div class="image__description"><p id="parag" class="text-center">';
                  g = data.about;
                  g = truncate(g);
                  x = x + g;
                  x =
                    x +
                    '</p></div><div class="links_par"><a  href="' +
                    data.github +
                    '" target="_blank"><i class="fab fa-github"></i></a><a  href="' +
                    participantProfile +
                    participantUsername +
                    '" target="_blank"><i class="fa fa-user"></i></a><a href="' +
                    data.facebook +
                    '" target="_blank"><i class="fab fa-facebook"></i></a><div></div></div>';
                  participantsContainer.innerHTML += x;
                })
                .catch((err) => console.log(participant + ": " + err));
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

function truncate(usertext) {
  var n = usertext.length;
  var c = 0;
  for (i = 0; i < n; i++) {
    if (usertext[i] == " ") {
      c++;
    }
  }
  var f = 12;
  if (c > 12) {
    var temText = "";
    for (i = 0; i < n; i++) {
      if (f > 0) {
        if (usertext[i] == " ") f--;
        temText += usertext[i];
      }
    }
    temText += "...";
    usertext = temText;
  }
  return usertext;
}
