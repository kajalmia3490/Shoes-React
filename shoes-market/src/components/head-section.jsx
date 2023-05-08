import React from 'react'

const Header = () => {
    return (
        <div
            className="hero h-[540px] w-full h-auto"
            style={{
                backgroundImage: `url("")`,
                backgroundRepeat: 'no-repeat',
            }}
        >

            <div className='w-full h-full border px-5 pb-10 text-gray-600'>
                <div className='mt-20'>
                    <h1 className='font-bold text-4xl'>
                        S A S H A
                    </h1>

                    <h3 className='font-bold text-xl mt-5'>
                        ALL KINDS OF SHOES AVAILABLE HERE. SELECT YOUR BEST SHOES AND CONFIRMATION YOUR ORDER
                    </h3>

                    <h5 className='font-bold mt-2'>
                        YOUR CHOICE IS YOUR BEST PRODUCT. BECAUSE ALL SHOES ARE AMAZING AND COMFORTABLE
                    </h5>

                    <button className='border p-1.5 px-5 bg-black text-white mt-10'>
                        PURCHASE NOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header