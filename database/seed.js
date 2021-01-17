const faker = require('faker');
let random = require('./dataGenerator.js');
// import { newWordsList,  randomBrand, randomLifestage, randomSpecialDiet, randomFoodForm } from './dataGenerator.js';
// console.log(random)

const seed = async () => {
  const { Descriptions } = require('./Models/Descriptions.js');
  const { ItemDataTables } = require('./Models/ItemDataTables.js');

  Descriptions.destroy({ truncate: true });
  ItemDataTables.destroy({ truncate: true });

  const descriptionFiller = async () => {
    await Descriptions.create({
      descriptionTest: random.randomWordList(),
      // descriptionText: faker.lorem.sentences(),
      keyBenefitsText: random.randomKeyBenefitsList(),
      // keyBenefitsText: faker.lorem.sentences(),
      videoUrl: faker.image.imageUrl(500, 400, 'animals', true, true),
    });
  };
  const itemDataTableFiller = async () => {
    await ItemDataTables.create({
      itemNumber: faker.random.number({ min: 10, max: 100 }),
      weight: faker.random.number({ min: 10, max: 100 }),
      brand: random.randomBrandFunc(),
      // brand: faker.lorem.word(),
      lifestage: random.randomLifeStageFunc(),
      // lifestage: faker.lorem.word(),
      foodForm: random.randomFoodFormFunc(),
      // foodForm: faker.lorem.word(),
      specialDiet: random.randomSpecialDietFunc()
      // specialDiet: faker.lorem.word(),
    });
  };
    for (let i = 0; i < 100; i++) {
      await itemDataTableFiller()
    }
    for (let j = 0; j < 100; j++) {
      await descriptionFiller();
    }
  }
  seed()
    .catch((e) => {
      console.error(e)
    })
  //   .then((data) => {
  //     console.log(data)
  //   })
  // async() => {
  //   await seed();
  // }

  module.exports = {
    seed: seed
  }
