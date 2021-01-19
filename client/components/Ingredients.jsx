import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <div className="IngredientsText">
      <p className="title">Ingredients </p>
      <p className="value">{ ingredients.descriptionText }</p>
    </div>
  );
};

export default Ingredients;
