let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../server');
let totalAmountOfQuotes = require('../quotes').length;


chai.use(chaiHttp);

describe('Geek-Api', () => {
    describe('/GET /v1/quote', () => {
        it('it should GET a random quote', (done) => {
            chai.request(server)
                .get('/v1/quote')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('quote').should.be.not.empty;
                    res.body.should.have.property('author').should.be.not.empty;
                    done();
                });
        });
    });
    describe('/GET /v1/quotes', () => {
        it('it should GET a all quotes', (done) => {
            chai.request(server)
                .get('/v1/quotes')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(totalAmountOfQuotes);
                    done();
                });
        });
    });
    describe('/GET /v1/quote/4', () => {
        it('it should GET four quotes', (done) => {
            chai.request(server)
                .get('/v1/quote/4')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(4);
                    done();
                });
        });
    });
    describe('/GET /v1/quote/filter/try', () => {
        it('it should match one quote', (done) => {
            chai.request(server)
                .get('/v1/quote/filter/try')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('quote').be.eql('Try not. Do, or do not. There is no try.');
                    res.body.should.have.property('author').be.eql('Yoda, The Empire Strikes Back');
                    done();
                });
        });
    });
    describe('/GET /v1/quote/filter/notMatchingKeyword', () => {
        it('it should match zero quote', (done) => {
            chai.request(server)
                .get('/v1/quote/filter/notMatchingKeyword')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('quote').be.empty;
                    res.body.should.have.property('author').be.empty;
                    done();
                });
        });
    });

});