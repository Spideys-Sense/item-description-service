import React from 'react';
import PropTypes from 'prop-types';

const DescriptionText = ({ descriptionText }) => (
  <div className="DescriptionText">
    <p className="title">Description </p>
    <p className="value">{ descriptionText }</p>
  </div>
);

DescriptionText.propTypes = {
  descriptionText: PropTypes.string.isRequired,
};

export default DescriptionText;
