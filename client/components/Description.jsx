import React from 'react';
import PropTypes from 'prop-types';
import DescriptionText from './DescriptionText';
import KeyBenefitsText from './KeyBenefitsText';

const Description = ({ description }) => (
  <div className="description">
    <DescriptionText
      descriptionText={description[0].descriptionText}
    />
    <KeyBenefitsText
      keyBenefitsText={description[0].keyBenefitsText}
    />
  </div>
);

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Description;
