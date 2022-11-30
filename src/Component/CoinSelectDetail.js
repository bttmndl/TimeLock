import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const CoinSelectDetailStyle = {
    marginTop: '30px',
    marginLeft: '20px',
    position: 'relative',
}

export default function CoinSelectDetail({coindata}) {
  
  return (
    <div style = {CoinSelectDetailStyle}>
        <h1>Rank: {coindata?.market_cap_rank}</h1>
        <h1>Price: ${coindata?.market_data?.current_price.usd}</h1>
        <h2>MarketCap: ${coindata?.market_data?.market_cap?.usd}</h2>
        <h2>Details: </h2><h7>{ReactHtmlParser(coindata?.description?.en.split(". ")[0])}</h7>
    </div>
  )
}
