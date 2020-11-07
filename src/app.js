var express = require('express');
var exphbs = require('express-handlebars');
var request = require('request');
const path = require('path')
const api_data = require('./utilis/api_data')
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

// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));

// app.set('view engine', 'handlebars');


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
api_data(summoner, (error, { id, name, summonerLevel} = {}) => {
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