
![geek-quote-api logo](https://github.com/FotieMConstant/geek-quote-api/blob/main/logo.png)
# geek-quote-api
An API for retrieving random geeky quotes

## Production host

[https://geek-quote-api.herokuapp.com/v1/quote](https://geek-quote-api.herokuapp.com/v1/quote)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## APIs

### `GET /v1/quote`

Returns an object with one quote:

```json
{
  "quote":"Microsoft: You’ve got questions. We’ve got dancing paperclips.",
  "author":"Unknown Author"
}
```

### `GET /v1/quotes/`

Returns an array of all quotes

```json
[
 {
  "quote":"There is no place like 127.0.0.1",
  "author": "Unknown Author",
 },
 {
  "quote":"Girls are like Internet Domain names; the ones I like are already taken.",
  "author": "Unknown Author",
 },
]
```

### `GET /v1/quote/<count>` e.g `GET /v1/quote/4`

Returns an array of the number of quotes specified

```json
[
 {
  "quote":"Girls are like Internet Domain names; the ones I like are already taken.",
  "author": "Unknown Author",
 },
 {"quote":"Never argue with the data.",
 "author":"Unknown Author"
 },
 {
 "quote":"Passwords are like underwear. You shouldn’t leave them out where people can see them. You should change them regularly. And you shouldn’t loan them out to strangers.","author":"Unknown Author"
 },
 {
 "quote":"JUST SHUT UP AND REBOOT!!",
 "author":"Unknown Author"
 }
]
```

### `GET /v1/quote/filter/{{keyword}}` e.g `GET /v1/quote/filter/programming`

Returns an object with one quote with the searched keyword:

```json
{
  "quote": "Every SQL statement that Chuck Norris codes has an implicit 'COMMIT' in its end.",
  "author": "Unknown Author"
}
```

## Local development

Once you've cloned this repo, run `npm install` to install the dependencies.

Then you can run:

* `npm start`: runs the compiled server
