/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import SearchBar from './SearchBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrom: 0
    };
    // bindings
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
  }

  changePage(event) {
    event.preventDefault();
    this.setState({
      currentFrom: 1
    });
  }

  render() {
    return (
      <div className="app">
        <h2 className="title"> Adventure Tide!</h2>
        {this.state.currentFrom === 0 ? <SearchBar changePage={this.changePage} /> : null}
        {/* {this.state.currentFrom === 1 ? <Journal /> : null} */}
      </div>
    );
  }
}

export default App;
