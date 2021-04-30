import React, { Component } from 'react';
import fire from './fire';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      console.log(this.props)
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
      <Router>
        <div className="App">
          <NavAuth
            Login_Panel_Visible={this.state.Login_Panel_Visible}
            handle_Change_Panel={this.handle_Change_Panel}
            Login_Panel_Text={this.state.Login_Panel_Text}
          />
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/app'>

            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
