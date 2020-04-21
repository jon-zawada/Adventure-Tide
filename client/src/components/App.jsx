/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';
import Journal from './Journal.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrom: 0,
      journalEntries: []
    };
    // bindings
    this.changePage = this.changePage.bind(this);
    this.updateEntry = this.updateEntry.bind(this);
  }

  componentDidMount() {
    this.getJournalEntries();
  }

  changePage(event) {
    event.preventDefault();
    this.setState({
      currentFrom: 1
    });
  }

  getJournalEntries() {
    $.ajax({
      method: 'GET',
      url: '/api/journal',
      success: (res) => {
        this.setState({
          journalEntries: res
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateEntry(entry, id) {
    // event.preventDefault();
    $.ajax({
      method: 'PUT',
      url: 'api/journal',
      data: JSON.stringify({ entry, id }),
      contentType: 'application/json',
      success: () => {
        this.getJournalEntries();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="app">
        <h2 className="title"> Adventure Tide!</h2>
        {this.state.currentFrom === 0 ? <SearchBar changePage={this.changePage} /> : null}
        {this.state.currentFrom === 1 ? <Journal journalEntries={this.state.journalEntries} updateEntry={this.updateEntry} /> : null}
      </div>
    );
  }
}

export default App;
