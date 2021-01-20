import React from 'react';
import Ingredients from './Ingredients';
import CaloricContent from './CaloricContent';

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
