console.log('Client side javascript file 2 is loaded')

const summoner = sessionStorage.summoner;
const name = document.querySelector('.name')
const id = document.querySelector('.id')
const level = document.querySelector('.summonerLevel')
const submit = document.getElementById("submit")



	function display(){
    const summoner_name = summoner;
    fetch('/search?summoner=' + summoner_name).then ((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            name.textContent = data.id
            id.textContent = data.name
            level.textContent = data.summonerLevel
            } 
        })
    })
    }
    
    window.onload = function() {
        display();
    };
