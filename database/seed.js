const faker = require('faker');
const random = require('./dataGenerator.js');
const { Descriptions } = require('./Models/Descriptions.js');
const { ItemDataTables } = require('./Models/ItemDataTables.js');

const seed = () => {
  Descriptions.destroy({ truncate: true });
  ItemDataTables.destroy({ truncate: true });

  const descriptionArr = [];
  const itemTablesArr = [];

  const descriptionFillerData = () => {
    for (let i = 0; i < 100; i += 1) {
      const object = {
        descriptionText: random.randomWordList(),
        keyBenefitsText: random.randomKeyBenefitsList(),
        videoUrl: faker.image.imageUrl(225, 180, 'animals', true, true)
      };
      descriptionArr[i] = object;
    }
  };

  descriptionFillerData();

  const itemDataTableFillerData = () => {
    for (let j = 0; j < 100; j += 1) {
      const object = {
        itemNumber: faker.random.number({ min: 10, max: 100 }),
        weight: faker.random.number({ min: 10, max: 100 }),
        brand: random.randomBrandFunc(),
        lifestage: random.randomLifeStageFunc(),
        foodForm: random.randomFoodFormFunc(),
        specialDiet: random.randomSpecialDietFunc(),
      };
      itemTablesArr[j] = object;
    }
  };

  itemDataTableFillerData();

  Descriptions.bulkCreate(descriptionArr);
  ItemDataTables.bulkCreate(itemTablesArr);
};

seed();

module.exports = {
  seed,
};
