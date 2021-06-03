import React, { Component } from 'react'
import fire from '../../fire'
import {
    withRouter
} from "react-router-dom";

// Modules
import Input from '../3_modules/Input'


class ConfirmationEmail extends Component {
    state = {
        buttonSendAgainEmail: {
            elementType: 'input',
            elementConfig: {
                value: 'Send Again',
                type: 'button'
            },
            elementCustomClass: 'Input-Button_black'
        },
        buttonBackToLogin: {
            elementType: 'input',
            elementConfig: {
                value: 'Back to Login',
                type: 'button'
            },
            elementCustomClass: 'Input-Button_white'
        },
        actionCodeSettings: {
            url: 'https://single-tap.firebaseapp.com/__/auth/action?mode=action&oobCode=code',
            handleCodeInApp: true
        }
    }
    componentDidMount = () => {
        if (this.props.setConfirmationEmailToTrue()) {
            this.props.setConfirmationEmailToTrue();
        }
    }
    // Figure out how to sent verification email to sign out user
    handleButtonSendConfirmEmail = () => {
        fire.auth().sendSignInLinkToEmail(window.localStorage.emailForLogin, null)
            .then(() => {
                console.log('email sent')
            })
            .catch((err) => {
                console.log(err)
            })


    }
    handleButtonBackToLogin = () => {
        this.props.history.replace('/login')
        this.props.setRegisterToFalse();
    }
    render() {
        return (
            <div className="ConfirmationEmail">
                <div className='ConfirmationEmail-Title'>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Hey!</span> <br />
                    Please check your e-mail adress to verivy  your account. <br /> <br />
                    {// If you do not have confirmation e-mail in your inbox click <br />
                        //<span style={{ fontWeight: 'bold' }}> button down below </span> to send e-mail again.
                    }
                    If you do not have confirmation e-mail in your inbox <br />
                    make sure to check your <span style={{ fontWeight: 'bold' }}>spam folder.</span>

                </div>
                {// Figure out how to sent verification email to sign out user
                }
                {/* <Input
                    elementType={this.state.buttonSendAgainEmail.elementType}
                    elementConfig={this.state.buttonSendAgainEmail.elementConfig}
                    elementCustomClass={this.state.buttonSendAgainEmail.elementCustomClass}
                    handleButton={this.handleButtonSendConfirmEmail}
                /> */}
                <Input
                    elementType={this.state.buttonBackToLogin.elementType}
                    elementConfig={this.state.buttonBackToLogin.elementConfig}
                    elementCustomClass={this.state.buttonBackToLogin.elementCustomClass}
                    handleButton={this.handleButtonBackToLogin}
                />
            </div>
        )
    }
}

export default withRouter(ConfirmationEmail)