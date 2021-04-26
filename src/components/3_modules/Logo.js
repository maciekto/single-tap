import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className={`Logo ${this.props.classes}`}>
                Single Tap
            </div>
        )
    }
}

export default Logo;