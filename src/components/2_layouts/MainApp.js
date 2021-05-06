import React, { Component } from 'react'
import fire from '../../fire';
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

import photo from '../../assets/photo.PNG'
import photo2 from '../../assets/photo2.PNG'
import photo3 from '../../assets/photo3.PNG'
import photo4 from '../../assets/photo4.PNG'
import photo5 from '../../assets/photo5.PNG'
class MainApp extends Component {
    componentDidMount = () => {
        if (this.props.user === '') {
            fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    if (user.emailVerified === true) {
                        this.props.history.push('/app')
                        this.props.setUser(user)
                    } else {
                        fire.auth().signOut();
                        this.props.history.push('/login');
                    }

                }
                // set user to state


            })
        }

    }
    render() {
        return (
            <div className='Main'>
                <div style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '40px' }} onClick={this.props.handleLogout}>
                    LOG OUT
                </div>
                {this.props.user.email === 'd.gluszkowska920@gmail.com' || 'ekstar007@gmail.com' ?

                    <div style={{ width: '90vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>
                        <img src={photo} alt='damn' style={{ width: '100%', marginTop: '20px' }} />
                        <img src={photo2} alt='damn' style={{ width: '100%', marginTop: '50px' }} />
                        <img src={photo3} alt='damn' style={{ width: '100%', marginTop: '50px' }} />
                        <img src={photo4} alt='damn' style={{ width: '100%', marginTop: '50px' }} />
                        <img src={photo5} alt='damn' style={{ width: '100%', marginTop: '50px', marginBottom: '5vw' }} />
                    </div> :
                    this.props.user.displayName
                }
            </div>
        )
    }
}

export default withRouter(MainApp);