const Sequelize = require('sequelize');

const db = new Sequelize('iteminformation', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = {
  db: db
}