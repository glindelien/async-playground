import React from 'react';
import axios from 'axios';

import Title from './components/Title.jsx';
import SubmitZipCode from './components/SubmitZipCode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ''
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
      console.log(res);
      this.setState({
        zipCode: ''
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
