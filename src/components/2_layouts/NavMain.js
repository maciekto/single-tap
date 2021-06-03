import React, { Component } from 'react'
import {
    Link,
    withRouter
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

    handleSideBarOff = () => {
        this.setState({
            sideBarClasses: 'SideBar SideBar-Initial'
        })
    }

    handleProfileLink = () => {
        this.handleSideBarOff();
        this.props.history.push('/app/profile')
    }

    handleHomeLink = () => {
        this.handleSideBarOff();
        this.props.history.push('/app')
    }

    handleLogoutLink = () => {
        this.handleSideBarOff();
        this.props.handleLogout();
    }


    render() {
        return (
            <div className='NavMain'>
                <div className='NavMain-UserSimpleData' onClick={this.handleSideBarToggle}>
                    <div className='NavMain-UserImage' style={{ background: `url('${this.props.user.img ? this.props.user.img : defaultImage}') center center no-repeat`, backgroundSize: 'cover' }}>
                    </div>
                    {this.props.user.displayName}
                </div>
                <Logo classes='NavMain_Logo' isMain={true} handleHomeLink={this.handleHomeLink} />

                {// SIDE BAR !! 
                }
                <div className={this.state.sideBarClasses}>
                    <div className='SideBar-Item' onClick={this.handleHomeLink}>
                        Home
                    </div>
                    <div className='SideBar-Item' onClick={this.handleProfileLink}>
                        Profile
                    </div>
                    <div className='SideBar-Item SideBar-Logout' onClick={this.handleLogoutLink}>
                        Log out
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(NavMain);