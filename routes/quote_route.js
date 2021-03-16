const express = require('express')

const router = express.Router()

const quoteController = require('../controllers/quote_controller')

router.get("/v1/quotes", quoteController.getAllQuotes);

router.get("/v1/quote", quoteController.getSingleQuote)

router.get("/v1/quote/:count", quoteController.getNumberOfQuotes)

router.get("/v1/quote/filter/:keyword", quoteController.getSingleMatch)

router.get("/v1/quote/filter/all/:keyword", quoteController.getAllMatch)

module.exports = router