import React, { Component } from 'react'


export class Search extends Component {

    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        if (!this.state.name) {
            alert('Must Be Provide Your Chosen Name!')
            return false
        } else {
            console.log(this.state.name)
        }
    }

    handleBlur = () => {
        if (!this.state.name) {
            alert("You must fill!")
        }
    }

    render() {
        return (
            <div className='flex'>
                <input
                    className='border 
                    border-green-500 
                    focus:bg-gray-100
                    w-full
                    p-1.5'
                    type='search'
                    name='name'
                    value={this.state.name}
                    placeholder='Search your chosen'
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
                <label onClick={this.handleClick}>
                    <i class="fa-solid 
                    fa-magnifying-glass 
                    text-white text-2xl 
                    bg-black 
                    p-1.5 
                    px-3"></i>
                </label>
            </div>
        )
    }
}

export default Search
/**
 * 
 */