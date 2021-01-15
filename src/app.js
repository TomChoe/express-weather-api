const express = require('express');
const app = express();

// config
const PORT = 3000;

// Simple web api to serve weather forecast based on geo coordinates

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my weather api'
    })
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