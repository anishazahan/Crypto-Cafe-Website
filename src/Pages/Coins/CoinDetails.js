import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CoinDetails = () => {
    const {id} = useParams();

    const [coinDetail,setCoinDetails]=useState({});
    useEffect(()=>{
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCoinDetails(data))
    },[id])

  return (
    <div className='bg-black/90 h-[90vh]'>

        <div className="flex md:flex-col lg:flex-row max-w-6xl mx-auto px-20 justify-between py-16">

            <div className='order-2 md:order-1 text-white'>
              <h1 className='text-3xl'>General Info:</h1>
              <hr />
              <h1>Coin Name: {coinDetail.name}</h1>
              <h1>Market Cap Rank: {coinDetail.market_cap_rank}</h1>
              <h1>
                Origin:{' '}
                {coinDetail.country_origin ? coinDetail.country_origin : 'Not Available'}
              </h1>
              <h1>Contract Address: {coinDetail.contract_address}</h1>
              <h1>Hashing Algorithm: {coinDetail.hashing_algorithm}</h1>
              <h1>Genesis Date: {coinDetail.genesis_date}</h1>
              <h1>Last Updated: {coinDetail.last_updated}</h1>

              <h1 className='text-3xl mt-4'>Scores:</h1>
              <hr />
              <h1>Community Score: {coinDetail.community_score}</h1>
              <h1>Developer Score: {coinDetail.developer_score}</h1>
              <h1>Liquidity Score: {coinDetail.liquidity_score}</h1>
              <h1>Public Interest Score: {coinDetail.public_interest_score}</h1>
            </div>
            <div className='flex order-1 md:order-2 justify-center items-center'>
              <img src={coinDetail.image?.large} alt='coinImg' />
            </div>
        </div>

    </div>
  )
}

export default CoinDetails