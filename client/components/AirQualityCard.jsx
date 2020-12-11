import React from 'react';

const AirQualityCard = ({ data }) => (
  <div className='aqi'>
    {data.ParameterName}
    <br />
    {data.AQI}
  </div>
);

export default AirQualityCard;
