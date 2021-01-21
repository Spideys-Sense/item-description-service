import React from 'react';
import PropTypes from 'prop-types';

const FeedingInstructionsTab = ({ tabClicked }) => (
  <span
    role="button"
    onClick={tabClicked}
    aria-hidden="true"
    className="FeedingInstructionsTab"
  >
    <p className="FeedingInstructionsTabText">
      Feeding Instructions
    </p>
  </span>
);

FeedingInstructionsTab.propTypes = {
  tabClicked: PropTypes.func.isRequired,
};

export default FeedingInstructionsTab;
