import React from 'react';

const AirQualityCard = ({ data }) => {
  let parameter = data.ParameterName;
  data.ParameterName === 'O3' ? parameter = 'Ozone' : parameter;

  return (
    <div className='aqi-card'>
      {parameter}
      <br />
      {data.AQI}
    </div>
  );
};

export default AirQualityCard;
