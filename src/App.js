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
    Login_Panel_Text: 'Register',
    user: ''
  }
  componentDidMount = () => {
    this.authListener();
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
  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        // set user to state
        let userAuth = user
        this.setState({
          user: userAuth
        })
      } else {
        this.setState({
          user: ''
        })
        console.log('user null')
      }
    })
  }
  handleLogout = () => {
    fire.auth().signOut();
  }
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.user !== '' ? null : <NavAuth
            Login_Panel_Visible={this.state.Login_Panel_Visible}
            handle_Change_Panel={this.handle_Change_Panel}
            Login_Panel_Text={this.state.Login_Panel_Text}
          />
          }

          <Switch>
            <Route exact path='/login'>
              <Login
                authListener={this.authListener}
                user={this.state.user}
              />
            </Route>
            <Route exact path='/register'>
              <Register
                user={this.state.user}
              />
            </Route>
            <Route exact path='/app'>
              <div>
                {this.state.user.displayName}
              </div>
              <div onClick={this.handleLogout}>
                LOGOUT
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
