import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

// assets
import defaultImage from '../../assets/defaultImage.png'

// Layouts
// Modules
import Logo from '../3_modules/Logo';

class NavMain extends Component {
    state = {
        sideBarClasses: 'SideBar SideBar-Initial'
    }

    handleSideBarToggle = () => {
        if (this.state.sideBarClasses === 'SideBar SideBar-Initial') {
            this.setState({
                sideBarClasses: 'SideBar'
            })
        } else {
            this.setState({
                sideBarClasses: 'SideBar SideBar-Initial'
            })
        }

    }

    render() {
        return (
            <div className='NavMain'>
                <div className='NavMain-UserSimpleData' onClick={this.handleSideBarToggle}>
                    <div className='NavMain-UserImage' style={{ background: `url('${this.props.user.img ? this.props.user.img : defaultImage}') center center no-repeat`, backgroundSize: 'cover' }}>
                    </div>
                    {this.props.user.displayName}
                </div>
                <Logo classes='NavMain_Logo' />

                {// SIDE BAR !! 
                }
                <div className={this.state.sideBarClasses}>
                    <Link to='app-profile'>
                        <div className='SideBar-Item'>
                            Profile
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default NavMain