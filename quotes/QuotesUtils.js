const quotes = require('../quotes');

const findFirstMatch = (keyword) => {
    return quotes.find(quoteMatches(keyword));
}

function quoteMatches(keyword) {
    return quote => {
        let quoteText = quote.quote.toLowerCase();
        let authorName = quote.author.toLowerCase();
        return quoteText.includes(keyword.toLowerCase()) || authorName.includes(keyword.toLowerCase())
    };
}

const findAllMatches = (keyword) => {
    return quotes.filter(quoteMatches(keyword));
}

module.exports = {
    findFirstMatch,
    findAllMatches
}