import React from 'react';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

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
          itemTableData: data[1],
          loaded: true,
        });
      });
  }

  renderView() {
    if (!this.state.loaded) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="descriptionTab">
        <Header />
        <Description
          description={ this.state.descriptionData }
          itemDataTable={ this.state.itemTableData }
        />
        <div className="footers">
          <Footer />
        </div>
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
