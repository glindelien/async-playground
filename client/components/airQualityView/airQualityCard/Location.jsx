import React from 'react';

const Location = ({ loc, onMouseEnter, onMouseLeave, removeLocation, zipcode }) => {
  return (
    <div className="location"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={removeLocation}
        zipcode={zipcode} >
      {loc}
    </div>
  );
};

export default Location;
