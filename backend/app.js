'use strict'
// import express
const express = require ("express")
const dotenv = require("dotenv");
// import routes 

let routes = require('./src/routes/index');

// create express app
const app = express();
dotenv.config();
// define port to run express app
const port = process.env.PORT || 3000;

// use middleware on express app
app.use(express.json());

app.use('/api',routes);

// Add endpoint
app.get('/', (req, res) => {
    res.send("Welcome to thundafund");
});

// Listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



module.exports = app
