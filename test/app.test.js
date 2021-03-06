const request = require('supertest');
const knex = require('../db/knex');
const app = require('../app');
const { response } = require('../app');
//const { request } = require('express');
const fixtures = require('./fixtures');
describe('CRUD Stickers', () => {
    before((done) => {
        knex.migrate.latest().then(()=>{
            return knex.seed.run();
        }).then(() => done());
    });
    it('Works...', function(){
        console.log('Its working');
    });

    it('Lists all records', (done) => {
        request(app)
            .get('/api/v1/stickers')
            .set('Accept', 'application/json')
            .expect('Content-Type', '/json/')
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                expect(response.body).to.deep.equal(fixtures.stickers);
                done();
            });
    });
});