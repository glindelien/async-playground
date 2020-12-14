import React from 'react';

import Location from './Location.jsx';
import AirQualityCard from './AirQualityCard.jsx';

const AirQualityView = ({location, aqi, zipCode }) => {

    let locationJSX = null;
    let airQualityCardJSX = null;

    // Only render these components if user submits zip code
    if (location !== '') {
      locationJSX = <Location location={location}/>;
      airQualityCardJSX = aqi.map((data, index) => {
        return (
          <AirQualityCard data={data}
                          key={index} />
        )});
    }

    return (
      <div>
        {locationJSX}
        <div id='aqi-cards'>
          {airQualityCardJSX}
        </div>
      </div>
    );
};

export default AirQualityView;
