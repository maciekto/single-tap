import React, { Component } from 'react'
import fire from '../../fire';
import { withRouter } from 'react-router';

// Modules
import Input from './Input';

 class PopupAccounts extends Component {
    state = {
        popupMain: null,
        popupMainClass: null,
        accountNameInput: undefined,
        accountBalanceInput: undefined,
        accountCurrencyInput: 'PLN',

        paymentNameInput: undefined,
        paymentBalanceInput: undefined,
        paymentDateInput: undefined,
        paymentNotesInput: undefined,

        buttonBlack: {
            elementType: 'input',
            elementCustomClass: 'Input-Button_white',
            elementConfig: {
                type: 'button',
                value: 'Back'
            }
        },
        buttonGreen: {
            elementType: 'input',
            elementCustomClass: 'Input-Button_green',
            elementConfig: {
                type: 'button',
                value: 'Save'
            }
        },
        buttonPasswordSend: {
            elementConfig: {
                type: 'button',
                value: 'Send'
            }
        }

    }
    componentDidMount = () => {
        this.renderPopupMain();
    }
    renderPopupMain = () => {
        // POPUP NAME
        switch (this.props.editType) {
            case 'Create Accounts':
                this.setState({
                    popupMain: 
                    <>
                        <div className='PopupAccounts-Title'>
                            Create an account
                        </div>
                        <div className='PopupAccounts-Label'>
                            Account Name
                        </div>
                        <input type='text' className='PopupAccounts-Input Input' value={this.state.accountNameInput} onChange={this.accountNameHandle} placeholder='example: Account1, Main Account'/>
                        <div className='PopupAccounts-Label'>
                            Initial balance
                        </div>
                        <input type='number' className='PopupAccounts-Input Input' value={this.state.accountBalanceInput} onChange={this.accountBalanceHandle} placeholder='7567'/>
                        <div className='PopupAccounts-Label'>
                            Currency
                        </div>
    
                        <select type='text' className='PopupAccounts-Input Input' onChange={this.accountCurrencyHandle}>
                            <option value='PLN'>
                                PLN
                            </option>
                            <option value='USD'>
                                USD
                            </option>
                            <option value='EUR'>
                                EUR
                            </option>
                        </select>
                        
                        <Input
                            elementType={this.state.buttonBlack.elementType}
                            elementConfig={this.state.buttonBlack.elementConfig}
                            elementCustomClass={this.state.buttonBlack.elementCustomClass}
                            handleButton={this.props.closePopup}
                        />
                        <Input
                            elementType={this.state.buttonGreen.elementType}
                            elementConfig={this.state.buttonGreen.elementConfig}
                            elementCustomClass={this.state.buttonGreen.elementCustomClass}
                            handleButton={() => this.sendData('Create Accounts')}
                        />
                    </>
                })
                break;
            case 'Add Expense': 
                this.setState({
                    popupMain: 
                    <>
                        <div className='PopupAccounts-Title'>
                            Add expense
                        </div>
                        <div className='PopupAccounts-Label'>
                            Payment Name
                        </div>
                        <input type='text' className='PopupAccounts-Input Input' value={this.state.paymentNameInput} onChange={this.paymentNameHandle} placeholder='example: Account1, Main Account'/>
                        <div className='PopupAccounts-Label'>
                            Amount
                        </div>
                        <input type='number' className='PopupAccounts-Input Input' value={this.state.paymentBalanceInput} onChange={this.paymentBalanceHandle} placeholder='7567'/>
                        <div className='PopupAccounts-Label'>
                            Date
                        </div>

                        <input className='PopupAccounts-Input Input' type='date' onChange={this.paymentDateHandle}/>
                        <div className='PopupAccounts-Label'>
                            Notes
                        </div>
                        <textarea maxLength="100" type='text' className='PopupAccounts-Input Input PopupAccounts-TextArea' value={this.state.paymentNotesInput} onChange={this.paymentNotesHandle} placeholder='Notes'></textarea>
                        
                        
                        <Input
                            elementType={this.state.buttonBlack.elementType}
                            elementConfig={this.state.buttonBlack.elementConfig}
                            elementCustomClass={this.state.buttonBlack.elementCustomClass}
                            handleButton={this.props.closePopup}
                        />
                        <Input
                            elementType={this.state.buttonGreen.elementType}
                            elementConfig={this.state.buttonGreen.elementConfig}
                            elementCustomClass={this.state.buttonGreen.elementCustomClass}
                            handleButton={() => this.sendData('Add Expense')}
                        />
                    </>
                })
            break;
            case 'Add Income':
                this.setState({
                    popupMain: 
                    <>
                        <div className='PopupAccounts-Title'>
                            Add income
                        </div>
                        <div className='PopupAccounts-Label'>
                            Payment Name
                        </div>
                        <input type='text' className='PopupAccounts-Input Input' value={this.state.paymentNameInput} onChange={this.paymentNameHandle} placeholder='example: Account1, Main Account'/>
                        <div className='PopupAccounts-Label'>
                            Amount
                        </div>
                        <input type='number' className='PopupAccounts-Input Input' value={this.state.paymentBalanceInput} onChange={this.paymentBalanceHandle} placeholder='7567'/>
                        <div className='PopupAccounts-Label'>
                            Date
                        </div>

                        <input className='PopupAccounts-Input Input' type='date' onChange={this.paymentDateHandle}/>
                        <div className='PopupAccounts-Label'>
                            Notes
                        </div>
                        <textarea maxLength="100" type='text' className='PopupAccounts-Input Input PopupAccounts-TextArea' value={this.state.paymentNotesInput} onChange={this.paymentNotesHandle} placeholder='Notes'></textarea>
                        
                        
                        <Input
                            elementType={this.state.buttonBlack.elementType}
                            elementConfig={this.state.buttonBlack.elementConfig}
                            elementCustomClass={this.state.buttonBlack.elementCustomClass}
                            handleButton={this.props.closePopup}
                        />
                        <Input
                            elementType={this.state.buttonGreen.elementType}
                            elementConfig={this.state.buttonGreen.elementConfig}
                            elementCustomClass={this.state.buttonGreen.elementCustomClass}
                            handleButton={() => this.sendData('Add Income')}
                        />
                    </>
                })
                break;
            default:
                break;
        }
            
        
    }
    // Create Account
    accountNameHandle = (e) => {
        this.setState({
            accountNameInput: e.target.value
        })
    }
    accountBalanceHandle = (e) => {
        this.setState({
            accountBalanceInput: e.target.value
        })
    }
    accountCurrencyHandle = (e) => {
        this.setState({
            accountCurrencyInput: e.currentTarget.value
        })
    }

    // Payments
    paymentNameHandle = (e) => {
        this.setState({
            paymentNameInput: e.currentTarget.value
        })
    }
    paymentBalanceHandle = (e) => {
        this.setState({
            paymentBalanceInput: e.currentTarget.value
        })
    }
    paymentDateHandle = (e) => {
        this.setState({
            paymentDateInput: e.currentTarget.value
        })
    }
    paymentNotesHandle = (e) => {
        this.setState({
            paymentNotesInput: e.currentTarget.value
        })
    }
    sendData = (e) => {
        switch (e) {
            case 'Create Accounts':
                const refLink = fire.database().ref(`Users/${this.props.user.uid}/Accounts/`);
                const dataToSend = {
                    accountName: this.state.accountNameInput,
                    accountBalance: this.state.accountBalanceInput,
                    accountCurrency: this.state.accountCurrencyInput
                }
                refLink.push(dataToSend).then((res) => {
                    console.log(res)
                    this.props.closePopup();
                }).catch((err) => {
                    console.log(err)
                })
                break;
            case 'Add Expense': 
                const refLinkExpense = fire.database().ref(`Users/${this.props.user.uid}/Accounts/${this.props.AccountId}/Payments`);
                const dataToSendExpense = {
                    paymentType: 'Expense',
                    paymentName: this.state.paymentNameInput,
                    paymentBalance: this.state.paymentBalanceInput,
                    paymentDate: this.state.paymentDateInput,
                    paymentNotes: this.state.paymentNotesInput
                }
                refLinkExpense.push(dataToSendExpense).then((res) => {
                    console.log(res)
                    this.props.closePopup();
                }).catch((err) => {
                    console.log(err)
                })
            break;
            case 'Add Income': 
                const refLinkIncome = fire.database().ref(`Users/${this.props.user.uid}/Accounts/${this.props.AccountId}/Payments`);
                const dataToSendIncome = {
                    paymentType: 'Income',
                    paymentName: this.state.paymentNameInput,
                    paymentBalance: this.state.paymentBalanceInput,
                    paymentDate: this.state.paymentDateInput,
                    paymentNotes: this.state.paymentNotesInput
                }
                refLinkIncome.push(dataToSendIncome).then((res) => {
                    console.log(res)
                    this.props.closePopup();
                }).catch((err) => {
                    console.log(err)
                })
            break;
            default:
                break;
        }
        

    }

    render() {
        return (
            <div className={this.props.popupBackgroundClass}>
                <div className={`${this.props.popupMainClass} ${this.state.popupMainClass}`}>
                    {this.state.popupMain}
                    
                </div>
            </div>
        )
    }
}
export default withRouter(PopupAccounts)
