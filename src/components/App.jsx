import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <FormGroup controlId="something">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="text"
              value="something"
              placeholder="This is text"
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default App;
