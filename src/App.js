import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputMirror from './Components/InputMirror'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputMirror inputValue="Hi!"/>
      </div>
    );
  }
}

export default App;
