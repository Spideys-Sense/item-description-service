// const sequelize = require('sequelize');
const faker = require('faker');
const { Descriptions, ItemDataTables } = require('./Model.js');

let descriptionFiller = () => {
  return Descriptions.create({
    descriptionText: faker.lorem.sentences(1),
    keyBenefitsText: faker.lorem.sentences(1),
    videoUrl: faker.image.imageUrl(200, 600, 'cats', true, true),
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
for (let i = 0; i < 100; i++) {
  descriptionFiller();
  itemDataTableFiller();
}



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
// module.exports = randomlyGeneratedData;
