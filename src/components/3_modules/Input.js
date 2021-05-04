import React, { Component } from 'react'

export default class Input extends Component {



    renderInput = () => {
        let inputElement;
        switch (this.props.elementType) {
            case ('input'):
                // BUTTON HANDLING
                if (this.props.elementConfig.type === 'button') {
                    inputElement = <input className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''}`} {...this.props.elementConfig} onClick={() => this.props.handleButton()} />
                }
                // INPUT HANDLING
                else if (this.props.elementConfig.name === 'registerName') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputName} />
                } else if (this.props.elementConfig.name === 'registerSurename') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputSurename} />
                } else if (this.props.elementConfig.name === 'registerEmail') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputEmail} />
                } else if (this.props.elementConfig.name === 'registerEmailConfirm') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputEmailConfirm} />
                } else if (this.props.elementConfig.name === 'registerPassword') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputPassword} />
                } else if (this.props.elementConfig.name === 'registerPasswordConfirm') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputPasswordConfirm} />
                } else if (this.props.elementConfig.name === 'loginEmail') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputEmail} />
                } else if (this.props.elementConfig.name === 'loginPassword') {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig}
                        onChange={this.props.handleInputPassword} />
                } else {
                    inputElement = <input
                        className={`Input ${this.props.elementCustomClass !== undefined ? this.props.elementCustomClass : ''} `} {...this.props.elementConfig} />
                }
                return inputElement;
            case ('textarea'):
                inputElement = <input className='Input' {...this.props.elementConfig} />
                return inputElement;
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