const Sequelize = require('sequelize');

const db = new Sequelize('iteminformation', 'root', 'test', {
  host: 'some-mysql1',
  dialect: 'mysql',
  logging: false,
});

module.exports = {
  db,
};

// make mysql connection
// create db if doesnt exist

// preseed script

// start -> prestart
