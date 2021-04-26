import React, { Component } from 'react'


// Modules
import Logo from '../3_modules/Logo';
import BtnRounded from '../3_modules/BtnRounded'


export default class Nav_auth extends Component {

    render() {
        return (
            <nav className="NavAuth">
                <Logo classes='NavAuth_Logo' />
                <BtnRounded
                    classes='NavAuth_BtnRounded'
                    handle_Change_Panel={this.props.handle_Change_Panel}
                >
                    {this.props.Login_Panel_Text}
                </BtnRounded>
            </nav>
        )
    }
}
