import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';

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
      <h1>coingraph</h1>
        {/* <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            /> */}

    </div>
  )
}
