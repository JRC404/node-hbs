const fetch = require('node-fetch');
const URI = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${process.env.APPID}`;

/**
 * fetch is required in any file that will be using it. It only needs to be installed once into the project with 'npm i node-fetch'
 * 
 * URI is the link that your API uses to access the data. Above is the openWeatherMap API link with the process.env.APPID linked to the .env file elsewhere in the file. (.env not uploaded to github.)
 * 
 * getWeather function is asynchronous so it can use the await keyword to wait for the promise of data returned from the URI, as JavaScript is giddy and will move on before it is complete if async / await isn't used. 
 * 
 * Try removing the await on the fetch (URI) and see what response you get?
 * 
 * Returning the JSObject to use its value elsewhere! :-)
 * 
 * Export created as a multiple export object, just in case we create another function in here
 */

const getWeather = async () => {
    let data = await fetch(URI);

    let JSObject = await data.json();
    return JSObject;
}

module.exports = {
    getWeather
}