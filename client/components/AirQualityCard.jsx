import React from 'react';

import Location from './Location.jsx';
import IndexCard from './IndexCard.jsx';

const AirQualityCard = ({location, aqi, zipCode }) => {

    let locationJSX = null;
    let indexCardJSX = null;

    // Only render these components if user submits zip code
    if (location !== '') {
      locationJSX = <Location location={location}/>;
      indexCardJSX = aqi.map((data, index) => {
        return (
          <IndexCard data={data}
                          key={index} />
        )});
    }

    return (
      <div>
        {locationJSX}
        <div id='aqi-cards'>
          {indexCardJSX}
        </div>
      </div>
    );
};

export default AirQualityCard;
