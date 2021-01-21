import React from 'react';
import PropTypes from 'prop-types';

const NutritionalInfoTab = ({ tabClicked }) => (
  <span className="NutritionalInfoTab">
    <p
      className="NutritionalInfoTabText"
      onClick={tabClicked}
      aria-hidden="true"
    >
      Nutritional Info
    </p>
  </span>
);

NutritionalInfoTab.propTypes = {
  tabClicked: PropTypes.func.isRequired,
};

export default NutritionalInfoTab;
