import React from 'react';
import ItemDataTable from './ItemDataTable.jsx'

const Description = ({description, itemDataTable}) => {
  return (
    <div>
      <h1>{description[0].descriptionText}</h1>
      <ItemDataTable itemDataTable={itemDataTable}/>
    </div>
  )
}

export default Description;