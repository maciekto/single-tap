import React, { Component } from 'react'
import Cropper from 'react-easy-crop'
import fire from '../../fire'
import { withRouter } from 'react-router'

// assets

// Modules
import Input from '../3_modules/Input'
class Account extends Component {
    state = {
        value: '',
        loaded: false,
        accounts: [],
        writeAccounts: null
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
                    const AccountTitle = element[1].title;
                    const UserUid = element[1].uid;
                    
                    AccountElement = <div key={AccountId} style={{padding: '20px'}} onClick={() => this.deleteData(AccountId)}>
                        AccountID = {AccountId} <br/>
                        AccountTitle = {AccountTitle} <br />
                        UserUid = {UserUid} <br />
                    </div>
                    Accounts.push(AccountElement)
                })
                this.setState({
                    value: '',
                    loaded: true,
                    accounts: Accounts
                })
                
            } else {
                let FirstAccount= null;
                FirstAccount = <div>
                    Create your first account
                </div>
                this.setState({
                    value: '',
                    loaded: true,
                    accounts: FirstAccount
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
    sendData = (e) => {
        const refLink = fire.database().ref(`Users/${this.props.user.uid}/Accounts`);
        const dataToSend = {
            uid: this.props.user.uid,
            title: this.state.value
        }
        refLink.push(dataToSend).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }
    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        
        return (
            <>
            {
                this.state.loaded === true 
                ?
                    <div className='Accounts'>
                        <input type='text' value={this.state.value} onChange={this.handleInput}/>
                        
                        <div onClick={this.sendData}>PUSH DATA</div>
                        {this.state.accounts}
                    </div>
                : 
                    null 
                
            }
            </>
        )
    }
}
export default withRouter(Account);
