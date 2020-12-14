import React from 'react';
import axios from 'axios';

import Title from './components/Title.jsx';
import AddLocation from './components/AddLocation.jsx';
import AirQualityCard from './components/AirQualityCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      location: '',
      aqi: []
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
          aqi: res.data
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
        <AddLocation handleInputChange={this.handleInputChange}
                     handleSubmit={this.handleSubmit}
                     zipCode={this.state.zipCode} />
        <AirQualityCard location={this.state.location}
                        aqi={this.state.aqi}
                        zipCode={this.state.zipCode} />
      </div>
    );
  }
}

export default App;
