import React, { Component } from 'react'


// Modules
import Logo from '../3_modules/Logo';
class NavMain extends Component {
    render() {
        return (
            <div className='NavMain'>
                <div className='NavMain-UserSimpleData'>
                    <div className='NavMain-UserFakeImage'></div>
                    {this.props.user.displayName}
                </div>
                <Logo classes='NavMain_Logo' />

            </div>
        )
    }
}
export default NavMain