import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
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
              <input type="text" name="city" value={this.state.name} />
            </label>
          </div>
          <button>I dont know the coordinates</button>
          <button>Lets find the tides</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;