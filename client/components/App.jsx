import React from 'react';
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      currentData: null,
      loaded: false
    }
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
      .then((dataFromApi) => {
        console.log('API Working: ', dataFromApi)
      })
  }
  render() {
    return <h1>Inside react</h1>
    // // console.log(this.state.currentData.data)
    // this.state.loaded ?
    // return (
    //   <h1>returned</h1>
    // )
    // :
    // return (
    //   <h1>Not returned</h1>
    // )
  }
}

export default App;