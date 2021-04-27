import React, { Component } from 'react';
import fire from './fire';
import './App.scss';

// Layouts
import NavAuth from './components/2_layouts/NavAuth';
import Login from './components/2_layouts/Login';
import Register from './components/2_layouts/Register';

// Modules

class App extends Component {
  state = {
    Login_Panel_Visible: true,
    Login_Panel_Text: 'Register'
  }

  handle_Change_Panel = () => {
    if (this.state.Login_Panel_Visible === true) {
      this.setState({
        Login_Panel_Visible: false,
        Login_Panel_Text: 'Log In'
      })
    } else {
      this.setState({
        Login_Panel_Visible: true,
        Login_Panel_Text: 'Register'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavAuth
          handle_Change_Panel={this.handle_Change_Panel}
          Login_Panel_Text={this.state.Login_Panel_Text}
        />
        {this.state.Login_Panel_Visible === true ?
          <Login

          /> : <Register

          />}
      </div>
    );
  }

}

export default App;
