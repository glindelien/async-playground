import React from 'react';

import Location from './Location.jsx';
import IndexCard from './IndexCard.jsx';

const AirQualityCard = ({ location }) => {

  let locationJSX = null;
  let airQualityCardJSX = null;

  // Only render these components if user has submitted location(s)
  if (location.length > 0) {
    const city = location[0].ReportingArea;
    const state = location[0].StateCode;
    locationJSX = <Location loc={`${city}, ${state}`} />

    airQualityCardJSX = location.map((data, index) => {
      return (
          <IndexCard data={data}
                     key={index} />
      )
    });
  }

  return (
    <div className="aqi-card">
      {locationJSX}
      <div className="index-cards">
        {airQualityCardJSX}
      </div>
    </div>
  );
};

export default AirQualityCard;
