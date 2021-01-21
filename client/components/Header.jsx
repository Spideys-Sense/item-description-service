import React from 'react';
import PropTypes from 'prop-types';
import DescriptionTab from './DescriptionTab';
import NutritionalInfoTab from './NutritionalInfoTab';
import FeedingInstructionsTab from './FeedingInstructionsTab';

const Header = ({ tabClicked }) => (
  <div className="header">
    <DescriptionTab tabClicked={tabClicked} />
    <NutritionalInfoTab tabClicked={tabClicked} />
    <FeedingInstructionsTab tabClicked={tabClicked} />
  </div>
);

Header.propTypes = {
  tabClicked: PropTypes.func.isRequired,
};

export default Header;
