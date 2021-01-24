import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import ScrollItem from './ScrollItem';

class ScrollBoxDiv extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.widthFunc = this.widthFunc.bind(this);
  }

  widthFunc() {
    return this.myRef.current.scrollWidth - this.myRef.current.clientWidth;
  }

  render() {
    const {
      rightButtonIsClicked, leftButtonIsClicked, scrollData, brand, buttonClicked,
    } = this.props;
    return (
      <StyledDiv
        ref={this.myRef}
        rightButtonIsClicked={rightButtonIsClicked}
        leftButtonIsClicked={leftButtonIsClicked}
      >
        {scrollData.map((itemData, index) => (
          <ScrollItem
            itemData={itemData}
            index={index + 1}
            rightButtonIsClicked={rightButtonIsClicked}
            leftButtonIsClicked={leftButtonIsClicked}
            brand={brand}
            starRating={itemData.starRating}
            onSale={itemData.onSale}
            width={this.widthFunc()}
            buttonClicked={buttonClicked}
          />
        ))}
      </StyledDiv>
    );
  }
}

const blur = keyframes`
  0% {filter: blur(0)}
  25% {filter: blur(4px)}
  50% {filter: blur(4px)}
  75% {filter: blur(4px)}
  90% {filter: blur(4px)}
  100% {filter: blur(0)}
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: (10, 10%);
  padding: 20px 0;
  overflow-x: hidden;
  max-width: 1000px;
  margin: auto;
  transition: animation 0.6s ease-in-out;
  animation: ${(props) => (props.rightButtonIsClicked ? css`${blur} 0.6s ease-in-out;` : '')};
  `;

ScrollBoxDiv.propTypes = {
  rightButtonIsClicked: PropTypes.bool.isRequired,
  leftButtonIsClicked: PropTypes.bool.isRequired,
  scrollData: PropTypes.arrayOf.isRequired,
  brand: PropTypes.string.isRequired,
  buttonClicked: PropTypes.func.isRequired,
};

export default ScrollBoxDiv;
