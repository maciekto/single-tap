import React, { Component } from 'react';
import fire from './fire';
import './App.scss';

// Layouts
import Nav_auth from './components/2_layouts/Nav_auth';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav_auth />
      </div>
    );
  }

}

export default App;
