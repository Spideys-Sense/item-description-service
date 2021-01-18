import React from 'react';

const KeyBenefitsText = ({ keyBenefitsText }) => {
  // console.log(keyBenefitsText.split('\n'))
  let keyBenefitsTextBullets = keyBenefitsText.split('\n')
  return (
    <ul className="KeyBenefitsText">
      {keyBenefitsTextBullets.map((bulletPoint, index) => (
        <li key={index}>
          { bulletPoint }
        </li>
      ))}
    </ul>
  );
};

export default KeyBenefitsText;
