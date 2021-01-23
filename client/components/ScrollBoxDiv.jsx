import React from 'react';
import styled from 'styled-components';
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
    return this.myRef.current.clientWidth;
  }

  render() {
    let width;
    // if(this.myRef.current) {
    //   width = this.myRef.current.scrollWidth; //886
    // }
    // console.log(width)
    return (
      <StyledDiv ref={this.myRef} >
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
          />
        ))}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: (10, 10%);
  padding: 20px 0;
  overflow-x: hidden;
  `;

export default ScrollBoxDiv;
