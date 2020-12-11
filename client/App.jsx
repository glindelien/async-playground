import React from 'react';

import Title from './components/Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='content'>
        <Title />
      </div>
    );
  }
}

export default App;
