console.log('Client side javascript file is loaded')

const input = document.querySelector('input')
const submit = document.getElementById("submit")
const summoner = "Dabsesh"
//document.getElementById("summoner_name").value;
//console.log(summoner1);


sessionStorage.summoner = summoner;

input.addEventListener("keyup", function(evt) {
    evt.preventDefault();
	if(evt.key==13){
    submit.click();
    }
});


