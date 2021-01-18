import React from 'react';
import SideBarGraph from './SideBarGraph.jsx';
import SideBarVideo from './SideBarVideo.jsx';

const ItemDataTable = ({ itemDataTable, videoUrl }) => {
  return (
    <div className="sideBar">
      <SideBarGraph itemDataTable={ itemDataTable[0] } />
      <SideBarVideo videoUrl={ videoUrl } />
    </div>
  );
};
export default ItemDataTable;
