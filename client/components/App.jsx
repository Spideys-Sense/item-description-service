import React from 'react';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SideBar from './SideBar.jsx';

{/* <ItemDataTable itemDataTable={ itemDataTable } videoUrl={ description[0].videoUrl } /> */}


const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      descriptionData: [],
      itemTableData: [],
      loaded: false,
    };
    this.renderView = this.renderView.bind(this);
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

  // tabClicked(e) {

  // }

  renderView() {
    if (!this.state.loaded) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="descriptionTab">
        <Header />
        <Description
          description={ this.state.descriptionData }
        />
        <SideBar
          itemDataTable={ this.state.sideBarData }
          videoUrl={ this.state.descriptionData[0].videoUrl }
          brand={ this.state.sideBarData[0].brand }
        />
        <Footer brand={ this.state.sideBarData[0].brand } />
      </div>
    );
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
