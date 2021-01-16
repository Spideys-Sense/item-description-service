import React from 'react';
const axios = require('axios');
import Description from './Description.jsx';
// import styles from './home-page.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      currentData: {},
      loaded: false
    }
    this.renderView = this.renderView.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/${this.state.id}/information`)
      .then((data) => {
        this.setState({
          currentData: data,
          loaded: true
        })
        return data;
      })
      // .then((dataFromApi) => {
      //   console.log('API Working: ', dataFromApi)
      // })
  }

  renderView() {
    if (!this.state.loaded) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          <Description
          description={ this.state.currentData.data.description }
          itemDataTable={ this.state.currentData.data.itemDataTable }
          />
          {/* <h1>{ this.state.currentData.data.descriptionText }</h1>
          <h1>{ this.state.currentData.data.keyBenefitsText }</h1>
          <h1>{ this.state.currentData.data.videoUrl }</h1> */}
        </div>
      )
      // id, itemDataTable_id, descriptionText, keyBenefitsText, videoUrl, createdAt, updatedAt}
    }
  }

  render() {
    return (
      <main>
        {/* <div className={styles.title}>Hello</div> */}
        { this.renderView() }
      </main>
    )
  }
}

export default App;