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
    type: Sequelize.TEXT,
  },
  keyBenefitsText: {
    type: Sequelize.TEXT,
  },
  videoUrl: {
    type: Sequelize.STRING,
  },
});

Descriptions.sync();

module.exports = {
  Descriptions,
};
