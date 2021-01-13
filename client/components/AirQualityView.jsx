import React from 'react';

import AirQualityCard from './AirQualityCard.jsx';

const AirQualityView = ({ aqi, removeLocation, clearLocalStorage }) => {
  let removeLocations = null;
  if (aqi.length) {
    removeLocations = (
      <div onClick={clearLocalStorage}>
        <span id="clear-storage">Remove All Locations</span>
      </div>);
  }
  return (
    <div className="air-quality-view">
      <div className="aqi-cards">
        {aqi.map((location, index) => {
          return (
            <AirQualityCard location={location}
                            removeLocation={removeLocation}
                            key={index} />
          )
        })}
      </div>
      {removeLocations}
    </div>
  );
};

export default AirQualityView;
