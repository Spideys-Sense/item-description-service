import React from 'react';

const Footer = ({ brand }) => {
  return (
    <span className="Footer">
      <a href="#">
        See all items by { brand }...
      </a>
    </span>
  );
};

export default Footer;
