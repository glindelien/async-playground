import React from 'react';
import axios from 'axios';

import SubmitZipCode from './SubmitZipCode.jsx';
import AirQualityCard from './AirQualityCard.jsx';

class AirQualityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      AQI: [
        { ParameterName: 'Ozone' },
        { ParameterName: 'PM2.5' },
        { ParameterName: 'PM10' }
      ]
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
        this.setState({
          zipCode: '',
          AQI: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <SubmitZipCode handleInputChange={this.handleInputChange}
                       handleSubmit={this.handleSubmit}
                       zipCode={this.state.zipCode} />
        <div id='air-quality-view' >
          {this.state.AQI.map((data, index) => {
              return (
                <AirQualityCard data={data}
                                key={index} />
              )})}
        </div>
      </div>
    );
  }
};

export default AirQualityView;
