import React, { Component } from 'react'

export default class Input extends Component {

    state = {
        inputElement: null
    }

    componentDidMount = () => {

        let inputElement;

        switch (this.props.elementType) {
            case ('input'):
                console.log(this.props)
                inputElement = <input className={`Input ${this.props.elementCustomClass}`} {...this.props.elementConfig} />
                this.setState({
                    inputElement: inputElement
                })
                break;
            case ('textarea'):
                inputElement = <input className='Input' {...this.props.elementConfig} />
                this.setState({
                    inputElement: inputElement
                })
                break;
            default:
                inputElement = <input className='Input' {...this.props.elementConfig} />
                this.setState({
                    inputElement: inputElement
                })
        }
    }

    render() {
        return (
            <>
                {this.state.inputElement}
            </>
        )
    }
}
