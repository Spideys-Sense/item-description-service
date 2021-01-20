import React from 'react';

const FeedingInstructionsTab = ({ tabClicked }) => (
  <span className="FeedingInstructionsTab" onClick={tabClicked}>
    <p className="FeedingInstructionsTabText">
      Feeding Instructions
    </p>
  </span>
);

export default FeedingInstructionsTab;
