import React from 'react';

const DescriptionText = ({ descriptionText }) => {
  return (
    <div className="DescriptionText">
      <p className="title">Description </p>
      <p className="value">{ descriptionText }</p>
    </div>
  );
};

export default DescriptionText;
