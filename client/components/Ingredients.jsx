import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => (
  <div className="IngredientsText">
    <p className="title">Ingredients </p>
    <p className="value">{ ingredients.descriptionText }</p>
  </div>
);

Ingredients.propTypes = {
  ingredients: PropTypes.shape.isRequired,
};

export default Ingredients;
