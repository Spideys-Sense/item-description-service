import React from 'react';
import PropTypes from 'prop-types';
import ScrollItem from './ScrollItem';
import styled from 'styled-components';

// const slide = keyframes`
//   0%   {transform: translateX(0);}
//   100% {transform: translateX(-100%);}
// `;

const StyledWrapper = styled.span`
`;

const StyledDivBox = styled.div`
  padding: 10px;
  border-top: 2px solid rgb(224, 224, 224);
  background-color: rgb(242, 242, 242);
  `;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: (10, 10%);
  padding: 20px 0;
  overflow-x: hidden;
  `;

const StyledArrows = styled.div`
  float: right;
  display: inline;
`;

const StyledLeftButton = styled.button`
  border-radius: 50%;
  padding-top: 4px;
  padding-left: 7px;
  border-style: solid;
  background: transparent;
  border-color: ${props => props.leftButtonIsClicked ? 'rgb(14, 112, 190);' : 'black'}
  color: ${props => props.leftButtonIsClicked ? '#0E70BE' : 'black'};
  opacity: ${props => props.leftButtonIsClicked ? '' : '0.5'};
  :hover {
    cursor: ${props => props.leftButtonIsClicked ? 'pointer' : ''};
    color: ${props => props.leftButtonIsClicked ? 'white' : ''};
    background-color: ${props => props.leftButtonIsClicked ? '#0E70BE' : ''};
  }
`;

const StyledRightButton = styled.button`
  border-radius: 50%;
  padding-top: 4px;
  padding-left: 7px;
  border-style: solid;
  background: transparent;
  border-color: ${props => props.rightButtonIsClicked ? 'rgb(14, 112, 190);' : 'black'}
  color: ${props => props.rightButtonIsClicked ? '#0E70BE' : 'black'};
  opacity: ${props => props.rightButtonIsClicked ? '' : '0.5'};
  :hover {
    cursor: ${props => props.rightButtonIsClicked ? 'pointer' : ''};
    color: ${props => props.rightButtonIsClicked ? 'white' : ''};
    background-color: ${props => props.rightButtonIsClicked ? '#0E70BE' : ''};
  }
`;

const Styledh1 = styled.h1`
  display: inline;
  font-family: Roboto, serif;
  font-size: 25px;
  font-weight: bold;
  color: #333333;
`;

const ScrollBox = ({ scrollData, handleButtonClick, rightButtonIsClicked, leftButtonIsClicked, brand }) => {
  return (
    <StyledDivBox>
      <Styledh1>Pet Lovers Also Bought</Styledh1>
      {rightButtonIsClicked ?
        <StyledWrapper>
          <StyledArrows>
            <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked} disabled>{'<'}</StyledLeftButton>
            <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked}>{'>'}</StyledRightButton>
          </StyledArrows>
          <StyledDiv rightButtonIsClicked={rightButtonIsClicked}>
            {scrollData.map((itemData, index) => {
              return <ScrollItem itemData={itemData} index={index + 1} rightButtonIsClicked={rightButtonIsClicked} leftButtonIsClicked={leftButtonIsClicked} brand={brand} starRating={itemData.starRating} onSale={itemData.onSale}/>;
            })}
          </StyledDiv>
        </StyledWrapper>
        :
        <StyledWrapper>
          <StyledArrows>
            <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked}>{'<'}</StyledLeftButton>
            <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked} disabled>{'>'}</StyledRightButton>
          </StyledArrows>
          <StyledDiv rightButtonIsClicked={rightButtonIsClicked}>
            {scrollData.map((itemData, index) => {
              return <ScrollItem itemData={itemData} index={index + 1} rightButtonIsClicked={rightButtonIsClicked} leftButtonIsClicked={leftButtonIsClicked} brand={brand} starRating={itemData.starRating} onSale={itemData.onSale}/>;
            })}
          </StyledDiv>
        </StyledWrapper>
      }
    </StyledDivBox>
  );
};

// ScrollBox.propTypes = {
//   brand: PropTypes.string.isRequired,
// };

export default ScrollBox;
