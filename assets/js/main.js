console.log("test")
const modal = document.body.querySelector(".modalHolder");
const homeName = document.body.querySelector(".modal input:nth-of-type(1)");
const awayName = document.body.querySelector(".modal input:nth-of-type(2)");
const scoreHome = document.body.querySelector("#scoreHome");
const scoreAway = document.body.querySelector("#scoreAway");
const homeTitle = document.body.querySelector("#homeName");
const awayTitle = document.body.querySelector("#awayName");


const showModal = () => modal.style.display= "flex";
const saveNames = () => {
    homeTitle.textContent = homeName.value;
    awayTitle.textContent = awayName.value;
    modal.style.display = "none";
    if (homeName.value === ""){
        homeTitle.textContent = "Home";
    }
    if (awayName.value === ""){
        awayTitle.textContent = "Away";
    }
}

const scoreHomeChange = (points) =>scoreHome.textContent = Number(scoreHome.textContent) + points ;
const scoreAwayChange = (points) =>scoreAway.textContent = Number(scoreAway.textContent) + points ;
console.log(scoreHome)