const Sequelize = require('sequelize');

const db = new Sequelize('iteminformation', 'root', 'test', {
  host: '13.59.145.68',
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
