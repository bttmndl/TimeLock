import React,{useEffect, useState} from 'react'
import CoinSelectImage from './CoinSelectImage';
import CoinSelectDetail from './CoinSelectDetail';
import axios from 'axios';

const CoinDetailStyle = {
    paddingTop:'30px',
    height: '100vh',
    width: '30%',
    border: '2px solid white',
}
export default function CoinDetail({id}) {
  const [coinImage, setCoinImage] = useState({}); 
  const [coinName, setCoinName] = useState('');
  const [coindata, setcoinData] = useState({});
  let url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const getCoinDetail = async()=>{
    let res = await axios.get(url);
    let dt = await res.data
    setCoinImage(dt.image);
    setCoinName(dt.name);
    setcoinData(dt);
  }
  useEffect(()=>{
    getCoinDetail();
  }, []);
  
  return (
    <div style ={CoinDetailStyle}>
        <CoinSelectImage coinImageUrl={`${coinImage.large}`} coinName={coinName}/>
        <CoinSelectDetail coindata = {coindata}/>
    </div>
  )
}
