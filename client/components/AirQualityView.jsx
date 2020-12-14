import React from 'react';
import axios from 'axios';

import SubmitZipCode from './SubmitZipCode.jsx';
import Location from './Location.jsx';
import AirQualityCard from './AirQualityCard.jsx';

class AirQualityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      location: '',
      AQI: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/getAqiByZip', {
      zipCode: this.state.zipCode
    })
      .then((res) => {
        const city = res.data[0].ReportingArea;
        const state = res.data[0].StateCode;
        this.setState({
          zipCode: '',
          location: `${city}, ${state}`,
          AQI: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let locationJSX = null;
    let airQualityCardJSX = null;

    // Only render these components if user submits zip code
    if (this.state.location !== '') {
      locationJSX = <Location location={this.state.location}/>;
      airQualityCardJSX = this.state.AQI.map((data, index) => {
        return (
          <AirQualityCard data={data}
                          key={index} />
        )});
    }

    return (
      <div>
        <SubmitZipCode handleInputChange={this.handleInputChange}
                       handleSubmit={this.handleSubmit}
                       zipCode={this.state.zipCode} />
        {locationJSX}
        <div id='aqi-cards'>
          {airQualityCardJSX}
        </div>
      </div>
    );
  }
};

export default AirQualityView;
