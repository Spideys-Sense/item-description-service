import React from 'react';
import DescriptionTab from './DescriptionTab.jsx';
import NutritionalInfoTab from './NutritionalInfoTab.jsx';
import FeedingInstructionsTab from './FeedingInstructionsTab.jsx';

const Header = ({ tabClicked }) => {
  return (
    <div className="header">
      <DescriptionTab tabClicked={ tabClicked } />
      <NutritionalInfoTab tabClicked={ tabClicked } />
      <FeedingInstructionsTab tabClicked={ tabClicked } />
    </div>
  );
};

export default Header;
