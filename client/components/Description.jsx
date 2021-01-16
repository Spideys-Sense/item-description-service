import React from 'react';
import ItemDataTable from './ItemDataTable.jsx'

const Description = ({description, itemDataTable}) => {
  // return <ItemDataTable itemDataTable={itemDataTable}/>
  return (<h1>{description[0].descriptionText}</h1>);
}

export default Description;