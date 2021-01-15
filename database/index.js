const Sequelize = require('sequelize');

const db = new Sequelize('itemInformation', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  db: db
}