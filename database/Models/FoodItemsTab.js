const { db } = require('../index.js');
const Sequelize = require('sequelize');

const FoodItemsTab = db.define('FoodItemsTab', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description_id: {
    type: Sequelize.INTEGER,
    model: 'Descriptions',
    key: 'id'
  }
},
)

FoodItemsTab.sync()