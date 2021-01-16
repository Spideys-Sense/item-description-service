const Sequelize = require('sequelize');
const { db } = require('../index.js');
const { ItemDataTables } = require('./ItemDataTables.js');

const Descriptions = db.define('Descriptions', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  itemDataTable_id: {
    type: Sequelize.INTEGER,
    model: 'ItemDataTables',
    key: 'id',
  },
  descriptionText: {
    type: Sequelize.STRING,
  },
  keyBenefitsText: {
    type: Sequelize.STRING,
  },
  videoUrl: {
    type: Sequelize.STRING,
  },
})

Descriptions.sync()

module.exports = {
  Descriptions,
}