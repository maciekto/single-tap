import React, { Component } from 'react'
import fire from '../../fire';
import { withRouter } from 'react-router';

 class PopupProfile extends Component {
    state = {
        inputValue: null
    }
    uploadProfileData = () => {
        const user = fire.auth().currentUser;
        switch(this.props.editType) {
            case 'Name':
                user.updateProfile({
                    displayName: this.state.inputValue
                }).then(() => {
                    this.props.closePopup();
                    this.props.history.push('/app/profile')
                })
                break;
            case 'Email':
                user.updateEmail(this.state.inputValue).then(() => {
                    user.sendEmailVerification().then(() => {
                        this.props.closePopup();
                        fire.auth().signOut();
                    }).catch((err) => {
                        console.log(err)
                    })
                    
                }).catch((err) => {
                    console.log(err)
                })
                break;
            case 'Password':
                fire.auth().sendPasswordResetEmail(user.email)
                .then(() => {
                    console.log('Password Send')
                    fire.auth().signOut();
                }).catch((err) => {
                    console.log(err)
                })
                break;
            default:
                console.error('ERROR POPUP PROFILE EDIT TYPE')
                break;
        }
    }
    profileNameInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <div className='PopupProfile'>
                <div className='PopupProfile-Main'>
                    <div className='PopupProfile-Title'>
                        Edit {this.props.editType}
                    </div>
                    <div className='PopupProfile-Label'>
                        {this.props.editType}
                    </div>
                    <div className='PopupProfile-Input'>
                        <input type='text' defaultValue={null} onChange={this.profileNameInput}/>
                    </div>
                    <div className='PopupProfile-Back' onClick={this.props.closePopup}>
                        Back
                    </div>
                    <div className='PopupProfile-Save' onClick={this.uploadProfileData}>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(PopupProfile)
