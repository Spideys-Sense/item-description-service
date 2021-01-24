import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import ScrollItem from './ScrollItem';

class ScrollBoxDiv extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.widthFunc = this.widthFunc.bind(this);
  }

  componentDidMount() {
    // console.log(this.myRef.current.clientWidth);
  }

  widthFunc() {
    // console.log(this.myRef.current.scrollWidth - this.myRef.current.clientWidth)
    // return this.myRef.current.clientWidth;
    return this.myRef.current.scrollWidth - this.myRef.current.clientWidth;
  }

  render() {
    return (
      <StyledDiv ref={this.myRef}
        rightButtonIsClicked={this.props.rightButtonIsClicked}
        leftButtonIsClicked={this.props.leftButtonIsClicked}
        >
        {/* {this.widthFunc()} */}
        {this.props.scrollData.map((itemData, index) => (
          <ScrollItem
            itemData={itemData}
            index={index + 1}
            rightButtonIsClicked={this.props.rightButtonIsClicked}
            leftButtonIsClicked={this.props.leftButtonIsClicked}
            brand={this.props.brand}
            starRating={itemData.starRating}
            onSale={itemData.onSale}
            width={this.widthFunc()}
            buttonClicked={this.props.buttonClicked}
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

export default ScrollBoxDiv;
