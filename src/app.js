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

// testing at this time
app.get('/weather', (req, res) => {
    console.log('Calling weather API');
    let locale = req.query.locale;
    foreCast(locale);
})

// Catchall route error handling
app.get('*', (req, res) => {
    res.json({
        message: '404 error'
    })
})

// Server start
app.listen(PORT, () => {
    console.log(`Server up, listening on PORT: ${PORT}`);
})