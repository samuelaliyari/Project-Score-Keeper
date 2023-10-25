console.log("test")

const scoreHome = document.body.querySelector("#scoreHome");
const scoreAway = document.body.querySelector("#scoreAway");

const scoreHomeChange = (points) =>scoreHome.textContent = Number(scoreHome.textContent) + points ;
const scoreAwayChange = (points) =>scoreAway.textContent = Number(scoreAway.textContent) + points ;
console.log(scoreHome)