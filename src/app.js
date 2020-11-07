var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var request = require('request');
const api_data = require('./utilis/api_data')

var port = Number(process.env.PORT || 3000);

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


app.get('', (req, res) => {
    res.render('index', {
        summoner_name: "SideswipeNFS"
    })
})

app.get('/search', (req, res) => {
   // const summoner_name = "SideswipeNFS"
    if (!summoner_name) {
        return res.send({
            error: 'You must provide a search term'
        })
    }   

api_data(summoner_name, (error, { id, name, summonerLevel} = {}) => {
    if (error) {
        return res.send({error})
        }
        res.send({
            id,
            name,
            summonerLevel
        })
    })
});


app.listen(port, () => {
    console.log('Server running on port ' + port + '!')
});