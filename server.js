var express  = require('express');
var app = express();
var exphbs = require('express-handlebars');
var request = require('request');
var async = require('async');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get('/', function(req,res) {
    var data = {};
    var api_key = 'RGAPI-69ff8cad-03df-4f6f-af30-009c5ef68dd3';
    var s_toSearch = 'Dabsesh';
    var URL = 'https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + s_toSearch + '?api_key=' + api_key;

    async.waterfall([
        function(callback) {
            request(URL, function(err, response, body) {
                if(!err && response.statusCode == 200) { 
                    var json = JSON.parse(body);
                    data.id = json.id;
                    data.name = json.name;
                    data.summonerLevel  = json.summonerLevel;
                    callback(null,data);
                } else {
                    console.log(err);
                }
            });
        }
    ],
    function(err, data) {
        if(err) {
            console.log(err);
            return;
        }

        res.render('index.hbs', {
            info:data
        });
    });
});

var port = Number(process.env.PORT || 3000);
app.listen(port);