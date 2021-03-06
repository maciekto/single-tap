import React, { Component } from 'react'
import Cropper from 'react-easy-crop'

// assets
import defaultImage from '../../assets/defaultImage.png'
import userEditAddPhotoImage from '../../assets/userEditAddPhotoImage.png'

// Modules
import PopupProfile from '../3_modules/PopupProfile'
class ProfilePage extends Component {
    state = {
        popup: null,
        popupBackgroundClass: 'PopupProfile Popup_FadeIn',
        popupMainClass: 'PopupProfile-Main PopupMain_FadeIn'
    }
    // IMAGE CROP
    componentDidMount = () => {
        //console.log(this.props.user);
    }
    closePopup = () => {
        this.setState({
            popup: <PopupProfile 
            closePopup={this.closePopup}
            user={this.props.user}
            popupBackgroundClass='PopupProfile Popup_FadeOut'
            popupMainClass='PopupProfile-Main PopupMain_FadeOut' />
        })
        setTimeout(() =>  {
            this.setState({
                popup: null
            })
        }, 350);
    }
    openPopup = (type) => {
        switch(type) {
            case 'Name':
                this.setState({
                    popup: <PopupProfile 
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
                    popup: <PopupProfile 
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
                    popup: <PopupProfile 
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
    readFile = (e) => {
        this.setState({
            loaded: true,
            src: e.target.result
        })
        console.log(e.target.result);
    }
    onSelectFile = (e) => {
        let file = e.target.files[0];
        this.setState({
            file: file
        })
        console.log(file)
    }


    // onCropChange = (crop) => {
    //     this.setState({
    //         crop: crop
    //     })
    // }
    // onZoomChange = (zoom) => {
    //     this.setState({ zoom })
    // }
    // onCropComplete = (croppedArea, croppedAreaPixels) => {
    //     console.log(croppedArea, croppedAreaPixels);
    // }
    render() {
        
        return (
            <>
                <div className='ProfilePage'>
                    <div className='ProfilePage-UserImage'>
                        <img className='ProfilePage-UserImage-Photo' src={this.props.user.photoURL !== null ? this.props.user.photoURL : defaultImage} />
                        <label htmlFor='ImageInput' className='ProfilePage-UserImage-AddIcon'>
                            
                                <img className='ProfilePage-UserImage-AddIcon-Image' src={userEditAddPhotoImage}/>
                            
                            <input id='ImageInput' type="file" accept="image/*" onChange={this.onSelectFile} style={{display: 'none', width: '0px', height: '0px'}}></input>
                        </label>
                    </div>
                    <div className='ProfilePage-Tile ProfilePage-Tile1' onClick={() => this.openPopup('Name')}>
                        <div className='ProfilePage-TitleName ProfilePage-Title'>
                            Name:
                        </div>
                        <div className='ProfilePage-DataName ProfilePage-Data'>
                            {this.props.user.displayName}
                        </div>
                    </div>
                    <div className='ProfilePage-Tile ProfilePage-Tile2' onClick={() => this.openPopup('Email')}>
                        <div className='ProfilePage-TitleEmail ProfilePage-Title'>
                            E-mail:
                        </div>
                        <div className='ProfilePage-DataEmail ProfilePage-Data'>
                            {this.props.user.email}
                        </div>
                    </div>
                    <div className='ProfilePage-Tile ProfilePage-Tile3' onClick={() => this.openPopup('Password')}>
                        <div className='ProfilePage-TitlePassword ProfilePage-Title'>
                            Password:
                        </div>
                        <div className='ProfilePage-DataPassword ProfilePage-Data'>
                            ********
                        </div>
                    </div>
                </div>
                {this.state.popup}
            </>
        )
    }
}
export default ProfilePage;
