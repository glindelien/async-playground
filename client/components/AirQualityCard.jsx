import React from 'react';

import Location from './Location.jsx';
import IndexCard from './IndexCard.jsx';

const AirQualityCard = ({ location, removeLocation }) => {

  let locationJSX = null;
  let airQualityCardJSX = null;

  // Only render these components if user added location(s)
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
    <div className="aqi-card"
         zipcode={location[0].ZipCode}
         onClick={removeLocation}>
      {/* Display Location for AQI Card */}
      {locationJSX}
      {/* Display AQI data for location */}
      <div className="index-cards">
        {airQualityCardJSX}
      </div>
    </div>
  );
};

export default AirQualityCard;
