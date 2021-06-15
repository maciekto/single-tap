import React, { Component } from 'react'
import fire from '../../fire';
import { withRouter } from 'react-router';

// Modules
import Input from './Input';

 class PopupProfile extends Component {
    state = {
        inputValue: null,
        popupMain: null,
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
        if(this.props.editType === 'Name') {
            this.setState({
                popupMain: 
                <>
                    <div className='PopupProfile-Title'>
                        Edit your nickname
                    </div>
                    <input type='text' className='PopupProfile-Input Input' defaultValue={this.props.user.displayName} onChange={this.profileNameInput}/>
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
                        handleButton={this.uploadProfileData}
                    />
                </>
            })
        } else if(this.props.editType === 'Email') {
            this.setState({
                popupMain:
                    <>
                        <div className='PopupProfile-Title'>
                            Edit your e-mail address
                        </div>
                        <input type='text' className='PopupProfile-Input Input' defaultValue={this.props.user.email} onChange={this.profileNameInput}/>
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
                            handleButton={this.uploadProfileData}
                        />
                    </>
            })
        } else if(this.props.editType === 'Password') {
            this.setState({
                popupMain:
                    <>
                        <div className='PopupProfile-Title'>
                            Send email with instructions to reset password
                        </div>
                        <Input
                            elementType={this.state.buttonBlack.elementType}
                            elementConfig={this.state.buttonBlack.elementConfig}
                            elementCustomClass={this.state.buttonBlack.elementCustomClass}
                            handleButton={this.props.closePopup}
                        />
                        <Input
                            elementType={this.state.buttonGreen.elementType}
                            elementConfig={this.state.buttonPasswordSend.elementConfig}
                            elementCustomClass={this.state.buttonGreen.elementCustomClass}
                            handleButton={this.uploadProfileData}
                        />
                    </>
            })
        } 
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
                        alert(err.message)
                    })
                    
                }).catch((err) => {
                    alert(err.message);
                    fire.auth().signOut();
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
            <div className={this.props.popupBackgroundClass}>
                <div className={this.props.popupMainClass}>
                    {this.state.popupMain}
                    
                </div>
            </div>
        )
    }
}
export default withRouter(PopupProfile)
