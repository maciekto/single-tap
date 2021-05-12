import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className={`Logo ${this.props.classes}`} onClick={this.props.isMain ? this.props.handleHomeLink : null}>
                Single Tap
            </div>
        )
    }
}

export default Logo;