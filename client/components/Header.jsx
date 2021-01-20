import React from 'react';
import DescriptionTab from './DescriptionTab';
import NutritionalInfoTab from './NutritionalInfoTab';
import FeedingInstructionsTab from './FeedingInstructionsTab';

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
