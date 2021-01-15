const Sequelize = require('sequelize');

const db = new Sequelize('iteminformation', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  db: db
}