import React from 'react';

import Title from './components/Title.jsx';
import SubmitZipCode from './components/SubmitZipCode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const zipCode = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: zipCode
    });
  }

  render() {
    console.log(this.state.zipCode)
    return (
      <div id='main'>
        <Title />
        <SubmitZipCode handleInputChange={this.handleInputChange}
                       zipCode={this.state.zipCode} />
      </div>
    );
  }
}

export default App;
