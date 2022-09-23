import React from 'react'
import { Link } from 'react-router-dom';

const SingleCoin = ({coin}) => {
    const {id,name,image,symbol} = coin;
   
  return (
    <div className='bg-gray-800 px-5 py-10 w-[270px] my-3'>
        <Link to={`/coin-details/${id}`}>
        <div className="flex items-center flex-shrink-0 space-x-8">
            <img  className=' object-cover rounded-full h-16 w-16 ' src={image} alt="" />
            <div className="flex-col ">
                <h2 className='text-white font-semibold'>{name}</h2>
                <h2 className='text-white'>{symbol}</h2>
            </div>
        </div></Link>

    </div>
  )
}

export default SingleCoin