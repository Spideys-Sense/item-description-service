import React from 'react';

const FeedingInstructionsTab = ({ tabClicked }) => {
  return (
    <span className="FeedingInstructionsTab" onClick={ tabClicked }>
      <p className="FeedingInstructionsTabText">
        Feeding Instructions
      </p>
    </span>
  );
};

export default FeedingInstructionsTab;
