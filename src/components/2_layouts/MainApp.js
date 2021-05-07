import React, { Component } from 'react'
import fire from '../../fire';
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

//Layouts
import NavMain from '../2_layouts/NavMain';

// assets
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
            })
        }

    }
    render() {
        return (
            <div className='Main'>
                <NavMain
                    user={this.props.user}
                />
                <div style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '40px', display: 'block' }} onClick={this.props.handleLogout}>
                    LOG OUT
                </div>
                {// igonre
                }
                {this.props.user.email === 'd.gluszkowska920@gmail.com' ?

                    <div style={{ width: '90vw', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>
                        <img src={photo} alt='damn' style={{ width: '100%', marginTop: '20px' }} />
                        <img src={photo2} alt='damn' style={{ width: '100%', marginTop: '50px' }} />
                        <img src={photo3} alt='damn' style={{ width: '100%', marginTop: '50px' }} />
                        <img src={photo4} alt='damn' style={{ width: '100%', marginTop: '50px' }} />
                        <img src={photo5} alt='damn' style={{ width: '100%', marginTop: '50px', marginBottom: '5vw' }} />
                    </div> : null
                }
            </div>
        )
    }
}

export default withRouter(MainApp);