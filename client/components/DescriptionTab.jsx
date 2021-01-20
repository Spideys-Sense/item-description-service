import React from 'react';
import PropTypes from 'prop-types';

const DescriptionTab = ({ tabClicked }) => (
  <span
  className="DescriptionTab"
  onClick={tabClicked}
  aria-hidden="true"
  rule="button"
>
    <p className="DescriptionTabText">
      Description Tab
    </p>
  </span>
);

DescriptionTab.propTypes = {
  tabClicked: PropTypes.func.isRequired,
};

export default DescriptionTab;
