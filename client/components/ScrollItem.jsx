import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

// Styled component named StyledButton

const blur = keyframes`
  0% {filter: blur(0)}
  50% {filter: blur(5px)}
  100% {filter: blur(0)}
`;

const StyledSpan = styled.span`
  font-family: Roboto, serif;
  color: #333333;
  font-size: 10px;
  width: 120px;
  border-radius: 5px;
  border: solid 1px #dddddd;
  box-shadow: 0 1px 0 #cccccc;
  grid-column-start: ${props => props.index ? props.index : 'hello'};
  padding: 16px;
  margin: 0 16px 2px 0;
  :hover {
    cursor: pointer;
  }
  transition: transform 0.5s ease-in-out, animation 3s ease-in-out;
  animation: ${props => !props.rightButtonIsClicked ? css`${blur} 0.5s ease-in-out;` : ''}
  transform: ${props => !props.rightButtonIsClicked ? 'translateX(-896px)' : ''}
`;

const StyledBrand = styled.span`
  font-weight: bold;
  font-size: 11px;
`;

const StyledDivImg = styled.div`
  width: 80px;
  margin: 0 auto;
  text-align: center;
`;

const StyledImg = styled.img`
  margin: 0 auto;
  width: 55px;
`;

const Styledh3 = styled.h3`
  margin: 0 auto;
  max-width: 100px;
  max-height: 35px;
  overflow: hidden;
  font-size: 11px;
  font-weight: normal;
  float: left;
`;
const Styledp = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #D0011B;
  float: left;
`;

const Styledbutton = styled.button`
  background-color: #EF6C00;
  border-radius: 3px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  font-family: Roboto, serif;
  padding: 5px 33px;
  outline: none;
  border: none;
`;

// function Component() {
//   // Use it like any other component.
//   return <StyledButton> Login </StyledButton>;
// }


const ScrollItem = ({ itemData, index, rightButtonIsClicked, leftButtonIsClicked, brand }) => {
  return (
    <StyledSpan index={index} rightButtonIsClicked={rightButtonIsClicked} leftButtonIsClicked={leftButtonIsClicked}>
      <StyledDivImg>
        <StyledImg src={itemData.photo} />
      </StyledDivImg>
      <Styledh3>
        <StyledBrand>{brand}</StyledBrand>
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