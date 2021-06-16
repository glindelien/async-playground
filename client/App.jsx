import React from 'react';
import axios from 'axios';

import Title from './components/title/Title.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import AddLocation from './components/addLocation/AddLocation.jsx';
import AirQualityView from './components/airQualityView/AirQualityView.jsx';
import About from './components/about/About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      aqi: JSON.parse(localStorage.getItem('aqi')) || [],
      currentView: 'about'
    };

    this.switchView = this.switchView.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addLocation = this.addLocation.bind(this);
    this.clearLocalStorage = this.clearLocalStorage.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
  }

  // Allows users to switch view after clicking on NavBar elements
  switchView(e) {
    const newView = e.target.innerHTML.toLowerCase();
    this.setState({ currentView: newView });
  }

  // Tracks zip code input
  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  // Adds location & fetches AQI data for it
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

  // Removes specific location from storage
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

  // Removes all locations from storage
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
    // Save current AQI data to localStorage
    localStorage.setItem('aqi', JSON.stringify(this.state.aqi));

    return (
      <div id="main">

        <header><Title /></header>

        <NavBar switchView={this.switchView} />

        {/* Render if AQI view is selected */}
        {this.state.currentView === 'home' ?
          <>
            <AddLocation handleInputChange={this.handleInputChange}
                        addLocation={this.addLocation}
                        zipCode={this.state.zipCode} />

            <AirQualityView aqi={this.state.aqi}
                            removeLocation={this.removeLocation}
                            clearLocalStorage={this.clearLocalStorage} />
          </>
          : null
        }

        {/* Render if About view is selected */}
        {this.state.currentView === 'about' ? <About /> : null}

      </div>
    );
  }
}

export default App;
