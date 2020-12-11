import React from 'react';

import Title from './components/Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='main'>
        <Title />
      </div>
    );
  }
}

export default App;
