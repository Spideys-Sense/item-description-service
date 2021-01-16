const faker = require('faker');


const seed = async () => {
  const { Descriptions } = require('./Models/Descriptions.js');
  const { ItemDataTables } = require('./Models/ItemDataTables.js');

  Descriptions.destroy({ truncate: true });
  ItemDataTables.destroy({ truncate: true });

  const descriptionFiller = async () => {
    await Descriptions.create({
      descriptionText: faker.lorem.sentences(),
      keyBenefitsText: faker.lorem.sentences(),
      videoUrl: faker.image.imageUrl(500, 400, 'animals', true, true),
    });
  };
  const itemDataTableFiller = async () => {
    await ItemDataTables.create({
      itemNumber: faker.random.number({ min: 10, max: 100 }),
      weight: faker.random.number({ min: 10, max: 100 }),
      brand: faker.lorem.word(),
      lifestage: faker.lorem.word(),
      foodForm: faker.lorem.word(),
      specialDiet: faker.lorem.word(),
    });
  };
    for (let i = 0; i < 100; i++) {
      await itemDataTableFiller();
    }
    for (let j = 0; j < 100; j++) {
      await descriptionFiller();
    }
}
  async() => {
    await seed();
  }

  module.exports = {
    seed: seed
  }
