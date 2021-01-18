import React from 'react';

const SideBarVideo = ({ videoUrl, brand }) => {
  return (
    <div className="SideBarVideo">
      <img src={ videoUrl }></img>
      <p className="video-title">Watch our {brand} video</p>
    </div>
  );
};

export default SideBarVideo;
