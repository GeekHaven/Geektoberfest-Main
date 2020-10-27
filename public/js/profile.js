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

// pre data loader 
const loader = document.getElementById('fetchLoader')
const main = document.getElementById('fetchData')

function preLoader() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";
    main.style.display = 'flex';
    main.style.opacity = 1;
  }, 5000);
}
// pre data loader end 

// Fetch details of mentioned user in profile.html
let params = new URLSearchParams(document.location.search.substring(1));
let username = params.get("username");
const name = document.getElementById("name");
const about = document.getElementById("about");
const image = document.getElementById("userImg");
const fbLink = document.getElementById("fbLink");
const gitLink = document.getElementById("gitLink");
const numOfPr = document.getElementById("pr-title");
const tableCont = document.getElementById("tbody");

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
  document.getElementById('tit').innerHTML = "Profile-" + obj.name;
  var tbody, fLen, i;
  let prs = obj.prs;
  fLen = prs.length;
  numOfPr.innerHTML += fLen;

  // const giturl = "https://api.github.com/repos/";

  function insertData(link) {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        pr = data.html_url.split('/');
        pr = 'In ' + pr[pr.length - 4] + ' / ' + pr[pr.length - 3];
        issue = data.issue_url.split('/');
        issue = issue[issue.length - 3] + " 's Issue #" + issue[issue.length - 1];
        x = "<tr>";
        x += "<td><a class='left' href='" + data.html_url + "'>" + pr + "</a></td>";
        // x +="<td><a href='"+data.issue_url+"'>"+issue+"</a></td>";
        x += "<td>" + data.title + "<div class='pr-changes'><span class='pr-adds'>+ " + data.additions + "&nbsp; &nbsp;</span><span class='pr-dels'> -" + data.deletions + "</span></div></td>";
        x += "</tr>";
        tableCont.innerHTML += x;
      });
  }

  prs.forEach((pr) => {
    // Following lines get the details from github api for the particular pull request

    // setting up the url
    var giturl = "https://api.github.com/repos/" + pr.substring(19);
    var urlarray = giturl.split('/');
    // console.log(urlarray);
    urlarray[urlarray.length - 2] = 'pulls';
    giturl = urlarray.join('/');
    // getting description of PR
    insertData(giturl);
  }
  )
  preLoader();
}

// ============= search user ==================
const getUser = document.getElementById('getUser');
const user = document.getElementById('user');

getUser.addEventListener('click', (e) => {
  e.preventDefault()
  var userRequested = document.getElementById('user').value;
  if (userRequested === '') {
    alert("You need to enter some user name!")
    return
  }
  else {
    window.location.assign(`https://geekhaven.github.io/Geektoberfest-Main/profile.html?username=${userRequested}`)
    document.getElementById('user').value = ''
  }
});
user.addEventListener('keypress', e => {
  if (e.key === "Enter" && user.value!=="")
  {
    location.href = `//geekhaven.github.io/Geektoberfest-Main/profile.html?username=${user.value}`;
    user.value = "";
  }
});


