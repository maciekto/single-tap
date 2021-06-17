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
        console.log(this.props.user)
    }
    renderPopupMain = () => {
        // POPUP NAME
        if(this.props.editType === 'Create Accounts') {
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
                        handleButton={this.sendData}
                    />
                </>
            })
        }
    }
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
    sendData = (e) => {
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
