import React from 'react';
import $ from 'jquery';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      latitude: '',
      longitude: ''
    };
    // bindings
    this.changeHandler = this.changeHandler.bind(this);
    this.getTides = this.getTides.bind(this);
  }

  // latitude: '20.00503',
  // longitude: '-155.824615'

  getTides(event) {
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: '/tides',
      data: this.state,
      success: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  changeHandler(event) {
    let {name} = event.target;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>
              <div>
                Input longitutde and latitude of beach were exploring today!
              </div>
              Latitude <input type="text" name="latitude" value={this.state.name} onChange={this.changeHandler}/> 
              Longitude <input type="text" name="longitude" value={this.state.name} onChange={this.changeHandler}/> 
            </label>
          </div>
          <button>I dont know the coordinates</button>
          <button onClick={this.getTides}>Lets find the tides</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
