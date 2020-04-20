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
      </div>
    );
  }
}

export default Chart;
