import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React Form Validation Demo</h2>

        <Form />
      </div>
    );
  }
}
export default App;
