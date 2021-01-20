import React from 'react';
import Description from './Description';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import NutritionalInfo from './NutritionalInfo';
import GuaranteedAnalysis from './GuaranteedAnalysis';
import FeedingInstructions from './FeedingInstructions';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      descriptionData: [],
      sideBarData: [],
      loaded: false,
      descriptionIsClicked: true,
      nutritionalInfoTabClicked: false,
      feedingInstructionsClicked: false,
    };
    this.renderView = this.renderView.bind(this);
    this.tabClicked = this.tabClicked.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    axios.get(`/api/${id}/information`)
      .then(({ data }) => {
        this.setState({
          descriptionData: data[0],
          sideBarData: data[1],
          loaded: true,
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
      descriptionData, sideBarData, loaded,
      descriptionIsClicked, nutritionalInfoTabClicked, feedingInstructionsClicked,
    } = this.state;
    if (!loaded) {
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
