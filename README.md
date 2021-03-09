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
    quote:"There is no place like 127.0.0.1",
    author: "Unknown Author",
  },
  {
    quote:"Girls are like Internet Domain names; the ones I like are already taken.",
    author: "Unknown Author",
  },
]
```

## Local development

Once you've cloned this repo, run `npm install` to install the dependencies.

Then you can run:

* `npm start`: runs the compiled server
