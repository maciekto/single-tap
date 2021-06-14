import React, { Component } from 'react'

export default class PopupProfile extends Component {
    state = {
        inputValue: null
    }
    uploadProfileData = () => {
        switch(this.props.editType) {
            case 'Name':

                break;
            case 'Surename':

                break;
            case 'Password':

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
