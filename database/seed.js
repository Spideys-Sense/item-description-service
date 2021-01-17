const faker = require('faker');
let random = require('./dataGenerator.js');
// import { newWordsList,  randomBrand, randomLifestage, randomSpecialDiet, randomFoodForm } from './dataGenerator.js';
// console.log(random)

const seed = () => {
  const { Descriptions } = require('./Models/Descriptions.js');
  const { ItemDataTables } = require('./Models/ItemDataTables.js');

  Descriptions.destroy({ truncate: true });
  ItemDataTables.destroy({ truncate: true });

  const descriptionFillerData = {
    descriptionTest: random.randomWordList(),
    // descriptionText: faker.lorem.sentences(),
    keyBenefitsText: random.randomKeyBenefitsList(),
    // keyBenefitsText: faker.lorem.sentences(),
    videoUrl: faker.image.imageUrl(500, 400, 'animals', true, true),
  }

  const itemDataTableFillerData = {
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
  }
  // console.log(itemDataTableFillerData)

  let descriptionFiller = async () => {
    let result = [];
    for (let j = 0; j < 100; j++) {
      //.create for description
      let data = await Descriptions.create({
        descriptionFillerData
      })
      result.push(data);
    }
    return result;
  }
  let itemDataTableFiller = async () => {
    let result = [];
    for (let i = 0; i < 100; i++) {
      //.create for itemdatatable
      let data = await ItemDataTables.create({
        //return undefined
        itemDataTableFillerData
      });
      //returns 1 result
      result.push(data);
      // await itemDataTableFiller()
    }
    // console.log(result)
    return result;
  }

  // itemDataTableFiller.then((data) => {
  //   console.log(data);
  // })

  let descriptionFillerPromise = descriptionFiller()
  let itemDataTableFillerPromise = itemDataTableFiller();

  // console.log(descriptionFillerPromise)

  // descriptionFillerPromise.then((data) => {
  //   // console.log(data)
  // })

  let result = Promise.all([descriptionFillerPromise, itemDataTableFillerPromise])
  // console.log(result)
  // result.then((data) => {
  //   console.log(data)
  // })
  return result;
    // .then((data) => {
    //   console.log(data)
    // })
    // .then((data) => {
    //   console.log(data)
    // })
    // console.log(result)

    // return result
    //   .then((data) => {
    //     return data;
    //   })
  }
      // await descriptionFiller();
    seed();
  // seed()
  //   .catch((e) => {
  //     console.error(e)
  //   })

  //node seed.js runs file!!!!!!!

  //call .create on data objects?!!!!!!!!!!!

  //npm run seed/npm start!!!!!!!!!






  //   .then((data) => {
  //     console.log(data)
  //   })
  // async() => {
  //   await seed();
  // }

  module.exports = {
    seed: seed
  }
