import React from 'react';

const AirQualityView = ({ ozone, pm25, pm10 }) => {
  return (
    <div id='air-quality-view'>
      <div className='aqi ozone'>Ozone<br />{ozone}</div>
      <div className='aqi PM25'>PM2.5<br />{pm25}</div>
      <div className='aqi PM10'>PM10<br />{pm10}</div>
    </div>
  );
};

export default AirQualityView;
