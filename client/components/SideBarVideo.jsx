import React from 'react';
import PropTypes from 'prop-types';

const SideBarVideo = ({ videoUrl, brand }) => (
  <div className="SideBarVideo">
    <img src={videoUrl} alt="randomly generated animal that is taking role of placeholder for video" />
    <p className="video-title">
      Watch our
      {brand}
      {' '}
      video
    </p>
  </div>
);

SideBarVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export default SideBarVideo;
