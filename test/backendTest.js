const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');

// const { assert } = chai; // Using Assert style
const { expect } = chai; // Using Expect style
chai.should(); // Using Should style
const { describe, it } = mocha;

const { Descriptions } = require('../database/Models/Descriptions.js');
const { ItemDataTables } = require('../database/Models/ItemDataTables.js');

const server = require('../server/index.js');

describe('Database', () => {
  describe('Descriptions Table', () => {
    it('should return 100 entries for Descriptions when database seed function is run', (done) => {
      Descriptions.findAll().then((data) => {
        expect(data.length).to.be(100);
      });
      done();
    });
  });
  describe('ItemDataTables Table', () => {
    it('should return 100 entries for ItemDataTables when database seed function is run', (done) => {
      ItemDataTables.findAll().then((data) => {
        expect(data.length).to.be(100);
      });
      done();
    });
  });
});

chai.use(chaiHttp);
describe('/GET Request', () => {
  it('it should GET the data for the first item', (done) => {
    chai.request(server)
      .get('/api/1/information')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.have.lengthOf(2);
        done();
      });
  });
  it('it should GET the data for the hundreth item', (done) => {
    chai.request(server)
      .get('/api/100/information')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.should.have.lengthOf(2);
        done();
      });
  });
});
