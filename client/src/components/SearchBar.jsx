/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import $ from 'jquery';
import CityList from './CityList.jsx';
import Chart from './Chart.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      cities: [],
      chartData: ''
    };
    // bindings
    this.changeHandler = this.changeHandler.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getTides = this.getTides.bind(this);
  }

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
        console.log(res.heights);
        let { heights } = res;
        let numberData = [];
        for (let i = 0; i < 6; i++) {
          numberData.push(heights[i].height);
        }
        console.log(numberData);
        this.setState({
          chartData: {
            labels: ['now', '1 hour', '2 hour', '3 hour', '4 hour', '5 hour'],
            datasets: [
              {
                label: 'Tide Heights',
                data: numberData,
                backgroundColor: [
                  'rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 0.6)'
                ]
              }
            ]
          }
        });
        this.setState({
          cities: []
        });
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
            <button id="tideBtn" onClick={this.getCoordinates} type="button">Lets find those tides</button>
            <button id="JournalBtn" type="button" onClick={this.props.changePage}>Go To Adventure Journal</button>
          </form>
        </div>
        <div>
          <CityList cities={this.state.cities} getTides={this.getTides} />
        </div>
        <div>
          {this.state.chartData !== '' ? <Chart chartData={this.state.chartData} /> : null}
        </div>
      </div>
    );
  }
}

export default SearchBar;
