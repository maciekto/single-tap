import React, { Component } from 'react';
import Input from '../3_modules/Input';

export default class Login extends Component {
    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                }
            },
            button: {
                elementType: 'input',
                elementCustomClass: 'Input-Button_black Input-Button-Auth',
                elementConfig: {
                    type: 'button',
                    value: 'Login'
                }
            }
        }
    }
    render() {
        return (
            <form className='Login'>
                <div className='Login-Title'>
                    Control cashflow by one tap. <br />
                    Learn how to improve your earnings and expenses. <br /> <br />
                    Welcome, to <span style={{ fontWeight: 'bold' }}> SingleTap </span>
                </div>
                <Input
                    elementType={this.state.loginForm.email.elementType}
                    elementConfig={this.state.loginForm.email.elementConfig}
                />
                <Input
                    elementType={this.state.loginForm.password.elementType}
                    elementConfig={this.state.loginForm.password.elementConfig}
                />
                <Input
                    elementType={this.state.loginForm.button.elementType}
                    elementConfig={this.state.loginForm.button.elementConfig}
                    elementCustomClass={this.state.loginForm.button.elementCustomClass}
                />
            </form>
        )
    }
}
