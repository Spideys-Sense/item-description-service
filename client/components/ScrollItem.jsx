import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Stars from './Stars';

const blur = keyframes`
  0% {filter: blur(0)}
  50% {filter: blur(5px)}
  100% {filter: blur(0)}
`;

const StyledSpan = styled.span`
  font-family: Roboto, serif;
  color: #333333;
  font-size: 10px;
  width: 140px;
  border-radius: 5px;
  border: solid 1px #dddddd;
  box-shadow: 0 1px 0 #cccccc;
  grid-column-start: ${props => props.index ? props.index : 'hello'};
  padding: 8px 5px;
  margin: 0 16px 2px 0;
  :hover {
    cursor: pointer;
  }
  transition: transform 0.75s ease-in-out, animation 3s ease-in-out;
  animation: ${props => !props.rightButtonIsClicked ? css`${blur} 0.75s ease-in-out;` : ''}
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
  font-weight: 300;
  float: left;
`;

const Styledp = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #D0011B;
  // margin: 50px 0 10px 0;
  margin-top: 10px;
`;

const Styledbutton = styled.button`
  background-color: #EF6C00;
  border-radius: 3px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  font-family: Roboto, serif;
  outline: none;
  border: none;
  width: 100%;
  padding: 5px 33px;
  :hover {
    cursor: pointer;
  }
`;

const StyledNum = styled.div`
  color: black;
  display: inline;
  float: left;
  margin: 0px;
  margin-top: 6px;
  margin-left: 4px;
`;

const StyledDiscountBox = styled.div`
  background-color: #327435;
  height: 35px;
  border-color: #327435;
  color: white;
  border-radius: 3px;
  margin-top: 45px;
  padding: 5px;
  font-size: 11px;
  font-weight: bold;
`;

const StyledContainer = styled.div`
  margin-top: 20px;
`;

const EmptyDiv = styled.div`
  height: 70px;
  position: relative;
`;

const StyledPriceStarsButtons = styled.div`
`;

const ScrollItem = ({ itemData, index, rightButtonIsClicked, leftButtonIsClicked, brand, starRating, onSale }) => {
  return (
    <StyledSpan index={index} rightButtonIsClicked={rightButtonIsClicked} leftButtonIsClicked={leftButtonIsClicked}>
      <StyledDivImg>
        <StyledImg src={itemData.photo} />
      </StyledDivImg>
      <Styledh3>
        <StyledBrand>{brand}</StyledBrand>
        {itemData.name}
      </ Styledh3>
      <StyledContainer>
        {onSale ?
          <StyledDiscountBox>
            {onSale}
          </StyledDiscountBox>
          :
          <EmptyDiv></EmptyDiv>
        }
        <StyledPriceStarsButtons>
          <Styledp>
            {itemData.price}
          </Styledp>
          <Stars starRating={starRating}/>
          {starRating > 0 ?
            <StyledNum>
              {Math.floor(Math.random() * 200)}
            </StyledNum>
            :
            <StyledNum>
            0
            </StyledNum>
          }
          <Styledbutton>
          Add to Cart
          </Styledbutton>
        </StyledPriceStarsButtons>
      </StyledContainer>
    </StyledSpan>
  );
};


export default ScrollItem;