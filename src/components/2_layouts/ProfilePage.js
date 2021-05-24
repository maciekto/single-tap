import React, { Component } from 'react'

// assets
import defaultImage from '../../assets/defaultImage.png'
import userEditAddPhotoImage from '../../assets/userEditAddPhotoImage.png'

// Modules
import ProfilePopup from '../3_modules/PopupProfile'
class ProfilePage extends Component {

    componentDidMount = () => {
        console.log(this.props.user)
    }

    openPopup = () => {

    }

    render() {
        return (
            <div className='ProfilePage'>
                <div className='ProfilePage-UserImage'>
                    <img className='ProfilePage-UserImage-Photo' src={this.props.user.photoURL !== null ? this.props.user.photoURL : defaultImage} />
                    <div className='ProfilePage-UserImage-AddIcon'>
                        <img className='ProfilePage-UserImage-AddIcon-Image' src={userEditAddPhotoImage} />
                    </div>
                </div>
                <div className='ProfilePage-TitleName ProfilePage-Title'>
                    Name:
                </div>
                <div className='ProfilePage-DataName ProfilePage-Data'>
                    {this.props.user.displayName}
                </div>
                <div className='ProfilePage-EditName ProfilePage-Edit'>
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
