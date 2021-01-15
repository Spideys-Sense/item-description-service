const { db } = require('./index.js');
const Sequelize = require('sequelize');
// const mysql = require('mysql');

const FoodItemsTab = db.define('FoodItemsTab', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description_id: {
    type: Sequelize.INTEGER,
    references: 'Description',
    referencesKey: 'id'
  }
})

const Descriptions = db.define('Descriptions', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  itemDataTable_id: {
    type: Sequelize.INTEGER,
    references: 'ItemDataTable',
    referencesKey: 'id'
  },
  descriptionText: {
    type: Sequelize.STRING
  },
  keyBenefitsText: {
    type: Sequelize.STRING
  },
  videoUrl: {
    type: Sequelize.STRING
  }
})
// console.log('desc', Descriptions)

const ItemDataTables = db.define('ItemDataTables', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  itemNumber: {
    type: Sequelize.INTEGER
  },
  weight: {
    type: Sequelize.INTEGER
  },
  brand: {
    type: Sequelize.STRING
  },
  lifestage: {
    type: Sequelize.STRING
  },
  foodForm: {
    type: Sequelize.STRING
  },
  specialDiet: {
    type: Sequelize.STRING
  }
})
FoodItemsTab.sync();
Descriptions.sync();
ItemDataTables.sync();
// let someFunc = async () => {
//   await Sequelize.sync({ force: true });
// }
// someFunc();


// FoodItemsTab.belongsTo(Description);
// Description.belongsTo(ItemDataTable);


module.exports = {
  Descriptions: Descriptions,
  ItemDataTables: ItemDataTables
}

// const Description = db.define('Description', {
//   descriptionText: {
//     type: Sequelize.STRING
//   }
// })

// Description.sync({ force: true })
//   .then(() => {
//     return Description.create({
//       descriptionText: 'Description text is here!'
//     })
//   })
//   .catch((e) => {
//     console.log('Error in sync: ', e);
//   })


// db.sync({ force: true })
//   .then(() => {
//     console.log('Description table created');
//     return db.create({ descriptionText: 'Descripton text goes here!' });
//   })
//   .then(() => {
//     console.log('Seeded Description table');
//   })
//   .catch((err) => {
//     console.log('ERROR IN DESCRIPTION INDEX.JS: ', err);
//   })

  //export db to sequelize.js


// try {
//   sequelize.authenticate();
//   console.log('Connection has been established SUCCESSFULLY');
// } catch (e) {
//   console.log('Error in Sequelize: ', e);
// }




// module.exports = {
//   Description: Description
// }


