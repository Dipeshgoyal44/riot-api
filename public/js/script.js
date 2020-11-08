console.log('Client side javascript file is loaded')

const input = document.querySelector('input')
const submit = document.getElementById("submit")

function getValue() {
    var summoner = document.getElementById("summoner_name").value;   
    sessionStorage.summoner = summoner;
}
    


