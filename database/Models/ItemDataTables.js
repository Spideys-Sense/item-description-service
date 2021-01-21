const Sequelize = require('sequelize');
const { db } = require('../index.js');

const ItemDataTables = db.define('ItemDataTables', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  itemNumber: {
    type: Sequelize.INTEGER,
  },
  weight: {
    type: Sequelize.INTEGER,
  },
  brand: {
    type: Sequelize.STRING,
  },
  lifestage: {
    type: Sequelize.STRING,
  },
  foodForm: {
    type: Sequelize.STRING,
  },
  specialDiet: {
    type: Sequelize.STRING,
  },
});

ItemDataTables.sync();

module.exports = {
  ItemDataTables,
};

