/* CREATING RANDOM WORD LIST */

let chewyWords = 'Hill\'s Science Diet Kitten Indoor Dry Cat Food provides your four legged friend with great tasting nutrition for a long happy life Made with wholesome ingredients such as savory chicken this nourishing recipe is balanced to meet your pet’s needs and promote healthy gentle digestion Manufactured in the United States every ingredient meets strict requirements for purity and nutrient content which exceed industry standards Formulated for kittens from weaning until 1 year old and cats who are pregnant or nursing this Hill’s Science Diet provides your cat the nutrition she needs for a lifetime of health and happiness High quality ingredients and prebiotic fibers contribute to good health for a tidier litter box Natural DHA from fish oil support healthy brain and eye development Antioxidant and vitamin blend work together to help support a healthy immune system Made from natural high quality ingredients without any artificial colors flavors or preservatives Made in the USA this is a complete and balanced diet recommended for kittens pregnant and nursing cats Hill\'s Science Diet Kitten Healthy Development Chicken Recipe Dry Cat Food provides your four legged friend with great tasting nutrition for a long happy life Made with wholesome ingredients such as savory chicken this nourishing recipe is balanced to meet your pet’s needs and support healthy brain and eye development Manufactured in the United States every ingredient meets strict requirements for purity and nutrient content which exceed industry standards Formulated for kittens from weaning until 1 year old and cats who are pregnant or nursing this Hill’s Science Diet provides your cat the nutrition she needs for a lifetime of health happiness Natural high quality ingredients are highly digestible deliciously palatable Natural DHA from fish oil support healthy brain eye development Antioxidant and vitamin blend work together to help support a healthy immune system Made from natural high quality ingredients without any artificial colors flavors or preservatives Made in the USA this is a complete balanced diet recommended for kittens pregnant and nursing cats Tend to your furry friend with Purina Pro Plan Salmon & Rice Formula This high protein dry food for adult dogs is formulated to nurture your sidekick’s sensitive skin and stomach It features real nutrient rich salmon as the very first ingredient in a highly digestible recipe with rice and oatmeal This dry dog food is fortified with live probiotics and prebiotic fiber for your pet pal’s digestive and immune health It also contains omega 6 fatty acids and vitamin A to help nourish your cuddly companion’s skin coat and omega 3 fatty acids to support healthy joints mobility This easily digestible dog food is crafted without corn wheat or soy High protein recipe features real nutrient rich salmon as the very first ingredient Formulated to nurture your sidekick’s sensitive skin and stomach Includes omega 6 fatty acids to help support a healthy skin and coat Fortified with live probiotics prebiotic fiber for digestive and immune health Dinner is served with the Fancy Feast Classic Poultry & Beef Feast Variety Pack With a delicious combo of all your cat’s favorite flavors this gourmet food features a finely ground and delightfully smooth pate texture that will fill your cat’s belly with joy The added vitamins and minerals offer complete and balanced nutrition making every mealtime a nutritious and delicious occasion And since variety is the spice of life the selection of flavors will keep him interested happy with an even mix of Tender Beef Feast Chicken Feast Turkey & Giblets Feast Provides a 100% complete and balanced meal with real meat as the very first ingredient All three gourmet recipes are grain free which means they are paw fectly purr fect for cats with certain food sensitivities Enhanced with vitamins minerals for overall health and well being Each recipe is suitable for both kittens and cats giving them the delicious nutrition they deserve Features three whisker licking flavors—Tender Beef Feast Classic Chicken Feast Classic Turkey & Giblets'

let newWordsArr = [];
let newWordsList;
let chewyWordsArr = chewyWords.split(' ');
let randomNum = (limit) => {
  return Math.floor(Math.random() * limit);
}

let randomWordList = () => {
  for (var i = 0; i < 100; i++) {
    newWordsArr.push(chewyWordsArr[randomNum(100)].toLowerCase());
  }
  newWordsList = newWordsArr.join(' ');
  return newWordsList;
}

/* CREATING RANDOM KEY BENEFITS LIST */
let randomKeyBenefitsList = () => {
  let newKeyBenefitsArr = [];
  for (var i = 0; i < 15; i++) {
    newKeyBenefitsArr.push(chewyWordsArr[randomNum(75)].toLowerCase());
  }
  console.log()
  return newKeyBenefitsArr.join(' ');
}

/* CREATING RANDOM BRAND */

let randomBrandFunc = () => {
  let randomBrand = chewyWordsArr[randomNum(100)];
  return randomBrand;
}

/* CREATING RANDOM LIFESTAGE */

let randomLifeStageFunc = () => {
  let lifestageArr = ['Kitten', 'Adult', 'Senior'];
  let randomLifestage = lifestageArr[randomNum(3)];
  return randomLifestage;
}

/* CREATING RANDOM FOOD FORM */
let randomFoodFormFunc = () => {
  let foodFormArr = ['Wet', 'Dry', 'Kibble', 'Shreds', 'Pate'];
  let randomFoodForm = foodFormArr[randomNum(5)];
  return randomFoodForm;
}

/* CREATING RANDOM SPECIAL DIET */

let randomSpecialDietFunc = () => {
  let specialDietArr = ['chonky', 'chonk', 'slonk', 'floof', 'beans', 'a fine boi', 'a heckin chonker', 'OH LAWD HE COMIN'];
  let randomSpecialDiet = specialDietArr[randomNum(8)];
  return randomSpecialDiet;
}

module.exports = {
  randomWordList: randomWordList,
  randomKeyBenefitsList: randomKeyBenefitsList,
  randomBrandFunc: randomBrandFunc,
  randomLifeStageFunc: randomLifeStageFunc,
  randomFoodFormFunc: randomFoodFormFunc,
  randomSpecialDietFunc: randomSpecialDietFunc,
}