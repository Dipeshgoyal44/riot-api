console.log('Client side javascript file is loaded')

const search = document.querySelector('input')
search.addEventListener('keypress',setQuery);
const name = document.querySelector('.name')
const id = document.querySelector('.id')
const level = document.querySelector('.summonerLevel')



	function setQuery(evt){
	if(evt.keyCode==13){
    const summoner_name = search.value
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
}
 