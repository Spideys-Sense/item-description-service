import React from 'react';
import DescriptionText from './DescriptionText.jsx'
import KeyBenefitsText from './KeyBenefitsText.jsx'

const Description = ({ description }) => {
  return (
    <div className="description">
      <DescriptionText descriptionText={ description.descriptionText } />
      <KeyBenefitsText keyBenefitsText={ description.keyBenefitsText } />
    </div>
  );
};

export default Description;
