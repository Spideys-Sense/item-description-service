import React from 'react';

const TransitionInstructions = ({ transitionInstructions }) => {
  return (
    <div className="transitionInstructionsText">
      <p className="title">Transition Instructions </p>
      <p className="value">{ transitionInstructions[0].descriptionText.slice(0, 200) }</p>
    </div>
  );
};

export default TransitionInstructions;
