const request = require('request')
var api_key = 'RGAPI-00a552ac-a4c7-4b4b-9b26-6e703a450a17';

const rank_data =  (summoner_id,callback) => {
const url = 'https://oc1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summoner_id + '?api_key=' + api_key;

request({ url: url, json: true },(error, {body}) => {
    if (error){
    callback('Unable to connect to the RIOT API',undefined)
    } else if (body.error) {
        callback('Summoner not found!.', undefined)
        } else  {
            callback(undefined, {
                queueType: body.queueType,
                tier: body.tier,
                rank: body.rank,
                wins : body.wins,
                loses: body.losses,
                lp : body.leaguePoints
        })
    }
})
};

module.exports = rank_data
