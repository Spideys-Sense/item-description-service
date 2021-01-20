import React from 'react';

const DescriptionTab = ({ tabClicked }) => (
  <span className="DescriptionTab" onClick={tabClicked}>
    <p className="DescriptionTabText">
      Description Tab
    </p>
  </span>
);

export default DescriptionTab;
