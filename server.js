"use strict";

// Importing express
const express = require('express');

const app = express();

//body-parser already added to express
app.use(express.urlencoded({ extended: false })); // this is for body parsing
app.use(express.json());

const errorController = require('./controllers/error_controller')

const quoteRoute = require('./routes/quote_route')

// enabling CORS to accept from all origins
app.all("*", (req, res, next) => {
  console.log(`${new Date()} - request for ${req.path}`);
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// the various endpoints
// get all quotes
app.get("/", (req, res) => {
  res.send("geek-quote-api.");
});

// get all quotes api request
app.use(quoteRoute);

// added a 404 page
app.use(errorController.pageNotFound)

// setting the port of the process or a default port 
app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port: 3000');
});

module.exports = app