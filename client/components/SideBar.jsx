import React from 'react';
import PropTypes from 'prop-types';
import SideBarGraph from './SideBarGraph';
import SideBarVideo from './SideBarVideo';

const SideBar = ({ itemDataTable, videoUrl, brand }) => (
  <div className="SideBar">
    <SideBarVideo videoUrl={videoUrl} brand={brand} />
    <SideBarGraph itemDataTable={itemDataTable[0]} />
  </div>
);

SideBar.propTypes = {
  itemDataTable: PropTypes.arrayOf(PropTypes.shape).isRequired,
  videoUrl: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default SideBar;
