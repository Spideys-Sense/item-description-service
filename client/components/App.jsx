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
    axios.get(`/api/${this.state.id}/information`)
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
      })
    } else if (e.target.className === 'NutritionalInfoTabText') {
      this.setState({
        descriptionIsClicked: false,
        nutritionalInfoTabClicked: true,
        feedingInstructionsClicked: false,
      })
    } else if (e.target.className === 'FeedingInstructionsTabText') {
      this.setState({
        descriptionIsClicked: false,
        nutritionalInfoTabClicked: false,
        feedingInstructionsClicked: true,
      })
    }
  }

  renderView() {
    const { descriptionData } = this.state;
    if (!this.state.loaded) {
      return <h1>Loading...</h1>;
    }
    if (this.state.descriptionIsClicked) {
      return (
        <div>
          <div className="descriptionTabClickedTrue">
            <Header tabClicked={ this.tabClicked }/>
            <Description
              description={descriptionData}
            />
            <SideBar
              itemDataTable={ this.state.sideBarData }
              videoUrl={ this.state.descriptionData[0].videoUrl }
              brand={ this.state.sideBarData[0].brand }
            />
            <Footer brand={ this.state.sideBarData[0].brand } />
          </div>
          <div className="nutritionalInfoTabClickedFalse"></div>
          <div className="feedingInstructionsClickedFalse"></div>
        </div>
      );
    }
    if (this.state.nutritionalInfoTabClicked) {
      return (
        <div>
          <div className="descriptionTabClickedFalse"></div>
          <div className="nutritionalInfoTabClickedTrue">
            <Header tabClicked={ this.tabClicked } />
            <NutritionalInfo
              description={ this.state.descriptionData }
            />
            <GuaranteedAnalysis
              guaranteedAnalysis={ this.state.sideBarData }
            />
          </div>
          <div className="feedingInstructionsClickedFalse"></div>
        </div>
      );
    }
    if (this.state.feedingInstructionsClicked) {
      return (
        <div>
          <div className="descriptionTabClickedFalse"></div>
          <div className="nutritionalInfoTabClickedFalse"></div>
          <div className="feedingInstructionsClickedTrue">
            <Header tabClicked={ this.tabClicked } />
            <FeedingInstructions
              feedingInstructions={ this.state.sideBarData }
              transitionInstructions={ this.state.descriptionData }
            />
          </div>
        </div>
      );
    }
    // } else if (this.state.nutritionalInfoTabClicked) {
    //   return (
    //     <div className="nutritionalInfoTab">
    //       <h1>Inside Nutritional Info Tab</h1>
    //     </div>
    //   )
    // } else if (this.state.feedingInstructionsClicked) {
    //   return (
    //     <div className="feedingInstructionsTab">
    //       <h1>Inside Feeding Instructions Tab</h1>
    //     </div>
    //   )
    // }
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
