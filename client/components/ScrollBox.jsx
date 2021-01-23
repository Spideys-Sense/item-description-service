import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import ScrollItem from './ScrollItem';
import ScrollBoxDiv from './ScrollBoxDiv';

// const slide = keyframes`
//   0%   {transform: translateX(0);}
//   100% {transform: translateX(-100%);}
// `;

const StyledWrapper = styled.span`
`;

const StyledDivBox = styled.div`
  padding: 28px 10px;
  border-top: 2px solid rgb(224, 224, 224);
  background-color: rgb(242, 242, 242);
  margin: auto;
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
  transition: background-color ease-out 0.25s, color ease-out 0.25s;
  border-color: ${(props) => (props.leftButtonIsClicked ? 'rgb(14, 112, 190);' : 'black')}
  color: ${(props) => (props.leftButtonIsClicked ? '#0E70BE' : 'black')};
  opacity: ${(props) => (props.leftButtonIsClicked ? '' : '0.5')};
  :hover {
    transition: background-color ease-in 0.25s, color ease-in 0.25s;
    cursor: ${(props) => (props.leftButtonIsClicked ? 'pointer' : '')};
    color: ${(props) => (props.leftButtonIsClicked ? 'white' : '')};
    background-color: ${(props) => (props.leftButtonIsClicked ? '#0E70BE' : '')};
  }
`;

const StyledRightButton = styled.button`
  border-radius: 50%;
  padding-top: 4px;
  padding-left: 7px;
  border-style: solid;
  background: transparent;
  transition: background-color ease-out 0.25s, color ease-out 0.25s;
  border-color: ${(props) => (props.rightButtonIsClicked ? 'rgb(14, 112, 190);' : 'black')}
  color: ${(props) => (props.rightButtonIsClicked ? '#0E70BE' : 'black')};
  opacity: ${(props) => (props.rightButtonIsClicked ? '' : '0.5')};
  :hover {
    transition: background-color ease-in 0.25s, color ease-in 0.25s;
    cursor: ${(props) => (props.rightButtonIsClicked ? 'pointer' : '')};
    color: ${(props) => (props.rightButtonIsClicked ? 'white' : '')};
    background-color: ${(props) => (props.rightButtonIsClicked ? '#0E70BE' : '')};
  }
`;

const Styledh1 = styled.h1`
  display: inline;
  font-family: Roboto, serif;
  font-size: 20px;
  font-weight: 300;
  color: #333333;
`;

//itemCount

const ScrollBox = ({
  scrollData, handleButtonClick, rightButtonIsClicked, leftButtonIsClicked, brand,
}) => {
  return (
    <StyledDivBox>
      <Styledh1>Pet Lovers Also Bought</Styledh1>
      {rightButtonIsClicked
        ? (
          <StyledWrapper>
            <StyledArrows>
              <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked} disabled>{'<'}</StyledLeftButton>
              <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked}>{'>'}</StyledRightButton>
            </StyledArrows>
            <ScrollBoxDiv
              scrollData={scrollData}
              brand={brand}
              rightButtonIsClicked={rightButtonIsClicked}
              leftButtonIsClicked={leftButtonIsClicked}
            />
          </StyledWrapper>
        )
        : (
          <StyledWrapper>
            <StyledArrows>
              <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked}>{'<'}</StyledLeftButton>
              <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked} disabled>{'>'}</StyledRightButton>
            </StyledArrows>
            <ScrollBoxDiv
              scrollData={scrollData}
              brand={brand}
              rightButtonIsClicked={rightButtonIsClicked}
              leftButtonIsClicked={leftButtonIsClicked}
            />
          </StyledWrapper>
        )}
    </StyledDivBox>
  );
};

ScrollBox.propTypes = {
  brand: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  scrollData: PropTypes.arrayOf.isRequired,
  rightButtonIsClicked: PropTypes.bool.isRequired,
  leftButtonIsClicked: PropTypes.bool.isRequired,
};

export default ScrollBox;
