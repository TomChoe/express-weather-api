const { weatherApiKey } = require('../../config');
const axios = require('axios');

// openweathermap.org

const forecast = (location, service) => {
    console.log('inside api calling location: ', location);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`)
        .then(res => {
            service(undefined, res.data)
        })
        .catch(err => {
            service('Error calling weather API');
        })
}

module.exports = forecast;