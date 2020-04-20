import React from 'react';
import CityEntry from './CityEntry.jsx';

const CityList = ({ cities, getTides }) => (
  <div className="cityList">
    {cities.map((city) => (
      <CityEntry city={city} getTides={() => getTides(city)} key={city.ll} />
    ))}
  </div>
);

export default CityList;
