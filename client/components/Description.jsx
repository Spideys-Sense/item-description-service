import React from 'react';
import ItemDataTable from './ItemDataTable.jsx'

const Description = ({description, itemDataTable}) => {
  console.log(description)
  return (
    <div className="description">
        {description[0].descriptionText}
        {description[0].keyBenefitsText}
      <ItemDataTable itemDataTable={itemDataTable} videoUrl={description[0].videoUrl}/>
    </div>
  )
}

export default Description;