import React from 'react';
import ItemDataTable from './ItemDataTable.jsx'

const Description = ({description, itemDataTable}) => {
  return (
    <div className="descriptionTab">
      <div className="descriptionText">
        {description[0].descriptionText}
      </div>
      <div className="keyBenefitsText">
        {description[0].keyBenefitsText}
      </div>
      <div className="sideBarVideo">
        {description[0].videoUrl}
      </div>
      <ItemDataTable itemDataTable={itemDataTable}/>
    </div>
  )
}

export default Description;