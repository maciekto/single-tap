import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

// Modules
import Logo from '../3_modules/Logo';
import BtnRounded from '../3_modules/BtnRounded'


class Nav_auth extends Component {
    componentDidMount = () => {
        console.log(this.props)
        if (this.props.location.pathname === '/') {
            // redirect form clear url to login site
            this.props.history.push('/login');
        } else if (this.props.location.pathname === '/register') {
            // in case when user type /register in url
            this.props.handle_Change_Panel();
        }
    }
    // handling history push with change from login to register and register to login
    handle_Change_Panel = () => {
        if (this.props.Login_Panel_Visible === true) {
            this.props.history.push('/register');
            this.props.handle_Change_Panel();
        } else if (this.props.Login_Panel_Visible === false) {
            this.props.history.push('/login');
            this.props.handle_Change_Panel();
        }
    }
    render() {
        return (
            <nav className="NavAuth">
                <Logo classes='NavAuth_Logo' />
                <BtnRounded
                    classes='NavAuth_BtnRounded'
                    handle_Change_Panel={this.handle_Change_Panel}
                >
                    {this.props.Login_Panel_Text}
                </BtnRounded>
            </nav>
        )
    }
}

export default withRouter(Nav_auth);