import React, { Component } from 'react';


// Modules
import Input from '../3_modules/Input';

export default class Register extends Component {
    state = {
        registerStages: {
            registerStep: 1,
            registerTitle: 'Step 1',
            registerDescription: 'Type your name and surename',
            registerTitleClass: 'Title_afterChange'
        },
        registerForm: {
            name: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    name: 'registerName',
                    type: 'text',
                    placeholder: 'Name',
                    value: ''
                }
            },
            surename: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    name: 'registerSurename',
                    type: 'text',
                    placeholder: 'Surename',
                    value: ''
                }
            },
            email: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    name: 'registerEmail',
                    type: 'email',
                    placeholder: 'E-mail',
                    value: ''
                }
            },
            emailConfirm: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    name: 'registerEmailConfirm',
                    type: 'email',
                    placeholder: 'Confirm E-mail',
                    value: ''
                }
            },
            password: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    name: 'registerPassword',
                    type: 'password',
                    placeholder: 'Password',
                    value: ''
                }
            },
            passwordConfirm: {
                elementType: 'input',
                elementCustomClass: '',
                elementConfig: {
                    name: 'registerPasswordConfirm',
                    type: 'password',
                    placeholder: 'Confirm Password',
                    value: ''
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
    handleInputName = (e) => {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                name: {
                    ...this.state.registerForm.name,
                    elementConfig: {
                        ...this.state.registerForm.name.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
    }
    handleInputSurename = (e) => {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                surename: {
                    ...this.state.registerForm.surename,
                    elementConfig: {
                        ...this.state.registerForm.surename.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
    }
    handleInputEmail = (e) => {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                email: {
                    ...this.state.registerForm.email,
                    elementConfig: {
                        ...this.state.registerForm.email.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
    }
    handleInputEmailConfirm = (e) => {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                emailConfirm: {
                    ...this.state.registerForm.emailConfirm,
                    elementConfig: {
                        ...this.state.registerForm.emailConfirm.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
    }
    handleInputPassword = (e) => {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                password: {
                    ...this.state.registerForm.password,
                    elementConfig: {
                        ...this.state.registerForm.password.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
    }
    handleInputPasswordConfirm = (e) => {
        this.setState({
            registerForm: {
                ...this.state.registerForm,
                passwordConfirm: {
                    ...this.state.registerForm.passwordConfirm,
                    elementConfig: {
                        ...this.state.registerForm.passwordConfirm.elementConfig,
                        value: e.target.value
                    }
                }
            }
        })
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
                    handleInputName={this.handleInputName}
                />
                <Input
                    elementType={this.state.registerForm.surename.elementType}
                    elementConfig={this.state.registerForm.surename.elementConfig}
                    elementIsActive={this.state.registerForm.surename.elementIsActive}
                    elementCustomClass={this.state.registerForm.surename.elementCustomClass}
                    handleInputSurename={this.handleInputSurename}
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
                    handleInputEmail={this.handleInputEmail}
                />
                <Input
                    elementType={this.state.registerForm.emailConfirm.elementType}
                    elementConfig={this.state.registerForm.emailConfirm.elementConfig}
                    elementIsActive={this.state.registerForm.emailConfirm.elementIsActive}
                    elementCustomClass={this.state.registerForm.emailConfirm.elementCustomClass}
                    handleInputEmailConfirm={this.handleInputEmailConfirm}
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
                    handleInputPassword={this.handleInputPassword}
                />
                <Input
                    elementType={this.state.registerForm.passwordConfirm.elementType}
                    elementConfig={this.state.registerForm.passwordConfirm.elementConfig}
                    elementIsActive={this.state.registerForm.passwordConfirm.elementIsActive}
                    elementCustomClass={this.state.registerForm.passwordConfirm.elementCustomClass}
                    handleInputPasswordConfirm={this.handleInputPasswordConfirm}
                />
            </>
            return currentInputs;
        }
    }
    handleStepsOnEnterClick = (e) => {
        if (e.key === 'Enter') {
            this.handleSteps(this.state.registerStages.registerStep);
        }
    }
    handleSteps = (step, e) => {
        let Input_notActive = 'Input_notActive';
        switch (step) {
            case (1):
                console.log('GO TO STEP 2')
                let step2 = 2;

                this.setState({
                    registerStages: {
                        ...this.state.registerStages,
                        registerTitleClass: 'Title_change'
                    },
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
                            registerTitle: 'Step 2',
                            registerDescription: 'Type your email',
                            registerTitleClass: 'Title_afterChange'
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
                    registerStages: {
                        ...this.state.registerStages,
                        registerTitleClass: 'Title_change'
                    },
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
                            registerButton: 'Finish',
                            registerTitleClass: 'Title_afterChange'
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
            <form className="Register" onKeyPress={this.handleStepsOnEnterClick}>
                <div className={`Register-Title ${this.state.registerStages.registerTitleClass}`}>
                    {this.state.registerStages.registerTitle}
                </div>
                <div className={`Register-Description ${this.state.registerStages.registerTitleClass}`}>
                    {this.state.registerStages.registerDescription}
                </div>
                {this.writeInputs()}
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
