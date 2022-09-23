import React, { useEffect, useState } from "react";
import SingleCoin from "./SingleCoin";

const Coins = () => {
  const [coins, setCoins] = useState();
  console.log(coins);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div className="bg-black/90 ">
      <div className="text-center py-16">
        <h1 className="text-gray-50 text-2xl font-semibold my-3">
          Availabe Crypto currency
        </h1>
        <h1 className="text-gray-50 font-semibold text-xl">
          Total Crypto coin
        </h1>
      </div>
     <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
    

   {
    coins &&  
      coins.map(coin=>{
        return <SingleCoin key={coin.id} coin={coin}></SingleCoin>
      })
    
   }
     </div>
    </div>
  );
};

export default Coins;
