/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import $ from 'jquery';
import CityList from './CityList.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      cities: []
    };
    // bindings
    this.changeHandler = this.changeHandler.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getTides = this.getTides.bind(this);
  }

  // latitude: '20.00503',
  // longitude: '-155.824615'

  getCoordinates(event) {
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/api/coordinates',
      data: this.state,
      success: (res) => {
        console.log(res.Results);
        this.setState({
          cities: res.Results
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getTides(city) {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/api/tides',
      data: city,
      success: (res) => {
        console.log(res);
        // this.setState({
        //   cities: res.Results
        // });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  changeHandler(event) {
    let { name } = event.target;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div id="searchBar">
          <form>
            <div>
              <label>
                <div>
                  Where we exploring today!
                </div>
                City
                <input type="text" name="location" value={this.state.name} onChange={this.changeHandler} />
              </label>
            </div>
            <button onClick={this.getCoordinates} type="button">Lets find those tides</button>
          </form>
        </div>
        <div>
          <CityList cities={this.state.cities} getTides={this.getTides} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
