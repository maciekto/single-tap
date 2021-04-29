import React, { Component } from 'react'

export default class Input extends Component {



    renderInput = () => {
        let inputElement;
        console.log(this.props)
        switch (this.props.elementType) {
            case ('input'):

                if (this.props.elementConfig.type === 'button') {
                    inputElement = <input className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''}`} {...this.props.elementConfig} onClick={this.props.handleSteps} />
                } else {
                    inputElement = <input className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig} />
                }
                return inputElement;
                break;
            case ('textarea'):
                inputElement = <input className='Input' {...this.props.elementConfig} />
                return inputElement;
                break;
            default:
                inputElement = <input className='Input' {...this.props.elementConfig} />
                return inputElement;
        }
    }

    render() {
        return (
            <>
                {this.renderInput()}
            </>
        )
    }
}