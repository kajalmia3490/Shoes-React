import React, { Component } from 'react'

export class Button extends Component {
    state = {
        button: '',
        color: ''
    }
    handleClick = (event) => {
        if (true) {
           this.setState({button: 'Purchased'})
           alert('Your product added')
        }
    }
    render() {
        const { button } = this.state
        return (
            <div>
                <button
                    className='border w-full rounded mt-3 p-1.5 text-white bg-orange-600'
                    onClick={this.handleClick}>
                    {button ? 'Purchased' : 'Purchase'}
                </button>
            </div>
        )
    }
}

export default Button