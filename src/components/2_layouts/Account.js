import React, { Component } from 'react'
import Cropper from 'react-easy-crop'
import fire from '../../fire'
import { Switch, Route, withRouter } from 'react-router'
    

// assets

// Layouts
import AccountInfo from './AccountInfo'

// Modules
import PopupAccounts from '../3_modules/PopupAccounts'

class Account extends Component {
    state = {
        value: '',
        loaded: false,
        // Accounts
        AccountRoute: null,
        accounts: [],
        latests: [],
        accountsCounter: undefined,
        // Popups
        popupBackgroundClass: 'PopupAccounts Popup_FadeIn',
        popupMainClass: 'PopupAccounts-Main PopupMain_FadeIn'
    }
    // IMAGE CROP
    componentDidMount = () => {
        this.readData();
        
    }
    readData = () => {
        this.setState({
            loaded: false
        })
        const reflink = fire.database().ref(`Users/${this.props.user.uid}/Accounts`);
        reflink.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            if(data !== null) {
                const arrayData = Object.entries(data);
                let AccountsWithButton;
                let Accounts = [];
                arrayData.forEach((element) => {
                    // Payments Feature
                    
                    
                    console.log(element)
                    
                    let AccountElement = null;
                    const AccountId = element[0];
                    const accountBalance = element[1].accountBalance;
                    let accountCurrency = element[1].accountCurrency;
                    const accountName = element[1].accountName;

                    switch(accountCurrency) {
                        case 'PLN':
                            accountCurrency = 'zł'
                            break;
                        case 'USD':
                            accountCurrency = '$'
                            break;
                        case 'EUR':
                            accountCurrency = '€'
                            break;
                        default: 
                            console.error('Different currency: ' + accountCurrency)
                    }

                    if(element[1].Payments) {
                        const payments = Object.entries(element[1].Payments);
                        const paymentsLatest = payments.reverse();
                        let latests = [];
                        let i = 0;
                        paymentsLatest.forEach((element) => {
                            if(i <= 1) {
                                console.log(element[1].paymentType)
                                if(element[1].paymentType === 'Expense') {
                                    latests.push(<div> <span className='Accounts-Cell-Latest-Data-Expense'>-{element[1].paymentBalance}{accountCurrency}</span> - {element[1].paymentName}</div>)
                                    
                                } else {
                                    latests.push(<div> <span className='Accounts-Cell-Latest-Data-Income'>-{element[1].paymentBalance}{accountCurrency}</span> - {element[1].paymentName}</div>)
                                }
                            }
                            i+=1
                        })
                        this.setState({
                            latests: latests
                        })
                    }
                    AccountElement = <div key={AccountId} className='Accounts-Cell' onClick={(e) => {
                        return this.goToAccountView(e, AccountId, accountName, accountBalance)
                        }}>
                                            <div className='Accounts-Cell-Name' key={AccountId}>
                                                {accountName}
                                            </div>
                                            <div className='Accounts-Cell-Balance'>
                                                {`${accountBalance}${accountCurrency}`}
                                            </div>
                                            <div className='Accounts-Cell-Line'>

                                            </div>
                                            <div className='Accounts-Cell-Latest-Name'>
                                                Latest:
                                            </div>
                                            <div className='Accounts-Cell-Latest-Data'>
                                                {this.state.latests}
                                            </div>
                                            <div className='Accounts-Cell-Expense' onClick={(e) => {
                                                        return this.openPopup(e, 'Add Expense', AccountId)
                                                    }}>
                                                <div className='Accounts-Cell-Expense-Content' >
                                                    {/* &#8722;  */}Add expense
                                                </div>
                                            </div>
                                            <div className='Accounts-Cell-Income' onClick={(e) => {
                                                    return this.openPopup(e, 'Add Income', AccountId)
                                                    }}>
                                                <div className='Accounts-Cell-Income-Content' >
                                                  {/* &#43;  */}  Add income 
                                                </div>
                                                
                                            </div>
                                        </div>
                        
                    Accounts.push(AccountElement)
                })
                this.setState({
                    value: '',
                    loaded: true,
                    accounts: Accounts
                })
                
            } else {
                this.setState({
                    value: '',
                    loaded: true,
                    accountsCounter: 0
                })
            }
        })
    }
    // Finished with unique AccountId from database
    deleteData = (AccountId) => {
        const reflink = fire.database().ref(`Users/${this.props.user.uid}/Accounts/${AccountId}`);
        reflink.remove();
        this.props.history.push(this.props.history.locaction)
    }
    
    closePopup = () => {
        this.setState({
            popup: <PopupAccounts
            closePopup={this.closePopup}
            user={this.props.user}
            popupBackgroundClass='PopupAccounts Popup_FadeOut'
            popupMainClass='PopupAccounts-Main PopupMain_FadeOut' />
        })
        setTimeout(() =>  {
            this.setState({
                popup: null
            })
        }, 350);
    }
    openPopup = (e, type, AccountId) => {
        switch(type) {
            case 'Create Accounts':
                this.setState({
                    popup: <PopupAccounts
                        closePopup={this.closePopup}
                        editType={type}
                        user={this.props.user}
                        popupBackgroundClass={this.state.popupBackgroundClass}
                        popupMainClass={this.state.popupMainClass}
                    />
                })
                break;
            case 'Add Expense':
                e.stopPropagation();
                this.setState({
                    popup: <PopupAccounts 
                        closePopup={this.closePopup}
                        AccountId={AccountId}
                        editType={type}
                        user={this.props.user}
                        popupBackgroundClass={this.state.popupBackgroundClass}
                        popupMainClass={this.state.popupMainClass}
                    />
                })
                break;
            case 'Add Income':
                e.stopPropagation();
                this.setState({
                    popup: <PopupAccounts 
                        closePopup={this.closePopup}
                        AccountId={AccountId}
                        editType={type}
                        user={this.props.user}
                        popupBackgroundClass={this.state.popupBackgroundClass}
                        popupMainClass={this.state.popupMainClass}
                    />
                })
                break;
            default:
                console.error('ERROR')
        }
    }
    goToAccountView = (e, AccountId, accountName, accountBalance) => {
        console.log(e)
        console.log(AccountId)
        console.log(this.props.history.location.pathname)
        const currentPath = this.props.history.location.pathname
        const finishPath = `${currentPath}/${AccountId}`
        this.props.history.push(finishPath)
        this.setState({
            AccountRoute: <Route exact path={finishPath}>
                <AccountInfo 
                    AccountId={AccountId}
                    accountName={accountName}
                    accountBalance={accountBalance}
                    user={this.props.user}
                />
            </Route>
        })
    }
    render() {
        
        return (
            <>
            {
                this.state.loaded === true 
                ?
                    <Switch>
                        <Route exact path='/app/accounts'>
                            <div className='Accounts'>
                                {this.state.accounts}
                                <div className='Accounts-Create' onClick={(e) => {
                                    return this.openPopup(e, 'Create Accounts')
                                    }}>
                                    Create an account
                                </div>
                                {this.state.popup}
                            </div>
                        </Route>
                        {this.state.AccountRoute}
                    </Switch>
                    
                : 
                    null 
                
            }
            </>
        )
    }
}
export default withRouter(Account);
