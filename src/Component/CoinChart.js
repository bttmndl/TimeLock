import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

const CoinChartStyle = {
    height: '100vh',
    width: '70%',
    border: '2px solid yellow'
}
export default function CoinChart({id}) {
  const [days, setDays] = useState(1);
  const [historicData, setHistoricData] = useState();
  
  let url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
  const getHistoricData = async()=>{
    const res = await axios.get(url);
    const dt = await res.data;
    setHistoricData(dt.prices);
  }
  
  useEffect(()=>{
    getHistoricData();
  },[id,days])
  
  return (
    <div style={CoinChartStyle}>
        <Line 
          data = {{
            labels: historicData.map((ele)=>{
              let date = new Date(ele[0]);
              let time = date.getHours() >12 ? `${date.getHours()-12}:${date.getMinutes()} PM`
            })
          }}
        />

    </div>
  )
}
