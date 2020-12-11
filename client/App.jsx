import React from 'react';

import Title from './components/Title.jsx';
import SubmitZipCode from './components/SubmitZipCode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='main'>
        <Title />
        <SubmitZipCode />
      </div>
    );
  }
}

export default App;
