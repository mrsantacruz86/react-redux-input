import React, { Component } from 'react';
import './App.css';
import InputMirror from './Components/InputMirror'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Input Mirror </h1>
        <InputMirror store={store} />
      </div>
    );
  }
}

export default App;
