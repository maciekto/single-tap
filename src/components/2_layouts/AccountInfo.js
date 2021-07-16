import React, { Component } from 'react'
import Cropper from 'react-easy-crop'
import fire from '../../fire'
import { Switch, Route, withRouter } from 'react-router'
    

// assets

// Modules
import PopupAccounts from '../3_modules/PopupAccounts'

class AccountInfo extends Component {
    state = {
        value: '',
        loaded: false,
        // Accounts
        AccountRoute: null,
        accounts: [],
        accountsCounter: undefined,
        // Popups
        popupBackgroundClass: 'PopupAccounts Popup_FadeIn',
        popupMainClass: 'PopupAccounts-Main PopupMain_FadeIn'
    }
    // IMAGE CROP
    componentDidMount = () => {
        this.readData();
        console.log(this.props.AccountId)
        console.log(this.props.user)
        console.log(this.props.paymentsObject)
        
        
    }
    readData = () => {
        this.setState({
            loaded: false
        })
        const reflink = fire.database().ref(`Users/${this.props.user.uid}/Accounts`);
        reflink.on('value', (snapshot) => {
            const data = snapshot.val();
            
        })
    }
    // Finished with unique AccountId from database
    deleteData = (AccountId) => {
        const reflink = fire.database().ref(`Users/${this.props.user.uid}/Accounts/${AccountId}`);
        reflink.remove();
        this.props.history.push(this.props.history.locaction)
    }
    
    render() {
        
        return (
            <div className='AccountInfo'>
                {this.props.AccountId} <br />
                {this.props.accountName} <br />
                {this.props.accountBalance} <br />
            </div>
        )
    }
}
export default withRouter(AccountInfo);
