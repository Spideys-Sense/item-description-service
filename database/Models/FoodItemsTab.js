const Sequelize = require('sequelize');
const { db } = require('../index.js');
// const { Descriptions } = require('./Descriptions.js');

const FoodItemsTab = db.define('FoodItemsTab', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description_id: {
    type: Sequelize.INTEGER,
    model: 'Descriptions',
    key: 'id',
  },
});

FoodItemsTab.sync();
