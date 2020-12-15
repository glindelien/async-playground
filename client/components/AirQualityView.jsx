import React from 'react';

import AirQualityCard from './AirQualityCard.jsx';

const AirQualityView = ({ aqi }) => (
  <div className="aqi-cards">
    {aqi.map((location, index) => {
      return (
        <AirQualityCard location={location} key={index} />
      )
    })}
  </div>
);

export default AirQualityView;
