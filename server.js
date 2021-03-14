"use strict";

// importing path
const path = require('path')

// Importing express
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const quotes = require('./quotes');
const {findAllMatches, findFirstMatch} = require('./quotes/QuotesUtils')

const log = console.log

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
  let quotesList = genNumberOfQuotes(req.params.count)
  res.send(quotesList);
});

app.get("/v1/quote/filter/:keyword", (req, res) => {
  console.log(`User searched for first match of ${req.params.keyword}`);
  let mQuote = findFirstMatch(req.params.keyword);
  let emptyQuote = {"quote": "", "author":""};
  res.send(mQuote? mQuote : emptyQuote);
});

app.get("/v1/quote/filter/all/:keyword", (req, res) => {
  console.log(`User searched for all matches of ${req.params.keyword}`);
  let quotesList = findAllMatches(req.params.keyword);
  res.send(quotesList? quotesList : []);
});

// added a 404 page
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
})

// setting the port of the process or a default port 
app.listen(process.env.PORT || 3000, function(){
    console.log('listening on port: 3000');
});

module.exports = app