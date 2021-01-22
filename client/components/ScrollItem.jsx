import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

// Styled component named StyledButton

const blur = keyframes`
  0% {filter: blur(0)}
  50% {filter: blur(5px)}
  100% {filter: blur(0)}
`;

const animation = () =>
  css`
    ${blur} 2s ease-in-out;
  `;


const StyledSpan = styled.span`
  grid-column-start: ${props => props.index ? props.index : 'hello'};
  text-align: center;
  padding: 0 40px;
  :hover {
    cursor: pointer;
  }
  transition: transform 0.5s ease-in-out, animation 3s ease-in-out;
  animation: ${props => !props.rightButtonIsClicked ? css`${blur} 0.5s ease-in-out;` : ''}
  transform: ${props => !props.rightButtonIsClicked ? 'translateX(-896px)' : ''}
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


const ScrollItem = ({ itemData, index, rightButtonIsClicked, leftButtonIsClicked }) => {
  return (
    <StyledSpan index={index} rightButtonIsClicked={rightButtonIsClicked} leftButtonIsClicked={leftButtonIsClicked}>
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