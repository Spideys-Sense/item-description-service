import React from 'react';

const NutritionalInfoTab = ({ tabClicked }) => {
  return (
    <span className="NutritionalInfoTab">
      <p className="NutritionalInfoTabText" onClick={ tabClicked }>
        Nutritional Info
      </p>
    </span>
  );
};

export default NutritionalInfoTab;
