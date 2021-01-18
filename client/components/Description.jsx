import React from 'react';
import DescriptionText from './DescriptionText.jsx'
import KeyBenefitsText from './KeyBenefitsText.jsx'
import ItemDataTable from './ItemDataTable.jsx'

const Description = ({ description, itemDataTable }) => {
  return (
    <div className="description">
      <DescriptionText descriptionText={ description.descriptionText } />
      <KeyBenefitsText keyBenefitsText={ description.keyBenefitsText } />
      <ItemDataTable itemDataTable={ itemDataTable } videoUrl={ description[0].videoUrl } />
    </div>
  );
};

export default Description;
