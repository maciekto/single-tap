import React, { Component } from 'react';


// Modules
import Input from '../3_modules/Input';

export default class Register extends Component {
    state = {
        registerStages: {
            registerStep: 1,
            registerTitle: 'Step1',
            registerDescription: 'Type your name and surename'
        },
        registerForm: {
            name: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                }
            },
            surename: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Surename'
                }
            },
            email: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                }
            },
            emailConfirm: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Confirm E-mail'
                }
            },
            password: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                }
            },
            passwordConfirm: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                }
            },
            button: {
                elementType: 'input',
                elementCustomClass: 'Input-Button_black Input-Button-Auth',
                elementConfig: {
                    type: 'button',
                    value: 'Next'
                }
            }
        }
    }

    writeInputs = () => {
        let currentInputs;
        if (this.state.registerStages.registerStep === 1) {
            currentInputs = <>
                <Input
                    elementType={this.state.registerForm.name.elementType}
                    elementConfig={this.state.registerForm.name.elementConfig}
                    elementIsActive={this.state.registerForm.name.elementIsActive}
                    elementCustomClass={this.state.registerForm.name.elementCustomClass}
                />
                <Input
                    elementType={this.state.registerForm.surename.elementType}
                    elementConfig={this.state.registerForm.surename.elementConfig}
                    elementIsActive={this.state.registerForm.surename.elementIsActive}
                    elementCustomClass={this.state.registerForm.surename.elementCustomClass}
                />
            </>
            return currentInputs;
        } else if (this.state.registerStages.registerStep === 2) {
            currentInputs = <>
                <Input
                    elementType={this.state.registerForm.email.elementType}
                    elementConfig={this.state.registerForm.email.elementConfig}
                    elementIsActive={this.state.registerForm.email.elementIsActive}
                    elementCustomClass={this.state.registerForm.email.elementCustomClass}
                />
                <Input
                    elementType={this.state.registerForm.emailConfirm.elementType}
                    elementConfig={this.state.registerForm.emailConfirm.elementConfig}
                    elementIsActive={this.state.registerForm.emailConfirm.elementIsActive}
                    elementCustomClass={this.state.registerForm.emailConfirm.elementCustomClass}
                />
            </>
            return currentInputs;
        } else if (this.state.registerStages.registerStep === 3) {
            currentInputs = <>
                <Input
                    elementType={this.state.registerForm.password.elementType}
                    elementConfig={this.state.registerForm.password.elementConfig}
                    elementIsActive={this.state.registerForm.password.elementIsActive}
                    elementCustomClass={this.state.registerForm.password.elementCustomClass}
                />
                <Input
                    elementType={this.state.registerForm.passwordConfirm.elementType}
                    elementConfig={this.state.registerForm.passwordConfirm.elementConfig}
                    elementIsActive={this.state.registerForm.passwordConfirm.elementIsActive}
                    elementCustomClass={this.state.registerForm.passwordConfirm.elementCustomClass}
                />
            </>
            return currentInputs;
        }
    }

    handleSteps = (step) => {
        let Input_notActive = 'Input_notActive';
        switch (step) {
            case (1):
                console.log('GO TO STEP 2')
                let step2 = 2;

                this.setState({
                    registerForm: {
                        ...this.state.registerForm,
                        name: {
                            ...this.state.registerForm.name,
                            elementCustomClass: Input_notActive
                        },
                        surename: {
                            ...this.state.registerForm.surename,
                            elementCustomClass: Input_notActive
                        }
                    }
                })
                console.log(this.state)
                setTimeout(() => {
                    this.setState({
                        registerStages: {
                            registerStep: step2,
                            registerTitle: 'Step2',
                            registerDescription: 'Type your email',
                            registerButton: 'Next'
                        },
                        registerForm: {
                            ...this.state.registerForm,
                            name: {
                                ...this.state.registerForm.name,
                                elementCustomClass: '',
                            },
                            surename: {
                                ...this.state.registerForm.surename,
                                elementCustomClass: ''
                            }
                        }

                    })
                }, 500);


                break;
            case (2):
                console.log('GO TO STEP 3')
                let step3 = 3;
                this.setState({
                    registerForm: {
                        ...this.state.registerForm,
                        email: {
                            ...this.state.registerForm.email,
                            elementCustomClass: Input_notActive
                        },
                        emailConfirm: {
                            ...this.state.registerForm.emailConfirm,
                            elementCustomClass: Input_notActive
                        }
                    }
                })
                setTimeout(() => {
                    this.setState({
                        registerStages: {
                            registerStep: step3,
                            registerTitle: 'One last step',
                            registerDescription: 'Type your password',
                            registerButton: 'Finish'
                        },
                        registerForm: {
                            ...this.state.registerForm,
                            email: {
                                ...this.state.registerForm.email,
                                elementCustomClass: ''
                            },
                            emailConfirm: {
                                ...this.state.registerForm.emailConfirm,
                                elementCustomClass: ''
                            },
                            button: {
                                ...this.state.registerForm.button,
                                elementConfig: {
                                    ...this.state.registerForm.button.elementConfig,
                                    value: 'Finish'
                                }


                            }
                        }

                    })
                }, 500);

                break;
            default:
                console.log('default');
                break;
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
                {this.writeInputs()}

                {/* <Input
                    elementType={this.state.registerForm.email.elementType}
                    elementConfig={this.state.registerForm.email.elementConfig}
                    elementIsActive={this.state.registerForm.email.elementIsActive}
                    elementCustomClass={this.state.registerForm.email.elementCustomClass}
                />
                <Input
                    elementType={this.state.registerForm.emailConfirm.elementType}
                    elementConfig={this.state.registerForm.emailConfirm.elementConfig}
                    elementIsActive={this.state.registerForm.emailConfirm.elementIsActive}
                    elementCustomClass={this.state.registerForm.emailConfirm.elementCustomClass}
                />
                <Input
                    elementType={this.state.registerForm.password.elementType}
                    elementConfig={this.state.registerForm.password.elementConfig}
                    elementIsActive={this.state.registerForm.password.elementIsActive}
                    elementCustomClass={this.state.registerForm.password.elementCustomClass}
                />
                <Input
                    elementType={this.state.registerForm.passwordConfirm.elementType}
                    elementConfig={this.state.registerForm.passwordConfirm.elementConfig}
                    elementIsActive={this.state.registerForm.passwordConfirm.elementIsActive}
                    elementCustomClass={this.state.registerForm.passwordConfirm.elementCustomClass}
                /> */}
                <Input
                    elementType={this.state.registerForm.button.elementType}
                    elementCustomClass={this.state.registerForm.button.elementCustomClass}
                    elementConfig={this.state.registerForm.button.elementConfig}
                    handleSteps={() => this.handleSteps(this.state.registerStages.registerStep)}

                />
            </form>
        )
    }
}
