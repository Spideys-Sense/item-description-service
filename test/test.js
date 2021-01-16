// const assert = require('assert');

var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

const { seed } = require('../database/seed.js');
const sequelize = require('sequelize');
const { Descriptions } = require('../database/Models/Descriptions.js');
const { ItemDataTables } = require('../database/Models/ItemDataTables.js');

beforeEach(() => {
  Descriptions.destroy({ truncate: true });
  ItemDataTables.destroy({ truncate: true });
  seed();
});

describe('Database', () => {
  describe('Descriptions Table', () => {
    it('should return 100 entries for Descriptions when database seed function is run', () => {
      Descriptions.findAll().then((data) => {
        expect(data.length).to.be(100);
      });
    })
  }),
  describe('ItemDataTables Table', () => {
    it('should return 100 entries for ItemDataTables when database seed function is run', () => {
      ItemDataTables.findAll().then((data) => {
        expect(data.length).to.be(100);
      });
    })
  })
});