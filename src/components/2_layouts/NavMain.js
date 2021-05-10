import React, { Component } from 'react'

// assets
import defaultImage from '../../assets/defaultImage.png'

// Modules
import Logo from '../3_modules/Logo';
class NavMain extends Component {

    handleSideBar = () => {

    }

    render() {
        return (
            <div className='NavMain'>
                <div className='NavMain-UserSimpleData' onClick={this.handleSideBar}>
                    <div className='NavMain-UserImage' style={{ background: `url('${this.props.user.img ? this.props.user.img : defaultImage}') center center no-repeat`, backgroundSize: 'cover' }}>
                    </div>
                    {this.props.user.displayName}
                </div>
                <Logo classes='NavMain_Logo' />

            </div>
        )
    }
}
export default NavMain