const express = require('express'); // npm i express
const hbs = require('express-handlebars'); // npm i express-handlebars
const path = require('path'); // built-in module, so we don't need to install it. 
const app = express(); // initialising the express function and its features - https://www.npmjs.com/package/express
// https://handlebarsjs.com/

require('dotenv').config();

// internal imports
// const { emilyFunction } = require('./openWeatherMap');
const openWeatherMap = require('./lib/openWeatherMap'); // multiple imports
const HarryPotter = require('./lib/HarryPotter');

app.use(express.static(path.join(__dirname, 'public'))); // here

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

app.get('/', async (req, res) => {
    let data = await openWeatherMap.getWeather(); // multiple import
    console.log(data)
    let name = data.name
    let temp = data.main.temp;
    let description = data.weather[0].description
    let clouds = data.clouds.all;

    res.render('index', { name, temp, description, clouds })
});

app.get('/about', async (req, res) => {
    res.render('about')
});

app.get('/harrypotter', async (req, res) => {
    let data = await HarryPotter.getSortingHat();
    console.log(data)
    res.render('harrypotter', { data });
})


app.listen(3000, () => {
    console.log('listening on port 3000');
});