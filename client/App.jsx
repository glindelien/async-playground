import React from 'react';
import axios from 'axios';

import Title from './components/Title.jsx';
import SubmitZipCode from './components/SubmitZipCode.jsx';
import AirQualityView from './components/AirQualityView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      ozone: null,
      pm25: null,
      pm10: null
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
      const currentOzone = res.data[0].AQI;
      const currentPm25 = res.data[1].AQI;
      const currentPm10 = res.data[2].AQI;
      this.setState({
        zipCode: '',
        ozone: currentOzone,
        pm25: currentPm25,
        pm10: currentPm10
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div id='main'>
        <Title />
        <SubmitZipCode handleInputChange={this.handleInputChange}
                       handleSubmit={this.handleSubmit}
                       zipCode={this.state.zipCode} />
        <AirQualityView ozone={this.state.ozone}
                        pm25={this.state.pm25}
                        pm10={this.state.pm10} />
      </div>
    );
  }
}

export default App;
