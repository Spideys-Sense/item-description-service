import React from 'react';

const DescriptionTab = ({ tabClicked }) => {
  return (
    <span className="DescriptionTab" onClick={ tabClicked }>
      <p className="DescriptionTabText">
        Description Tab
      </p>
    </span>
  );
};

export default DescriptionTab;
