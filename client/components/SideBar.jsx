import React from 'react';
import SideBarGraph from './SideBarGraph';
import SideBarVideo from './SideBarVideo';

const SideBar = ({ itemDataTable, videoUrl, brand }) => {
  return (
    <div className="SideBar">
      <SideBarVideo videoUrl={videoUrl} brand={brand} />
      <SideBarGraph itemDataTable={itemDataTable[0]} />
    </div>
  );
};
export default SideBar;
