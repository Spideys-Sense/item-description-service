import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import CaloricContent from './CaloricContent';

const NutritionalInfo = ({ description }) => (
  <div className="NutritionalInfoText">
    <p className="title">Nutritional Info </p>
    <Ingredients ingredients={description[0]} />
    <CaloricContent />
  </div>
);

NutritionalInfo.propTypes = {
  description: PropTypes.arrayOf.isRequired,
};

export default NutritionalInfo;
