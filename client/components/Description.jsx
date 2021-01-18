import React from 'react';
import DescriptionText from './DescriptionText.jsx'
import KeyBenefitsText from './KeyBenefitsText.jsx'

const Description = ({ description }) => {
  return (
    <div className="description">
      <DescriptionText descriptionText={ description[0].descriptionText } />
      <KeyBenefitsText keyBenefitsText={ description[0].keyBenefitsText } />
    </div>
  );
};

export default Description;
