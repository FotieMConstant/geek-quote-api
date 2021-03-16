const quotes = require("../quotes");

// function to get random quote
function getRandomQuotes() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

function genNumberOfQuotes(genNumber) {
  // Array to store the randomly generated quotes
  let quotesNumberGen = [];
  // Loop to get all the number of quotes specified by user in his request
  for (let i = 0; i < genNumber; i++) {
    quotesNumberGen.push(getRandomQuotes());
  }
  return quotesNumberGen;
}

const { findAllMatches, findFirstMatch } = require("../quotes/QuotesUtils");

exports.getAllQuotes = (req, res) => {
  res.send(quotes);
};

exports.getSingleQuote = (req, res) => {
  res.send(getRandomQuotes());
};

// get a certain number of quotes each time they hit the endpoint
exports.getNumberOfQuotes = (req, res) => {
  console.log("User requested for " + req.params.count + " number of quote(s)");
  let quotesList = genNumberOfQuotes(req.params.count);
  res.send(quotesList);
};

exports.getSingleMatch = (req, res) => {
  console.log(`User searched for first match of ${req.params.keyword}`);
  let mQuote = findFirstMatch(req.params.keyword);
  let emptyQuote = { quote: "", author: "" };
  res.send(mQuote ? mQuote : emptyQuote);
};

exports.getAllMatch = (req, res) => {
  console.log(`User searched for all matches of ${req.params.keyword}`);
  let quotesList = findAllMatches(req.params.keyword);
  res.send(quotesList ? quotesList : []);
};
