import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ScrollBoxDiv from './ScrollBoxDiv';

const StyledWrapper = styled.span`
`;

const StyledDivBox = styled.div`
  position: relative;
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
  /* border-color: ${(props) => (props.leftButtonIsClicked ? 'rgb(14, 112, 190);' : 'black')}
  color: ${(props) => (props.leftButtonIsClicked ? '#0E70BE' : 'black')};
  opacity: ${(props) => (props.leftButtonIsClicked ? '' : '0.5')}; */
  ${(props) => (
    (props.leftButtonIsClicked)
      ? `border-color: 'rgb(14, 112, 190)';
  color: '#0E70BE';
  opacity: '';`
      : `border-color: 'black';
  color: 'black';
  opacity: '0.5';`
  )}
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
  border-color: ${(props) => ((props.rightButtonIsClicked === props.leftButtonIsClicked) || (props.rightButtonIsClicked && !props.leftButtonIsClicked) ? 'rgb(14, 112, 190);' : 'black')}
  color: ${(props) => ((props.rightButtonIsClicked === props.leftButtonIsClicked) || (props.rightButtonIsClicked && !props.leftButtonIsClicked) ? '#0E70BE' : 'black')};
  opacity: ${(props) => ((props.rightButtonIsClicked === props.leftButtonIsClicked) || (props.rightButtonIsClicked && !props.leftButtonIsClicked) ? '' : '0.5')};
  :hover {
    transition: background-color ease-in 0.25s, color ease-in 0.25s;
    cursor: ${(props) => ((props.rightButtonIsClicked === props.leftButtonIsClicked) || (props.rightButtonIsClicked && !props.leftButtonIsClicked) ? 'pointer' : '')};
    color: ${(props) => ((props.rightButtonIsClicked === props.leftButtonIsClicked) || (props.rightButtonIsClicked && !props.leftButtonIsClicked) ? 'white' : '')};
    background-color: ${(props) => ((props.rightButtonIsClicked === props.leftButtonIsClicked) || (props.rightButtonIsClicked && !props.leftButtonIsClicked) ? '#0E70BE' : '')};
  }
`;

const Styledh1 = styled.h1`
  display: inline;
  font-family: Roboto, serif;
  font-size: 20px;
  font-weight: 300;
  color: #333333;
  margin-left: 375px;
`;

const ScrollBox = ({
  scrollData, handleButtonClick, rightButtonIsClicked, leftButtonIsClicked, brand, buttonClicked,
}) => (
  <StyledDivBox>
    <Styledh1>Pet Lovers Also Bought</Styledh1>
    {(!rightButtonIsClicked && !buttonClicked) || rightButtonIsClicked
      ? (
        <StyledWrapper>
          <StyledArrows>
            <StyledLeftButton onClick={handleButtonClick} leftButtonIsClicked={leftButtonIsClicked} disabled>{'<'}</StyledLeftButton>
            <StyledRightButton onClick={handleButtonClick} rightButtonIsClicked={rightButtonIsClicked} buttonClicked={buttonClicked} leftButtonIsClicked={leftButtonIsClicked}>{'>'}</StyledRightButton>
          </StyledArrows>
          <ScrollBoxDiv
            scrollData={scrollData}
            brand={brand}
            rightButtonIsClicked={rightButtonIsClicked}
            leftButtonIsClicked={leftButtonIsClicked}
            buttonClicked={buttonClicked}
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
            buttonClicked={buttonClicked}
          />
        </StyledWrapper>
      )}
  </StyledDivBox>
);

ScrollBox.propTypes = {
  brand: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  scrollData: PropTypes.arrayOf.isRequired,
  rightButtonIsClicked: PropTypes.bool.isRequired,
  leftButtonIsClicked: PropTypes.bool.isRequired,
  buttonClicked: PropTypes.func.isRequired,
};

export default ScrollBox;
