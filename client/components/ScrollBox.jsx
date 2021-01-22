import React from 'react';
import PropTypes from 'prop-types';
import ScrollItem from './ScrollItem';
import styled, { keyframes } from 'styled-components';

const example = keyframes`
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
`;

const StyledWrapper = styled.span`
// animation-name: ${example};
// animation-duration: 8s;
// animation-iteration-count: infinite;
`;

const StyledDiv = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  overflow-x: scroll;
  animation-name: ${props => !props.rightButtonIsClicked ? example : ''};
  `;

const StyledArrows = styled.div`
  float: right;
  display: inline;
`;

const StyledLeftButton = styled.button`
  border-radius: 50%;
  padding: 3px;
  color: ${props => props.leftButtonIsClicked ? '#0E70BE' : 'black'}
`;

const StyledRightButton = styled.button`
  border-radius: 50%;
  padding: 3px;
  color: ${props => props.rightButtonIsClicked ? '#0E70BE' : 'black'}
`;

const Styledh1 = styled.h1`
  display: inline;
`;



const ScrollBox = ({ firstScrollPart, secondScrollPart, handleButtonClick, rightButtonIsClicked, leftButtonIsClicked}) => {
  return (
    <div>
      <Styledh1>Pet Lovers Also Bought</Styledh1>
      {rightButtonIsClicked ?
        <StyledWrapper>
          <StyledArrows>
            <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked} disabled>☜</StyledLeftButton>
            <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked}>☞</StyledRightButton>
          </StyledArrows>
          <StyledDiv rightButtonIsClicked={rightButtonIsClicked}>
            {firstScrollPart.map((itemData, index) => {
              return <ScrollItem itemData={itemData} index={index + 1} />;
            })}
          </StyledDiv>
        </StyledWrapper>
        :
        <StyledWrapper>
          <StyledArrows>
            <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked}>☜</StyledLeftButton>
            <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked} disabled>☞</StyledRightButton>
          </StyledArrows>
          <StyledDiv rightButtonIsClicked={rightButtonIsClicked}>
            {secondScrollPart.map((itemData, index) => {
              return <ScrollItem itemData={itemData} index={index + 1} />;
            })}
          </StyledDiv>
        </StyledWrapper>
      }
    </div>
  );
};

// ScrollBox.propTypes = {
//   brand: PropTypes.string.isRequired,
// };

export default ScrollBox;
