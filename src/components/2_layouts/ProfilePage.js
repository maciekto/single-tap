import React, { Component } from 'react'
import Cropper from 'react-easy-crop'

// assets
import defaultImage from '../../assets/defaultImage.png'
import userEditAddPhotoImage from '../../assets/userEditAddPhotoImage.png'

// Modules
import ProfilePopup from '../3_modules/PopupProfile'
class ProfilePage extends Component {
    state = {
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
        console.log(this.props.user)
    }

    openPopup = () => {
        console.log('EDIT THAT SHIEET')
    }
    onSelectFile = (e) => {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            console.log('siemano')
            this.setState({
                src: reader.result,
                loaded: true
            })
        }, false)
    }


    onCropChange = (crop) => {
        this.setState({
            crop: crop
        })
    }
    onZoomChange = (zoom) => {
        this.setState({ zoom })
    }
    onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }
    render() {
        
        return (

            <div className='ProfilePage'>
                <div className='ProfilePage-UserImage'>
                    <img className='ProfilePage-UserImage-Photo' src={this.props.user.photoURL !== null ? this.props.user.photoURL : defaultImage} />
                    <label htmlFor='ImageInput' className='ProfilePage-UserImage-AddIcon'>
                        
                            <img className='ProfilePage-UserImage-AddIcon-Image' src={userEditAddPhotoImage}/>
                        
                        <input id='ImageInput' type="file" accept="image/*" onChange={this.onSelectFile} style={{display: 'none', width: '0px', height: '0px'}}></input>
                    </label>
                </div>
                {
                    this.state.loaded === true ? <Cropper
                    image={this.state.src}
                    crop={this.state.crop}
                    zoom={this.state.zoom}
                    aspect={this.state.aspect}
                    onCropChange={this.onCropChange}
                    onCropComplete={this.onCropComplete}
                    onZoomChange={this.onZoomChange}
                /> : null
                }
                
                <div className='ProfilePage-TitleName ProfilePage-Title'>
                    Name:
                </div>
                <div className='ProfilePage-DataName ProfilePage-Data'>
                    {this.props.user.displayName}
                </div>
                <div className='ProfilePage-EditName ProfilePage-Edit' onClick={this.openPopup}>
                    Edit
                </div>
                <div className='ProfilePage-TitleEmail ProfilePage-Title'>
                    E-mail:
                </div>
                <div className='ProfilePage-DataEmail ProfilePage-Data'>
                    {this.props.user.email}
                </div>
                <div className='ProfilePage-EditEmail ProfilePage-Edit'>
                    Edit
                </div>
                <div className='ProfilePage-TitlePassword ProfilePage-Title'>
                    Password:
                </div>
                <div className='ProfilePage-DataPassword ProfilePage-Data'>
                    ********
                </div>
                <div className='ProfilePage-EditPassword ProfilePage-Edit'>
                    Edit
                </div>
            </div>
        )
    }
}
export default ProfilePage;
