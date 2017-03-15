import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Dropzone from 'react-dropzone'

console.log('at top')

class MapDisplayButton extends React.Component {
  handleClick() {
    console.log('Mark\'s click handled:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Display Current Map
      </button>
    );
  }
}

class App extends Component {
  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  }

  render() {
    console.log('Rendering at',new Date().getTime())
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Game Table v0.0</h2>
          <p>
            Does not work yet
          </p>
        </div>
        <Dropzone onDrop={this.onDrop}>
          <div>Drop file to show on table top</div>
        </Dropzone>
        <MapDisplayButton/>
      </div>
    )
  }
}

export default App
