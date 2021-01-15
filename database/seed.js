// const sequelize = require('sequelize');
const faker = require('faker');

const { Descriptions } = require('./Models/Descriptions.js');
const { ItemDataTables } = require('./Models/ItemDataTables.js');

Descriptions.destroy({ truncate: true });
ItemDataTables.destroy({ truncate: true });

let descriptionFiller = () => {
  return Descriptions.create({
    descriptionText: faker.lorem.sentences(1),
    keyBenefitsText: faker.lorem.sentences(1),
    videoUrl: faker.image.imageUrl(500, 400, 'animals', true, true),
  })
}
let itemDataTableFiller = () => {
  return ItemDataTables.create({
    itemNumber: faker.random.number({ min: 10, max: 100 }),
    weight: faker.random.number({ min: 10, max: 100 }),
    brand: faker.lorem.word(),
    lifestage: faker.lorem.word(),
    foodForm: faker.lorem.word(),
    specialDiet: faker.lorem.word(),
  })
}
let randomlyGeneratedData = function() {
  for (let i = 0; i < 100; i++) {
    descriptionFiller();
    itemDataTableFiller();
  }
}
randomlyGeneratedData();


// for (let i = 0; i < 100; i++) {
//   descriptionFiller()
//     .then((data) => {
//       console.log('descriptionFillerData: ', data);
//     })
//     .catch((e) => {
//       console.log('error in descriptionFillerData: ', e)
//     })
//   itemDataTableFiller()
//    .then((data) => {
//     console.log('itemDataTableFiller: ', data);
//   })
// }
module.exports.randomlyGeneratedData = randomlyGeneratedData;
