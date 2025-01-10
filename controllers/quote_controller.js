const quotes = require("../quotes");

// function to get random quote
function getRandomQuotes() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

function getKnownRandomQuote() {
  // Single Random Known Author
  const mquotes = quotes.filter((q) => q.author !== "Unknown Author");

  const mKnownRandom = mquotes[Math.floor(Math.random() * mquotes.length)];

  return mKnownRandom;
}

function getKnownRandomQuotes(number) {
  // Multiple Random Known Author

  let quotesNumberGen = [];

  for (let i = 0; i < number; i++) {
    quotesNumberGen.push(getKnownRandomQuote());
  }
  return quotesNumberGen;
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
  if (isNaN(parseInt(req.params.count)))
    res.send({
      error: {
        message: "Count is not a number.",
        code: 400,
      },
    });
  console.log("User requested for " + req.params.count + " number of quote(s)");
  let quotesList = genNumberOfQuotes(req.params.count);
  res.send(quotesList);
};

// exports.getSingleKnownAuthor = (req, res) => {
//   let ranQuote = getKnownRandomQuote();
//   res.send(ranQuote);
// };

// exports.getMultipleKnownAuthor = (req, res) => {
//   res.send(getKnownRandomQuotes(req.params.count));
// };

// exports.getSingleMatch = (req, res) => {
//   console.log(`User searched for first match of ${req.params.keyword}`);
//   let mQuote = findFirstMatch(req.params.keyword);
//   let emptyQuote = { quote: "", author: "" };
//   res.send(mQuote ? mQuote : emptyQuote);
// };

// exports.getAllMatch = (req, res) => {
//   console.log(`User searched for all matches of ${req.params.keyword}`);
//   let quotesList = findAllMatches(req.params.keyword);
//   res.send(quotesList ? quotesList : []);
// };
