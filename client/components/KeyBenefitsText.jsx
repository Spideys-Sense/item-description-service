import React from 'react';
import PropTypes from 'prop-types';

const KeyBenefitsText = ({ keyBenefitsText }) => {
  const keyBenefitsTextBullets = keyBenefitsText.split('\n');
  return (
    <div className="keyBenefitsTextBullets">
      <p className="title">Key Benefits: </p>
      <ul className="KeyBenefitsText">
        {keyBenefitsTextBullets.map((bulletPoint, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            { bulletPoint }
          </li>
        ))}
      </ul>
    </div>
  );
};

KeyBenefitsText.propTypes = {
  keyBenefitsText: PropTypes.string.isRequired,
};

export default KeyBenefitsText;
