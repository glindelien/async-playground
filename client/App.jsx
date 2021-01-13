import React from 'react';
import axios from 'axios';

import Title from './components/Title.jsx';
import AddLocation from './components/AddLocation.jsx';
import AirQualityView from './components/AirQualityView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      aqi: JSON.parse(localStorage.getItem('aqi')) || []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.clearLocalStorage = this.clearLocalStorage.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  addLocation(event) {
    event.preventDefault();
    // send user submitted zip code to server
    axios.post('/api/getAqiByZip', {
      zipCode: this.state.zipCode
    })
      .then((res) => {
        // add zip code to each AQI object in res array
        res.data.forEach((index) => {
          index.ZipCode = this.state.zipCode;
        });
        // push res data into AQI array & update state
        const newAqi = this.state.aqi;
        newAqi.push(res.data);
        this.setState({
          zipCode: '',
          aqi: newAqi
        });
      })
      .catch((err) => {
        alert('No data could be found for this zip code');
      });
  }

  removeLocation(event) {
    console.log('Clicked!');
  }

  clearLocalStorage() {
    localStorage.clear();
    this.setState({ aqi: [] });
  }

  render() {
    console.log(this.state.aqi);
    localStorage.setItem('aqi', JSON.stringify(this.state.aqi));
    return (
      <div id="main">
        <Title />
        <AddLocation handleInputChange={this.handleInputChange}
                     addLocation={this.addLocation}
                     zipCode={this.state.zipCode} />
        <AirQualityView aqi={this.state.aqi}
                        removeLocation={this.removeLocation}
                        clearLocalStorage={this.clearLocalStorage} />
      </div>
    );
  }
}

export default App;
