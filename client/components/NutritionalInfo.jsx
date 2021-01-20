import React from 'react';
import Ingredients from './Ingredients.jsx';
import CaloricContent from './CaloricContent.jsx';

const NutritionalInfo = ({ description }) => {
  return (
    <div className="NutritionalInfoText">
      <p className="title">Nutritional Info </p>
      <Ingredients ingredients={ description[0] }/>
      <CaloricContent />
    </div>
  );
};

export default NutritionalInfo;
