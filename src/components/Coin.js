import React from 'react'

const Coin = ({face}) => {
    return (
        <div>
            <img className='coin'
                 src={`/${face}.jpg`}
                 alt='coin'/>
            <div>
            </div>
        </div>
    )
};

export default Coin;
