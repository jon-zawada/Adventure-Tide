/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const CityEntry = ({ city, getTides }) => (
  <div className="city" onClick={getTides}>
    <div>{city.name}</div>
  </div>
);

export default CityEntry;
