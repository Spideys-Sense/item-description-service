const faker = require('faker');

const { Descriptions } = require('./Models/Descriptions.js');
const { ItemDataTables } = require('./Models/ItemDataTables.js');

Descriptions.destroy({ truncate: true });
ItemDataTables.destroy({ truncate: true });

const descriptionFiller = () => {
  return Descriptions.create({
    descriptionText: faker.lorem.sentences(1),
    keyBenefitsText: faker.lorem.sentences(1),
    videoUrl: faker.image.imageUrl(500, 400, 'animals', true, true),
  });
};
const itemDataTableFiller = () => {
  return ItemDataTables.create({
    itemNumber: faker.random.number({ min: 10, max: 100 }),
    weight: faker.random.number({ min: 10, max: 100 }),
    brand: faker.lorem.word(),
    lifestage: faker.lorem.word(),
    foodForm: faker.lorem.word(),
    specialDiet: faker.lorem.word(),
  });
};
const randomlyGeneratedDataItemDataTable = () => {
  for (let i = 0; i < 100; i++) {
    itemDataTableFiller();
  }
};
const randomlyGeneratedDataDescription = () => {
  for (let j = 0; j < 100; j++) {
    descriptionFiller();
  }
};
// randomlyGeneratedDataItemDataTable();
// randomlyGeneratedDataDescription();

module.exports = {
  randomlyGeneratedDataDescription: randomlyGeneratedDataDescription,
  randomlyGeneratedDataItemDataTable: randomlyGeneratedDataItemDataTable
}
