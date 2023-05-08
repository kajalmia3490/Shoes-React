import React from 'react'
import Button from './button'
import Img from '../components/images/shoe1.jpg'


const Shoe = (props) => {
    return (
        <div className='mt-5 p-5 border rounded border-gray-300'>
            <div>
                <img src={Img} alt='...'/>
            </div>
            <div className='font-bold text-xl'>
                {props.device}
            </div>
            <p>
                {props.paragraph}
            </p>
            <p className='font-bold text-xl'>
                <price>Price: </price>
                {props.price}
            </p>
            <Button />
        </div>
    )
}

export default Shoe