import React from 'react';

import Title from './components/Title.jsx';
import AirQualityView from './components/AirQualityView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='main'>
        <Title />
        <AirQualityView />
      </div>
    );
  }
}

export default App;
