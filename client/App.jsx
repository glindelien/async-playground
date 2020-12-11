import React from 'react';

import Title from './components/Title.jsx';
import SubmitZipCode from './components/SubmitZipCode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: null
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
    console.log(event.target)
  }

  render() {
    console.log(this.state.zipCode)
    return (
      <div id='main'>
        <Title />
        <SubmitZipCode handleInputChange={this.handleInputChange}
                       handleSubmit={this.handleSubmit}
                       zipCode={this.state.zipCode} />
      </div>
    );
  }
}

export default App;
