//toggle button
const btn = document.querySelector(".btn-toggle");
let t = true;
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (t) document.getElementById("myImg").src = "public/img/gh.png";
  else document.getElementById("myImg").src = "public/img/Nav-logo.png";
  t = !t;
});
//toggle button end


//For the custom Cursor
const root = document.querySelector(":root");
document.addEventListener("mousemove", (e) => {
  root.style.setProperty("--x", e.clientX + "px");
  root.style.setProperty("--y", e.clientY + "px");
});

let smallcursor=document.querySelector(".cursor--darks");
let largecursor=document.querySelector(".cursor--darkl");


document.addEventListener("mousemove",movecursor);

function movecursor(e){
  const root = document.querySelector(":root");
document.addEventListener("mousemove", (e) => {
  root.style.setProperty("--x", e.clientX + "px");
  root.style.setProperty("--y", e.clientY + "px");
});
}

let links=Array.from(document.querySelectorAll("a"));
if(t){
links.forEach((link)=>{
  link.addEventListener("mouseover",()=>{

    smallcursor.classList.add("grow");
    //smallcursor.classList.remove("cursor--small");
  });
  link.addEventListener("mouseout",()=>{

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

// Fetch details of mentioned user in profile.html
let params = new URLSearchParams(document.location.search.substring(1));
      let username = params.get("username");
      const name = document.getElementById("name");
      const about = document.getElementById("about");
      const image = document.getElementById("userImg");
      const fbLink = document.getElementById("fbLink");
      const gitLink = document.getElementById("gitLink");

      fetch(
        "https://geekhaven.github.io/Geektoberfest-Main/contributions/" +
          username +
          ".json"
      )
        .then((res) => res.text())
        .then((res) => getDetails(res))
        .catch((err) => {
          console.log(err);
        });

      function getDetails(data) {
        var obj = JSON.parse(data);
        name.innerHTML = obj.name;
        about.innerHTML = obj.about;
        image.src = obj.imageurl;
        fbLink.href = obj.facebook;
        gitLink.href = obj.github;

        let text, fLen, i;
        let prs = obj.prs;
        fLen = prs.length;

        text = "<ul>";
        for (i = 0; i < fLen; i++) {
          text += "<li>" + prs[i] + "</li>";
        }
        text += "</ul>";

        document.getElementById("demo").innerHTML = text;
      }
