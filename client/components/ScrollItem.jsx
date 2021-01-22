import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component named StyledButton

const StyledSpan = styled.span`
  grid-column-start: ${props => props.index ? props.index : 'hello'};
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  margin: 0 auto;
`;

const Styledh3 = styled.h3`
  margin: 0 auto;
  max-width: 100px;
  max-height: 60px;
  overflow: hidden;
  font-size: 12px;
`;

const Styledp = styled.p`
  font-size: 11px;
`;

const Styledbutton = styled.button`
  background-color: #EF6C00
`;

// function Component() {
//   // Use it like any other component.
//   return <StyledButton> Login </StyledButton>;
// }


const ScrollItem = ({ itemData, index }) => {
  return (
    <StyledSpan index={index}>
      <StyledImg src={itemData.photo} />
      <Styledh3>
        {itemData.name}
      </ Styledh3>
      <Styledp>
        {itemData.price}
      </Styledp>
      <Styledbutton>
      Add to Cart
      </Styledbutton>
    </StyledSpan>
  );
};


export default ScrollItem;