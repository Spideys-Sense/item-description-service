import React from 'react';

const KeyBenefitsText = ({ keyBenefitsText }) => {
  let keyBenefitsTextBullets = keyBenefitsText.split('\n')
  return (
    <div className="keyBenefitsTextBullets">
      <p className="title">Key Benefits: </p>
      <ul className="KeyBenefitsText">
        {keyBenefitsTextBullets.map((bulletPoint, index) => (
          <li key={index}>
            { bulletPoint }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyBenefitsText;
