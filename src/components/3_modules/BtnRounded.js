import React, { Component } from 'react'

export default class BtnRounded extends Component {

    render() {
        return (
            <div className={`BtnRounded ${this.props.classes}`} onClick={this.props.handle_Change_Panel}>
                {this.props.children}
            </div>
        )
    }
}
