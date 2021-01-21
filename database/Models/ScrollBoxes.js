const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../index.js');

const ScrollBoxes = db.define('ScrollBox', {
  photo: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.STRING
  },
  starRating: {
    type: DataTypes.INTEGER
  }
});

ScrollBoxes.sync();

module.exports = {
  ScrollBoxes,
};
