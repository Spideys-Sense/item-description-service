// const sequelize = require('sequelize');
var faker = require('faker');
const { Descriptions, ItemDataTables } = require('./Model.js');

Descriptions.create({
  descriptionText: faker.lorem.sentences(),
  keyBenefitsText: faker.lorem.sentences(),
  videoUrl: faker.image.imageUrl(200, 600, 'animals')
})
  .then((data) => {
    console.log('DATA RETURNED FROM CREATE: ', data);
  })
  .catch((e) => {
    console.log('ERROR IN CREATE: ', e);
  })

ItemDataTables.create({
  itemNumber: faker.random.number({min: 10, max: 100}),
  weight: faker.random.number({min: 10, max: 100}),
  brand: faker.lorem.word(),
  lifestage: faker.lorem.word(),
  foodForm: faker.lorem.word(),
  specialDiet: faker.lorem.word(),
})
