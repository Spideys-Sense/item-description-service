const faker = require('faker');
const random = require('./dataGenerator.js');
const { Descriptions } = require('./Models/Descriptions.js');
const { ItemDataTables } = require('./Models/ItemDataTables.js');
const { ScrollBoxes } = require('./Models/ScrollBoxes.js');

const seed = () => {
  Descriptions.destroy({ truncate: true });
  ItemDataTables.destroy({ truncate: true });
  ScrollBoxes.destroy({ truncate: true });

  const descriptionArr = [];
  const itemTablesArr = [];
  const suggestedItems = [];

  const descriptionFillerData = () => {
    for (let i = 0; i < 100; i += 1) {
      const object = {
        descriptionText: random.randomWordList(),
        keyBenefitsText: random.randomKeyBenefitsList(),
        videoUrl: faker.image.imageUrl(225, 180, 'animals', true, true),
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

  const createLinkedList = () => {

    let objectData = () => (
      {
        photo: faker.image.imageUrl(80, 120, 'animals', true, true),
        name: random.randomDetailedTitleFunc(),
        price: faker.commerce.price(3, 30, 2, '$'),
        starRating: faker.random.number({min: 0, max: 5}),
        onSale: random.randomCoupon(),
      }
    );

    let Node = function (value) {
      let node = {};
      node.value = value;
      node.next = null;
      return node;
    };

    let linkedList = () => {
      let list = {};
      list.head = null;
      list.tail = null;

      list.add = function(value) {
        let newNode = Node(value);
        if (!list.head) {
          list.head = newNode;
        }
        if (list.tail) {
          list.tail.next = newNode;
        }
        list.tail = newNode;
      };
      return list;
    };

    let linkedListInstance = linkedList();
    for (let k = 0; k < 10; k += 1) {
      let currentObjectData = objectData();
      linkedListInstance.add(currentObjectData);
      ScrollBoxes.create(currentObjectData);
    }
    // suggestedItems.push(linkedListInstance);
  };
  createLinkedList();

  Descriptions.bulkCreate(descriptionArr);
  ItemDataTables.bulkCreate(itemTablesArr);
  ScrollBoxes.bulkCreate(suggestedItems);
};

seed();