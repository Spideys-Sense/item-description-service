import React from 'react';

const ItemDataTable = ({itemDataTable, videoUrl}) => {
  return (
    <div className="sideBar">
      <div className="sideBarGraph">
        {itemDataTable[0].id}
      </div>
      <div className="sideBarVideo">
        {videoUrl}
      </div>
    </div>
  )
}
export default ItemDataTable;