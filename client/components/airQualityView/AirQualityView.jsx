import React from 'react';

import AirQualityCard from './airQualityCard/AirQualityCard.jsx';

const AirQualityView = ({ aqi, removeLocation, clearLocalStorage }) => {
  let removeAllLocationsButton = null;
  if (aqi.length) {
    removeAllLocationsButton = (
      <div onClick={clearLocalStorage}
           onKeyDown={clearLocalStorage} >
        <span tabIndex="0" role="button" id="clear-storage">Remove All Locations</span>
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
      {removeAllLocationsButton}
    </div>
  );
};

export default AirQualityView;
