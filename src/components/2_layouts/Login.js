import React, { Component } from 'react';
import fire from "../../fire";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
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
            }
        }
    }
    componentDidMount = () => {
        console.log(this.props.user)
        if (this.props.user !== '') {
            this.props.history.push('/app')
        }
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
        console.log('siemano')
        console.log(this.state.loginForm.email.elementConfig.value)
        console.log(this.state.loginForm.password.elementConfig.value)
        fire
            .auth()
            .signInWithEmailAndPassword(this.state.loginForm.email.elementConfig.value, this.state.loginForm.password.elementConfig.value)
            .catch((err) => {
                console.log(err)
                switch (err.code) {
                    case 'auth/invalid-email':
                        this.setState({
                            loginForm: {
                                ...this.state.loginForm,
                                email: {
                                    ...this.state.loginForm.email,
                                    elementError: 'The email address is invalid'
                                }
                            }
                        })
                        break;
                    case 'auth/user-disabled':

                        break;
                    case 'auth/user-not-found':
                        console.log(this.state.loginForm.email)
                        this.setState({
                            loginForm: {
                                ...this.state.loginForm,
                                email: {
                                    ...this.state.loginForm.email,
                                    elementError: err.message
                                }
                            }
                        })
                        break;
                    case 'auth/wrong-password':
                        this.setState({
                            loginForm: {
                                ...this.state.loginForm,
                                password: {
                                    ...this.state.loginForm.password,
                                    elementError: err.message
                                }
                            }
                        })
                        break;
                }
            })
            .then(() => {
                this.props.authListener();
            })
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
                    handleInputEmail={this.handleInputEmail}
                />
                <Input
                    elementType={this.state.loginForm.password.elementType}
                    elementConfig={this.state.loginForm.password.elementConfig}
                    handleInputPassword={this.handleInputPassword}
                />
                <div className='Error-Message'>
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