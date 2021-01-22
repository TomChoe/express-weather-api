const { weatherApiKey } = require('../../config');
const axios = require('axios');

// openweathermap.org

const forecast = (location) => {
    console.log('inside api calling location: ', location);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log('Error in calling API ', err);
        })
}

module.exports = forecast;