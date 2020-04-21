/* eslint-disable react/no-unused-state */
import React from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.props.chartData}
          options={{}}
        />
        <div className="chartBtn">
          <button type="button" className="buttonCht">Pick a new location</button>
          <button type="button" className="buttonCht" onClick={() => { this.props.postDefault(this.props.location, this.props.today); }}>Im going adventuring</button>
        </div>
      </div>
    );
  }
}

export default Chart;
