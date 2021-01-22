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
`;

const StyledDiv = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: (10, 10%);
  overflow-x: hidden;
  `;

const StyledArrows = styled.div`
  float: right;
  display: inline;
`;

const StyledLeftButton = styled.button`
  border-radius: 50%;
  padding: 3px;
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
  padding: 3px;
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
`;

const ScrollBox = ({ scrollData, handleButtonClick, rightButtonIsClicked, leftButtonIsClicked }) => {
  return (
    <StyledDivBox>
      <Styledh1>Pet Lovers Also Bought</Styledh1>
      {rightButtonIsClicked ?
        <StyledWrapper>
          <StyledArrows>
            <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked} disabled>☜</StyledLeftButton>
            <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked}>☞</StyledRightButton>
          </StyledArrows>
          <StyledDiv rightButtonIsClicked={rightButtonIsClicked}>
            {scrollData.map((itemData, index) => {
              return <ScrollItem itemData={itemData} index={index + 1} rightButtonIsClicked={rightButtonIsClicked} leftButtonIsClicked={leftButtonIsClicked}/>;
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
            {scrollData.map((itemData, index) => {
              return <ScrollItem itemData={itemData} index={index + 1} rightButtonIsClicked={rightButtonIsClicked} leftButtonIsClicked={leftButtonIsClicked}/>;
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
