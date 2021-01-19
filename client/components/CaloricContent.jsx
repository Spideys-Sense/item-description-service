import React from 'react';

const CaloricContent = ({ caloricContent }) => {
  return (
    <div className="CaloricContentText">
      <p className="title">Caloric Content</p>
      <p className="value">{ caloricContent.id } kcal/cup</p>
  </div>
  );
};

export default CaloricContent;
