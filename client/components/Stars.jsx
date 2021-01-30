import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: #f89800;
  float: left;
  margin-bottom: 15px;
  margin-top: 5px;
  display: inline;
`;

const Stars = ({ starRating }) => (
  <StyledDiv>
    {starRating === 1
      ? '★☆☆☆☆'
      : starRating === 2
        ? '★★☆☆☆'
        : starRating === 3
          ? '★★★☆☆'
          : starRating === 4
            ? '★★★★☆'
            : starRating === 5
              ? '★★★★★'
              : '☆☆☆☆☆'}
  </StyledDiv>
);

export default Stars;

Stars.propTypes = {
  starRating: PropTypes.number.isRequired,
};
