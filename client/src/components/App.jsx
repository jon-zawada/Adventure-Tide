/* eslint-disable class-methods-use-this */
import React from 'react';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrom: 0
    };
    // bindings
  }

  componentDidMount() {
    this.getTides();
  }


  getTides() {
    $.ajax({
      method: 'GET',
      url: '/tides',
      success: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="app">
        <h2 className="title"> Tide To Go</h2>
        <SearchBar />
      </div>
    );
  }
}

export default App;
