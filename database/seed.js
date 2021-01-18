const faker = require('faker');
let random = require('./dataGenerator.js');
// import { newWordsList,  randomBrand, randomLifestage, randomSpecialDiet, randomFoodForm } from './dataGenerator.js';
// console.log(random)

const seed = () => {
  const { Descriptions } = require('./Models/Descriptions.js');
  const { ItemDataTables } = require('./Models/ItemDataTables.js');

  Descriptions.destroy({ truncate: true });
  ItemDataTables.destroy({ truncate: true });

  const descriptionFillerData = async () => {
    let descriptionText, keyBenefitsText, videoUrl;
    try {
      descriptionText = await random.randomWordList();
      // console.log(descriptionText)
      // descriptionText: faker.lorem.sentences(),
      keyBenefitsText = await random.randomKeyBenefitsList();
      // keyBenefitsText: faker.lorem.sentences(),
      videoUrl = await faker.image.imageUrl(500, 400, 'animals', true, true);
    } catch(e) {
      console.error('Error in descriptionFillerData: ', e);
    }
    let object = {
      descriptionText: descriptionText,
      keyBenefitsText: keyBenefitsText,
      videoUrl: videoUrl
    }
    // console.log(object)
    return object;
  }

  const itemDataTableFillerData = async() => {
    let itemNumber, weight, brand, lifestage, foodForm, specialDiet;
    try {
        itemNumber = await faker.random.number({ min: 10, max: 100 });
        weight = await faker.random.number({ min: 10, max: 100 });
        brand = await random.randomBrandFunc();
        // brand: faker.lorem.word(),
        lifestage = await random.randomLifeStageFunc();
        // lifestage: faker.lorem.word(),
        foodForm = await random.randomFoodFormFunc();
        // foodForm: faker.lorem.word(),
        specialDiet = await random.randomSpecialDietFunc();
        // specialDiet: faker.lorem.word(),
    } catch(e) {
      console.error('Error in itemDataTableFillerData: ', e);
    }
    let object = {
        itemNumber: itemNumber,
        weight: weight,
        brand: brand,
        // brand: faker.lorem.word(),
        lifestage: lifestage,
        // lifestage: faker.lorem.word(),
        foodForm: foodForm,
        // foodForm: faker.lorem.word(),
        specialDiet: specialDiet
        // specialDiet: faker.lorem.word(),
      }
      return object;
    }

    // descriptionFillerData().then((data) => {console.log(data)})

  let descriptionFiller = () => {
    for (let j = 0; j < 100; j++) {
      descriptionFillerData()
        .then((data) => {
          Descriptions.create({ data })
        })
    }
  }

  let itemDataTableFiller = () => {
    for (let i = 0; i < 100; i++) {
      itemDataTableFillerData()
        .then((data) => {
          ItemDataTables.create({ data })
        })
    }
  }

  descriptionFiller();
  itemDataTableFiller();
}
seed();


  module.exports = {
    seed: seed
  }
