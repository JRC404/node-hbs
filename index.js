const express = require('express'); // npm i express
const hbs = require('express-handlebars'); // npm i express-handlebars
const path = require('path'); // built-in module, so we don't need to install it. 
const app = express(); // initialising the express function and its features - https://www.npmjs.com/package/express
// https://handlebarsjs.com/

require('dotenv').config(); // require this above anything that will be using a dotenv. If not, you'll have problems as it won't be able to read the file with the key. 

// internal imports
// const { emilyFunction } = require('./openWeatherMap');
const openWeatherMap = require('./lib/openWeatherMap'); // multiple imports
const HarryPotter = require('./lib/HarryPotter');
const rickAndMortyData = require('./lib/RickMorty');

app.use(express.static(path.join(__dirname, 'public'))); // creating a static path to 'public' folder

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
})); // setting default layout for HBS. Telling it to look for .hbs files, in particular: layout.hbs

app.set('view engine', '.hbs'); // setting engine as HBS. Take a look at other templating engines, like EJS and Pug and see the app.set needed for them! :)

app.get('/', async (req, res) => {
    let data = await openWeatherMap.getWeather(); 
    /** 
     * openWeatherMap object holding the functions inside of it...
     * try importing getWeather() on its own and see what error you get? Why do you get an error?
    */
    console.log(data) // it is always good to console.log your data before pushing it to the render, to see what info you actually get back.
    // for the best results, use insomnia or postman! :-)

    /**
     * after reading the data, I displayed a few keys from that data...
     * assigning it to a variable allows me to use it effectively.
     */
    let name = data.name
    let temp = data.main.temp;
    let description = data.weather[0].description
    let clouds = data.clouds.all;

    // rendering the index.hbs page and then the variables that I want to be displayed on that page inside of the {} 
    res.render('index', { name, temp, description, clouds })
});

app.get('/about', async (req, res) => {
    res.render('about')
});

app.get('/rickandmorty', async (req, res) => {
    let number = 1
    let data = await rickAndMortyData.rickAndMortyData(number)
    console.log(data)
    res.render('rickandmorty')
})

app.get('/harrypotter', async (req, res) => {
    let data = await HarryPotter.getSortingHat();
    console.log(data)
    res.render('harrypotter', { data });
})


app.listen(3000, () => {
    console.log('listening on port 3000');
});