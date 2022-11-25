import React, { useState,useEffect } from "react";
import axios from 'axios';
import Coin from './Coin';

export default function MainCoin() {
    const [coin, setCoin] = useState([]);
    const getCoins = async()=>{
      const res  = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.data;
      setCoin(data);
      console.log(data);
    }
    
    useEffect(()=>{
      getCoins();
    }, []);
    return (
        <Coin coins={coin}/>
    )
}
