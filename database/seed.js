// const sequelize = require('sequelize');
var faker = require('faker');
const { Description, ItemDataTable } = require('./Model.js');

Description.sync({ force: true })
  .then(() => {
    return Description.create({
      descriptionText: faker.lorem.sentences(),
      keyBenefitsText: faker.lorem.sentences(),
      videoUrl: faker.image.imageUrl(200, 600, 'animals')
    })
  })
  .catch((e) => {
    console.log('error in Description: ', e);
  })

ItemDataTable.sync({ force: true })
  .then(() => {
    return Description.create({
      itemNumber: faker.random.number({min: 10, max: 100}),
      weight: faker.random.number({min: 10, max: 100}),
      brand: faker.lorem.word(),
      lifestage: faker.lorem.word(),
      foodForm: faker.lorem.word(),
      specialDiet: faker.lorem.word(),
    })
  })
  .catch((e) => {
    console.log('error in ItemDataTable: ', e);
  })
