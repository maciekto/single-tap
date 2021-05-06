import React, { Component } from 'react'
import fire from '../../fire'
import {
    withRouter
} from "react-router-dom";

// Modules
import Input from '../3_modules/Input'


class PasswordReset extends Component {
    state = {
        buttonEmailInput: {
            elementType: 'input',
            elementConfig: {
                name: 'resetPasswordEmail',
                value: '',
                type: 'email',
                placeholder: 'Type your e-mail'
            },
            elementCustomClass: ''
        },
        buttonSendEmail: {
            elementType: 'input',
            elementConfig: {
                value: 'Send',
                type: 'button'
            },
            elementCustomClass: 'Input-Button_black'
        },
        error: ''
    }
    componentDidMount = () => {
        this.props.handle_Change_Panel();
    }
    handleEmailInput = (e) => {
        this.setState({
            buttonEmailInput: {
                ...this.state.buttonEmailInput,
                elementConfig: {
                    ...this.state.buttonEmailInput.elementConfig,
                    value: e.target.value
                }
            }
        })
        console.log(this.state.buttonEmailInput.elementConfig.value)
    }
    handleSendEmail = () => {
        fire.auth().sendPasswordResetEmail(this.state.buttonEmailInput.elementConfig.value).then(() => {
            this.setState({
                error: 'E-mail has been sent'
            })
        }).catch(function (error) {
            this.setState({
                error: error.message
            })
        });
    }
    render() {
        return (
            <div className="ConfirmationEmail">
                <div className='ConfirmationEmail-Title'>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Hey!</span> <br />
                    Please check type your e-mail adress on which we will send you a link to reset your password. <br /> <br />
                    {// If you do not have confirmation e-mail in your inbox click <br />
                        //<span style={{ fontWeight: 'bold' }}> button down below </span> to send e-mail again.
                    }
                    If you do not have e-mail with link in your inbox <br />
                    make sure to check your <span style={{ fontWeight: 'bold' }}>spam folder.</span>

                </div>
                <Input
                    elementType={this.state.buttonEmailInput.elementType}
                    elementConfig={this.state.buttonEmailInput.elementConfig}
                    elementCustomClass={this.state.buttonEmailInput.elementCustomClass}
                    handleEmailInput={this.handleEmailInput}
                />
                <div className="Error-Message">
                    {this.state.error}
                </div>
                <Input
                    elementType={this.state.buttonSendEmail.elementType}
                    elementConfig={this.state.buttonSendEmail.elementConfig}
                    elementCustomClass={this.state.buttonSendEmail.elementCustomClass}
                    handleButton={this.handleSendEmail}
                />
            </div>
        )
    }
}

export default withRouter(PasswordReset)