const fetch = require('node-fetch');

const rickAndMortyData = async (number) => {
    const URL = `https://rickandmortyapi.com/api/character/${number}`
    let data = await fetch(URL);

    let JSObject = await data.json();
    return JSObject;
}

module.exports = {
    rickAndMortyData
}