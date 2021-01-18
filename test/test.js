// const assert = require('assert');

var chai = require('chai');
let chaiHttp = require('chai-http');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

const { seed } = require('../database/seed.js');
const sequelize = require('sequelize');
const { Descriptions } = require('../database/Models/Descriptions.js');
const { ItemDataTables } = require('../database/Models/ItemDataTables.js');

const server = require('../server/index.js');

beforeEach(() => {
  seed();
});

describe('Database', () => {
  describe('Descriptions Table', () => {
    it('should return 100 entries for Descriptions when database seed function is run', (done) => {
      Descriptions.findAll().then((data) => {
        expect(data.length).to.be(100);
      });
      done();
    })
  });
  describe('ItemDataTables Table', () => {
    it('should return 100 entries for ItemDataTables when database seed function is run', (done) => {
      ItemDataTables.findAll().then((data) => {
        expect(data.length).to.be(100);
      });
      done();
    })
  })
});

chai.use(chaiHttp);
describe('/GET Request', () => {
  it('it should GET all the data', (done) => {
    chai.request(server)
        .get('/api/1/information')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              // res.body.id.should.equal(1);
              Object.keys(res.body).should.have.lengthOf(2)
          done();
        });
  });
})