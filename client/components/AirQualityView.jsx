import React from 'react';
import AirQualityCard from './AirQualityCard.jsx';

const AirQualityView = ({ AQI }) => {
  return (
    <div id='air-quality-view'>
      {AQI.map((data, index) => {
        return (
          <AirQualityCard data={data}
                          key={index} />
        )
      })}
    </div>
  );
};

export default AirQualityView;
