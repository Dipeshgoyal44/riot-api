console.log('Client side javascript file 2 is loaded')

const summoner = sessionStorage.summoner;
const name = document.querySelector('.name')
const id = document.querySelector('.id')
const level = document.querySelector('.summonerLevel')
const submit = document.getElementById("submit")
const span = document.getElementById("span1")
const queueType = document.querySelector('.queueType')
const tier = document.querySelector(".tier")
const rank = document.querySelector(".rank")
const lp = document.querySelector(".lp")
const wins = document.querySelector(".wins")
const losses = document.querySelector(".losses")


function display() {
    const summoner_name = summoner
    fetch('/search?summoner=' + summoner_name).then((response) => {
        response
            .json()
            .then((data) => {
                if (data.error) {
                    // messageOne.textContent = data.error // fix later
                } else {
                    name.textContent = data.name
                    id.textContent = data.id
                    level.textContent = data.summonerLevel
                    queueType.textContent = data.queueType
                    tier.textContent = data.tier
                    rank.textContent = data.rank
                    lp.textContent =  data.lp
                    wins.textContent = data.wins
                    losses.textContent = data.losses
                }
            })
    })
    
}

window.onload = function () {
    display();
};
