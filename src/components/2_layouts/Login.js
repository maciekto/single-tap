import React, { Component } from 'react';
import fire from "../../fire";
import {
    withRouter
} from "react-router-dom";

// Modules
import Input from '../3_modules/Input';

class Login extends Component {
    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    name: 'loginEmail',
                    type: 'email',
                    placeholder: 'E-mail',
                    value: ''
                },
                elementError: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    name: 'loginPassword',
                    type: 'password',
                    placeholder: 'Password',
                    value: ''
                },
                elementError: ''
            },
            button: {
                elementType: 'input',
                elementCustomClass: 'Input-Button_black Input-Button-Auth',
                elementConfig: {
                    type: 'button',
                    value: 'Login'
                }
            },
            error: ''
        },
        user: ''
    }
    componentDidMount = () => {
        this.authListener();
    }
    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                if (user.emailVerified === true) {
                    this.props.history.push('/app')
                } else {
                    fire.auth().signOut();
                    this.props.history.push('/confirmation-email');
                }

            }
            // set user to state


        })
    }
    handleInputEmail = (e) => {
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                email: {
                    ...this.state.loginForm.email,
                    elementConfig: {
                        ...this.state.loginForm.email.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
    }
    handleInputPassword = (e) => {
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                password: {
                    ...this.state.loginForm.password,
                    elementConfig: {
                        ...this.state.loginForm.password.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
    }
    handleButton = () => {
        // Handle login auth with firebase

        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regExp.test(this.state.loginForm.email.elementConfig.value)) {
            fire
                .auth()
                .signInWithEmailAndPassword(this.state.loginForm.email.elementConfig.value, this.state.loginForm.password.elementConfig.value)
                .catch((err) => {
                    switch (err.code) {
                        case 'auth/invalid-email':
                            this.setState({
                                error: 'The email address is invalid'
                            })
                            break;
                        case 'auth/user-disabled':

                            break;
                        case 'auth/user-not-found':
                            this.setState({
                                error: 'There is no user record corresponding to this email'
                            })
                            break;
                        case 'auth/wrong-password':
                            this.setState({
                                error: 'The password or email is invalid'
                            })
                            break;
                        default:
                            this.setState({
                                error: err.message
                            })
                            break;
                    }
                })
                .then(() => {
                    this.authListener();
                })
        } else {
            this.setState({
                error: 'The email address is invalid'
            })
        }
    }
    handleOnEnterClick = (e) => {
        if (e.key === 'Enter') {
            this.handleButton();
        }
    }
    render() {
        return (
            <form className='Login' onKeyPress={this.handleOnEnterClick}>
                <div className='Login-Title'>
                    Control cashflow by one tap. <br />
                    Learn how to improve your earnings and expenses. <br /> <br />
                    Welcome, to <span style={{ fontWeight: 'bold' }}> SingleTap </span>
                </div>
                <Input
                    elementType={this.state.loginForm.email.elementType}
                    elementConfig={this.state.loginForm.email.elementConfig}
                    handleInputEmail={this.handleInputEmail}
                />
                <Input
                    elementType={this.state.loginForm.password.elementType}
                    elementConfig={this.state.loginForm.password.elementConfig}
                    handleInputPassword={this.handleInputPassword}
                />
                <div className='Error-Message'>
                    {this.state.error}
                    {this.state.loginForm.email.elementError}
                    {this.state.loginForm.password.elementError}
                </div>
                <Input
                    elementType={this.state.loginForm.button.elementType}
                    elementConfig={this.state.loginForm.button.elementConfig}
                    elementCustomClass={this.state.loginForm.button.elementCustomClass}
                    handleButton={this.handleButton}
                />
            </form>
        )
    }
}
export default withRouter(Login);