import React, { Component } from 'react';
import fire from './fire';
import './App.scss';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

// Layouts
import NavAuth from './components/2_layouts/NavAuth';
import Login from './components/2_layouts/Login';
import Register from './components/2_layouts/Register';

// Modules

class App extends Component {
  state = {
    Login_Panel_Visible: true, // Is login visible. If false: register is visible
    Login_Panel_Text: 'Register', // Nav_auth button text
    user: '', // userData
    register: false // Is register complete
  }
  componentDidMount = () => {
    if (this.props.location.pathname === '/') {
      // redirect form clear url to login site
      this.props.history.push('/login');
    } else if (this.props.location.pathname === '/register') {
      // in case when user type /register in url
      this.handle_Change_Panel();
    }
  }

  // change register is complete
  setRegisterToTrue = () => {
    this.setState({
      register: true
    })
  }
  setRegisterToFalse = () => {
    this.setState({
      register: false
    })
  }

  // Change text in button in Auth_Navbar
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

  // Logout from app
  handleLogout = () => {
    this.setState({
      user: ''
    })
    fire.auth().signOut();
    this.props.history.push('/login')
  }

  // Redirect to Login
  toLogin = () => {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/login'>
            <NavAuth
              Login_Panel_Visible={this.state.Login_Panel_Visible}
              handle_Change_Panel={this.handle_Change_Panel}
              Login_Panel_Text={this.state.Login_Panel_Text}
            />
            <Login
              authListener={this.authListener}
              user={this.state.user}
              register={this.state.register}
              setRegisterToFalse={this.setRegisterToFalse}
            />
          </Route>
          <Route exact path='/register'>
            <NavAuth
              Login_Panel_Visible={this.state.Login_Panel_Visible}
              handle_Change_Panel={this.handle_Change_Panel}
              Login_Panel_Text={this.state.Login_Panel_Text}

            />
            <Register
              user={this.state.user}
              handle_Change_Panel={this.handle_Change_Panel}
              setRegisterToTrue={this.setRegisterToTrue}
            />
          </Route>
          {this.state.redirectToMainApp}
          <Route exact path='/app'>
            <div>
              {this.state.user.displayName}
            </div>
            <div onClick={this.handleLogout}>
              LOGOUT
              </div>
          </Route>
          <Route exact path='/confirmation-email'>
            <div onClick={this.toLogin}>
              CLICK TO LOG IN
            </div>
          </Route>
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);
