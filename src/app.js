var express = require('express');
var exphbs = require('express-handlebars');
var request = require('request');
const path = require('path')
const summoner_id = require('./utilis/summonerid')
const rank_data = require('./utilis/rank_data')
const hbs = require('hbs');


var port = Number(process.env.PORT || 3000);
var app = express();

// Define paths for express config
const PublicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(PublicDirectory))

app.get('', (req, res) => {
    res.render('index', {})
})

app.get('/profile', (req, res) => {
    res.render('profile', {})
})


app.get('/search', (req, res) => {
    
    if (!req.query.summoner) {
        return res.send({
            error: 'You must provide a search term'
        })
    }   
    const summoner = req.query.summoner
    summoner_id(summoner, (error, { id, name, summonerLevel} = {}) => {
    if (error) {
        return res.send({error})
        }

    rank_data(id, (error, { queueType, tier, rank, wins, loses, lp} = {}) => {
        if (error) {
            return res.send({error})
            }
        res.send({
            id,
            name,
            summonerLevel,
            queueType,
            tier,
            rank,
            wins, 
            loses,
            lp
        })
    })
})
});


app.listen(port, () => {
    console.log('Server running on port ' + port + '!')
});