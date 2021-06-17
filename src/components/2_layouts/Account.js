import React, { Component } from 'react'
import Cropper from 'react-easy-crop'
import fire from '../../fire'
import { withRouter } from 'react-router'

// assets

// Modules
import PopupAccounts from '../3_modules/PopupAccounts'

class Account extends Component {
    state = {
        value: '',
        loaded: false,
        accounts: [],
        accountsCounter: undefined,
        // Popups
        popupBackgroundClass: 'PopupAccounts Popup_FadeIn',
        popupMainClass: 'PopupAccounts-Main PopupMain_FadeIn'
    }
    // IMAGE CROP
    componentDidMount = () => {
        console.log(this.props.user);
        this.readData();
        
    }
    readData = () => {
        this.setState({
            loaded: false
        })
        const reflink = fire.database().ref(`Users/${this.props.user.uid}/Accounts`);
        reflink.on('value', (snapshot) => {
            const data = snapshot.val();
            if(data !== null) {
                const arrayData = Object.entries(data);
                let Accounts = [];
                arrayData.forEach((element) => {
                    let AccountElement = null;
                    const AccountId = element[0];
                    const accountBalance = element[1].accountBalance;
                    const accountCurrency = element[1].accountCurrency;
                    const accountName = element[1].accountName;
                    
                    AccountElement = <> <div key={AccountId} className='Accounts-Cell' onClick={() => this.deleteData(AccountId)}>
                        Account Name = {accountName} <br/>
                        Balance = {`${accountBalance} ${accountCurrency}`} <br />
                        </div>
                        <div className='Accounts-Create' onClick={() => this.openPopup('Create Accounts')}>
                            Create an account
                        </div> 
                    </>
                    Accounts.push(AccountElement)
                })
                this.setState({
                    value: '',
                    loaded: true,
                    accounts: Accounts
                })
                
            } else {
                let FirstAccount= null;
                FirstAccount = <div className='Accounts-Create' onClick={() => this.openPopup('Create Accounts')}>
                    Create an account
                </div>
                this.setState({
                    value: '',
                    loaded: true,
                    accounts: FirstAccount,
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
    openPopup = (type) => {
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
            case 'Email':
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
            case 'Password':
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
            default:
                console.error('ERROR')
        }
    }
    render() {
        
        return (
            <>
            {
                this.state.loaded === true 
                ?
                    <div className='Accounts'>
                        {this.state.accounts}
                        {this.state.popup}
                    </div>
                : 
                    null 
                
            }
            </>
        )
    }
}
export default withRouter(Account);
