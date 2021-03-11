"use strict";

const quotes = require('./quotes')

// function to get random quote
function getRandomQuotes(){
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}
function genNumberOfQuotes(genNumber){
  // Array to store the randomly generated quotes
  let quotesNumberGen = [];
  // Loop to get all the number of quotes specified by user in his request
  for(let i=0; i < genNumber; i++) {
    quotesNumberGen.push(getRandomQuotes());
  }
  return quotesNumberGen;
}

// importing path
const path = require('path')

// Importing express
const express = require('express');
const app = express();

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

// get all quotes
app.get("/v1/quotes", (req, res) => {
  res.send(quotes);
});

// get one random quote each time they hit the endpoint
app.get("/v1/quote", (req, res) => {
  res.send(getRandomQuotes());
});

// get a certain number of quotes each time they hit the endpoint
app.get("/v1/quote/:count", (req, res) => {
  console.log("User requested for "+req.params.count+" number of quote(s)");
  let quotes = genNumberOfQuotes(req.params.count)
  res.send(quotes);
});

// added a 404 page
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
})

// setting the port of the process or a default port 
app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port: 3000');
});