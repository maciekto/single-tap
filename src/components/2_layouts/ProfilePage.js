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
        file: null,
        loaded: false,
        src: null,
        crop: {
            x: 0,
            y: 0
        },
        aspect: 1 / 1,
        zoom: null,
    }
    // IMAGE CROP
    componentDidMount = () => {
        console.log(this.props.user);
    }

    openPopup = (type) => {
        switch(type) {
            case 'Name':
                this.setState({
                    popup: <PopupProfile 
                        editType={type}
                    />
                })
                break;
            case 'Surename':
                this.setState({
                    popup: <PopupProfile 
                        editType={type}
                    />
                })
                break;
            case 'Password':
                this.setState({
                    popup: <PopupProfile 
                        editType={type}
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
                    <div className='ProfilePage-TitleName ProfilePage-Title'>
                        Name:
                    </div>
                    <div className='ProfilePage-DataName ProfilePage-Data'>
                        {this.props.user.displayName}
                    </div>
                    <div className='ProfilePage-EditName ProfilePage-Edit' onClick={() => this.openPopup('Name')}>
                        Edit
                    </div>
                    <div className='ProfilePage-TitleEmail ProfilePage-Title'>
                        E-mail:
                    </div>
                    <div className='ProfilePage-DataEmail ProfilePage-Data'>
                        {this.props.user.email}
                    </div>
                    <div className='ProfilePage-EditEmail ProfilePage-Edit' onClick={() => this.openPopup('Surename')}>
                        Edit
                    </div>
                    <div className='ProfilePage-TitlePassword ProfilePage-Title'>
                        Password:
                    </div>
                    <div className='ProfilePage-DataPassword ProfilePage-Data'>
                        ********
                    </div>
                    <div className='ProfilePage-EditPassword ProfilePage-Edit' onClick={() => this.openPopup('Password')}>
                        Edit
                    </div>
                </div>
                {this.state.popup}
            </>
        )
    }
}
export default ProfilePage;
