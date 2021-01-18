import React from 'react';
import DescriptionTab from './DescriptionTab.jsx';
import NutritionalInfoTab from './NutritionalInfoTab.jsx';
import FeedingInstructionsTab from './FeedingInstructionsTab.jsx';

const Header = () => {
  return (
    <div className="header">
      <DescriptionTab />
      <NutritionalInfoTab />
      <FeedingInstructionsTab />
    </div>
  );
};

export default Header;
