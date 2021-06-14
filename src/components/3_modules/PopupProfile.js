import React, { Component } from 'react'

export default class PopupProfile extends Component {
    render() {
        return (
            <div className='PopupProfile'>
                <div className='PopupProfile-Main'>
                    <div className='PopupProfile-Title'>
                        Edit {this.props.editType}
                    </div>
                    <div className='PopupProfile-Label'>
                        {this.props.editType}
                    </div>
                    <div className='PopupProfile-Input'>
                        <input type='text' defaultValue={null} />
                    </div>
                    <div className='PopupProfile-Back'>
                        Back
                    </div>
                    <div className='PopupProfile-Save'>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}
