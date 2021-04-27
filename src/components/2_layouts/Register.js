import React, { Component } from 'react';


// Modules
import Input from '../3_modules/Input';

export default class Register extends Component {
    state = {
        registerStages: {
            registerTitle: 'Step1',
            registerDescription: 'Type your name and surename',
            registerButton: 'Next'
        },
        registerForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                }
            },
            surename: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Surename'
                }
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                }
            },
            emailConfirm: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Confirm E-mail'
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                }
            },
            passwordConfirm: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                }
            },
            button: {
                elementType: 'input',
                elementCustomClass: 'Input-Button_black',
                elementConfig: {
                    type: 'button',
                    value: 'Next'
                }
            }
        }
    }
    render() {
        return (
            <form className="Register">
                <div className="Register-Title">
                    {this.state.registerStages.registerTitle}
                </div>
                <div className="Register-Description">
                    {this.state.registerStages.registerDescription}
                </div>
                <Input
                    elementType={this.state.registerForm.name.elementType}
                    elementConfig={this.state.registerForm.name.elementConfig}
                />
                <Input
                    elementType={this.state.registerForm.surename.elementType}
                    elementConfig={this.state.registerForm.surename.elementConfig}
                />
                <Input
                    elementType={this.state.registerForm.email.elementType}
                    elementConfig={this.state.registerForm.email.elementConfig}
                />
                <Input
                    elementType={this.state.registerForm.emailConfirm.elementType}
                    elementConfig={this.state.registerForm.emailConfirm.elementConfig}
                />
                <Input
                    elementType={this.state.registerForm.password.elementType}
                    elementConfig={this.state.registerForm.password.elementConfig}
                />
                <Input
                    elementType={this.state.registerForm.passwordConfirm.elementType}
                    elementConfig={this.state.registerForm.passwordConfirm.elementConfig}
                />
                <Input
                    elementType={this.state.registerForm.button.elementType}
                    elementCustomClass={this.state.registerForm.button.elementCustomClass}
                    elementConfig={this.state.registerForm.button.elementConfig}
                />
            </form>
        )
    }
}
