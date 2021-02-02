// Dependencies
const express = require('express');
const app = express();
const foreCast = require('./utils/weatherService');

// configurations
const PORT = 3000;

// Simple web api to serve weather forecast based on geo coordinates

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my weather api'
    })
})

// calls users db to get user's saved location
app.get('/users', (req, res) => {
    req.json({
        message: 'Route to handle user login'
    })
})

// testing at this time
app.get('/weather', (req, res) => {
    let locale = req.query.locale;

    // error handling, need to code to where it does not end program and user continues to input
    if(!locale) {
        return res.send({
            error: 'Please provide valid locale'
        })
    }

    foreCast(locale, (err, weatherData) => {
        if(err) {
            console.log('error in calling weather API')
            res.send({err});
        }
        console.log('returning weather data', weatherData)
        res.send({weatherData})
    });
    
})

// Catchall route error handling
app.get('*', (req, res) => {
    res.json({
        message: '404 error, page not found'
    })
})

// Server start
app.listen(PORT, () => {
    console.log(`Server up, listening on PORT: ${PORT}`);
})