import React from 'react'
import CoinDetail from './CoinDetail';
import CoinChart from './CoinChart';
import { useParams } from 'react-router-dom';


const CoinpageStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}
export default function CoinPage() {
  let {id} = useParams(); 
  
  return (
    <div style={CoinpageStyle}>
      <CoinDetail id={id}/>
      <CoinChart id={id}/>
    </div>
  )
}
