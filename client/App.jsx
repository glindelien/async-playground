import React from 'react';
import axios from 'axios';

import Title from './components/title/Title.jsx';
import AddLocation from './components/addLocation/AddLocation.jsx';
import AirQualityView from './components/airQualityView/AirQualityView.jsx';

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
    axios.post('/api/zipCode', {
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

  removeLocation(e) {
    // Extract the zip code from the clicked AQI card
    const zip = e.currentTarget.getAttribute('zipcode');
    // Filter out the location from AQI data stored in state
    const newAqi = this.state.aqi.filter((loc) => {
      return loc[0].ZipCode !== zip;
    });
    // Set state with new (filtered) AQI data
    this.setState({ aqi: newAqi });
  }

  clearLocalStorage(e) {
    // Check if event type was a mouse click or enter keypress
    if (e.type === 'click' || e.key === 'Enter') {
      // Clear local storage
      localStorage.clear();
      // Set AQI data in state to empty array
      this.setState({ aqi: [] });
    }
  }

  render() {
    localStorage.setItem('aqi', JSON.stringify(this.state.aqi));
    return (
      <div id="main">

        <header><Title /></header>

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
