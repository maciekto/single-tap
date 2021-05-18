import React, { Component } from 'react'

// assets
import defaultImage from '../../assets/defaultImage.png'
import userEditAddPhotoImage from '../../assets/userEditAddPhotoImage.png'
class ProfilePage extends Component {

    componentDidMount = () => {
        console.log(this.props.user)
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
            </div>
        )
    }
}
export default ProfilePage;
