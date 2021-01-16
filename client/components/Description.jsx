import React from 'react';
import ItemDataTable from './ItemDataTable.jsx'

const Description = ({description, itemDataTable}) => {
  // return <ItemDataTable itemDataTable={itemDataTable}/>
  console.log(description, itemDataTable)
  return (<h1>{description, itemDataTable}</h1>);
}

export default Description;