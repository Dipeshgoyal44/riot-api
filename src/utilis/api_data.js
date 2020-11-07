const request = require('request')
var api_key = 'RGAPI-b03f64c2-69ea-4880-bb18-d280d41c2cc4';

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
