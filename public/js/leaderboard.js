// custom Image URL goes here
const customUrl ="./public/img/user.png";
const loader = document.getElementById("preloader");
const main = document.getElementById("table-data");

function preloader(){
  setTimeout(()=>{
      loader.style.opacity = 0;
      loader.style.display = "none";
      main.style.display = "flex";
      main.style.opacity = 1;
  },3000);
}
const githubApiUrl =
            "https://api.github.com/repos/GeekHaven/Geektoberfest-Main/commits/main";
          const participantBaseUrl =
            "https://geekhaven.github.io/Geektoberfest-Main/contributions/";
          const participantsContainer = document.getElementById(
            "leaderboard-container"
          );
          let rank = 0;
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

                      async function getUsersArray() {
                        const result = participants.map((participant) =>
                          fetch(`${participantBaseUrl + participant}`)
                            .then((res) => res.json())
                            .catch((error) => console.log(error))
                        );
                        return await Promise.all(result);
                      }

                      (function printToDOM() {
                        getUsersArray()
                          .then((users) => {
                            users.sort(
                              (p1, p2) => p2.prs.length - p1.prs.length
                            );

                            users.forEach((user) => {
                              rank++;
                              var table = document.getElementById(
                                "leaderboard-table"
                              );
                              var row = table.insertRow(rank);
                              var cell1 = row.insertCell(0);
                              var cell2 = row.insertCell(1);
                              var cell3 = row.insertCell(2);
                              var cell4 = row.insertCell(3);
                              var cell5 = row.insertCell(4);
                              var username = user.github.substr(19);
                              var link = "https://geekhaven.github.io/Geektoberfest-Main/profile.html?username="+username;
                              //var link = "http://127.0.0.1:5500/Geektoberfest-Main/profile.html?username="+username;

                              cell1.innerHTML = rank;
                              cell2.innerHTML =
                              '<img class="leaderboard-image" src="' +
                              user.imageurl +'"onerror="this.src='+
                              'customUrl' +'">';
                              cell3.innerHTML =
                                '<div class="participant-name">' +
                                user.name +
                                "</div>";
                              cell4.innerHTML =
                                '<div class="PR">' + user.prs.length + "</div>";
                              cell5.innerHTML =
                                '<div class="github-link"><a  href="' +
                                link +
                                '" target="_blank"><i class="fas fa-user"></i></a></div>';
                            });
                          })
                          .catch((error) => console.log(error));
                      }) ();
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
                preloader();
            })
            .catch((err) => console.log(err));