import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ brand }) => (
  <span className="Footer">
    <a href="null">
      See all items by
      {' '}
      { brand }
      ...
    </a>
  </span>
);

Footer.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default Footer;
