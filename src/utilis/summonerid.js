const request = require('request')
var api_key = 'RGAPI-00a552ac-a4c7-4b4b-9b26-6e703a450a17';

const data =  (s_toSearch,callback) => {
const url = 'https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + s_toSearch + '?api_key=' + api_key;

request({ url: url, json: true },(error, {body}) => {
    if (error){
    callback('Unable to connect to the RIOT API',undefined)
    } else if (body.error) {
        callback('Summoner not found!.', undefined)
        } else  {
            callback(undefined, {
                id: body.id,
                name:body.name,
                summonerLevel: body.summonerLevel
        })
    }
})
};

module.exports = data
