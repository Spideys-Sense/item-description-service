import React from 'react';
import axios from 'axios';
import Description from './Description';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import NutritionalInfo from './NutritionalInfo';
import GuaranteedAnalysis from './GuaranteedAnalysis';
import FeedingInstructions from './FeedingInstructions';
import ScrollBox from './ScrollBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      descriptionData: [],
      sideBarData: [],
      scrollData: [],
      infoLoaded: false,
      scrollLoaded: false,
      descriptionIsClicked: true,
      nutritionalInfoTabClicked: false,
      feedingInstructionsClicked: false,
      rightButtonIsClicked: true,
      leftButtonIsClicked: false,
    };
    this.renderView = this.renderView.bind(this);
    this.tabClicked = this.tabClicked.bind(this);
    // this.handleButtonRightClick = this.handleButtonRightClick.bind(this);
    // this.handleButtonLeftClick = this.handleButtonLeftClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.setState({
      leftButtonIsClicked: !this.state.leftButtonIsClicked,
      rightButtonIsClicked: !this.state.rightButtonIsClicked,
    });
  }

  // handleButtonLeftClick(e) {
  //   e.preventDefault();
  //   console.log('LEFT CLICKED!');
  //   this.setState({
  //     leftButtonIsClicked: true,
  //     rightButtonIsClicked: false,
  //   });
  // }

  componentDidMount() {
    const { id } = this.state;
    axios.get(`/api/${id}/information`)
      .then(({ data }) => {
        this.setState({
          descriptionData: data[0],
          sideBarData: data[1],
          infoLoaded: true,
        });
      });

    axios.get('/api/scrollboxes')
      .then(({ data }) => {
        this.setState({
          scrollLoaded: true,
          scrollData: data,
        });
      });
  }

  tabClicked(e) {
    e.preventDefault();
    if (e.target.className === 'DescriptionTabText') {
      this.setState({
        descriptionIsClicked: true,
        nutritionalInfoTabClicked: false,
        feedingInstructionsClicked: false,
      });
    } else if (e.target.className === 'NutritionalInfoTabText') {
      this.setState({
        descriptionIsClicked: false,
        nutritionalInfoTabClicked: true,
        feedingInstructionsClicked: false,
      });
    } else if (e.target.className === 'FeedingInstructionsTabText') {
      this.setState({
        descriptionIsClicked: false,
        nutritionalInfoTabClicked: false,
        feedingInstructionsClicked: true,
      });
    }
  }

  renderView() {
    const {
      descriptionData, sideBarData, infoLoaded, scrollLoaded, scrollData, leftButtonIsClicked, rightButtonIsClicked,
      descriptionIsClicked, nutritionalInfoTabClicked, feedingInstructionsClicked,
    } = this.state;
    if (!infoLoaded && !scrollLoaded) {
      return <h1>Loading...</h1>;
    }
    if (descriptionIsClicked) {
      return (
        <div>
          <div className="descriptionTabClickedTrue">
            <Header tabClicked={this.tabClicked} />
            <Description
              description={descriptionData}
            />
            <SideBar
              itemDataTable={sideBarData}
              videoUrl={descriptionData[0].videoUrl}
              brand={sideBarData[0].brand}
            />
            <Footer brand={sideBarData[0].brand} />
          </div>
          <div className="nutritionalInfoTabClickedFalse" />
          <div className="feedingInstructionsClickedFalse" />
          <ScrollBox
            scrollData={scrollData}
            handleButtonClick={this.handleButtonClick}
            leftButtonIsClicked={leftButtonIsClicked}
            rightButtonIsClicked={rightButtonIsClicked}
            leftButtonIsClicked={leftButtonIsClicked}
            brand={sideBarData[0].brand}
          />
        </div>
      );
    }
    if (nutritionalInfoTabClicked) {
      return (
        <div>
          <div className="descriptionTabClickedFalse" />
          <div className="nutritionalInfoTabClickedTrue">
            <Header tabClicked={this.tabClicked} />
            <NutritionalInfo
              description={descriptionData}
            />
            <GuaranteedAnalysis
              guaranteedAnalysis={sideBarData}
            />
          </div>
          <div className="feedingInstructionsClickedFalse" />
          <ScrollBox
            scrollData={scrollData}
            handleButtonClick={this.handleButtonClick}
            leftButtonIsClicked={leftButtonIsClicked}
            rightButtonIsClicked={rightButtonIsClicked}
            leftButtonIsClicked={leftButtonIsClicked}
            brand={sideBarData[0].brand}
          />
        </div>
      );
    }
    if (feedingInstructionsClicked) {
      return (
        <div>
          <div className="descriptionTabClickedFalse" />
          <div className="nutritionalInfoTabClickedFalse" />
          <div className="feedingInstructionsClickedTrue">
            <Header tabClicked={this.tabClicked} />
            <FeedingInstructions
              feedingInstructions={sideBarData}
              transitionInstructions={descriptionData}
            />
          </div>
          <ScrollBox
            scrollData={scrollData}
            handleButtonClick={this.handleButtonClick}
            leftButtonIsClicked={leftButtonIsClicked}
            rightButtonIsClicked={rightButtonIsClicked}
            leftButtonIsClicked={leftButtonIsClicked}
            brand={sideBarData[0].brand}
          />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <main>
        { this.renderView() }
      </main>
    );
  }
}

export default App;
