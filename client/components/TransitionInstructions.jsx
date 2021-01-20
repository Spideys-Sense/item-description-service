import React from 'react';
import PropTypes from 'prop-types';

const TransitionInstructions = ({ transitionInstructions }) => (
  <div className="transitionInstructionsText">
    <p className="title">Transition Instructions </p>
    <p className="value">{ transitionInstructions[0].descriptionText.slice(0, 200) }</p>
  </div>
);

TransitionInstructions.propTypes = {
  transitionInstructions: PropTypes.arrayOf.isRequired,
};

export default TransitionInstructions;
