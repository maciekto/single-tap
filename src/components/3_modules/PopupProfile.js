import React, { Component } from 'react'

export default class PopupProfile extends Component {
    render() {
        return (
            <div className='ProfilePopup'>
                <div className='ProfilePopup-Main'>
                    <div className='ProfilePopup-Title'>
                        Edit this.props.editType
                    </div>
                    <div className='ProfilePopup-Label'>
                        this.propss.editType
                    </div>
                    <div className='ProfilePopup-Input'>
                        <input type='text' defaultValue={null} />
                    </div>
                    <div className='ProfilePopup-Back'>
                        Back
                    </div>
                    <div className='ProfilePopup-Save'>
                        Save
                    </div>
                </div>
            </div>
        )
    }
}
