import React from 'react';

import IndexCard from './IndexCard.jsx';

class AirQualityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({ showButton: true });
  }

  onMouseLeave() {
    this.setState({ showButton: false });
  }

  render() {
    const { location, removeLocation } = this.props;
    let locationJSX = null;
    let airQualityCardJSX = null;
    let loc = <span className="delete">X</span>;

    // Only render these components if user added location(s)
    if (location.length > 0) {
      if (!this.state.showButton) {
        loc = `${location[0].ReportingArea}, ${location[0].StateCode}`;
      }
      locationJSX = <div className="location"
                         onMouseEnter={this.onMouseEnter}
                         onMouseLeave={this.onMouseLeave}
                         onClick={removeLocation}
                         zipcode={location[0].ZipCode}>
                      {loc}
                    </div>

      airQualityCardJSX = location.map((data, index) => {
        return (
          <IndexCard data={data}
                     key={index} />
        )
      });

      return (
        <div className="aqi-card">
          {/* Display Location for AQI Card */}
          {locationJSX}
          {/* Display AQI data for location */}
          <div className="index-cards">
            {airQualityCardJSX}
          </div>
        </div>
      );
    }
  }
}

export default AirQualityCard;
