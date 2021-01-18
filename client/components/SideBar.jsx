import React from 'react';
import SideBarGraph from './SideBarGraph.jsx';
import SideBarVideo from './SideBarVideo.jsx';

const SideBar = ({ itemDataTable, videoUrl }) => {
  return (
    <div className="SideBar">
      <SideBarVideo videoUrl={ videoUrl } />
      <SideBarGraph itemDataTable={ itemDataTable[0] } />
    </div>
  );
};
export default SideBar;
