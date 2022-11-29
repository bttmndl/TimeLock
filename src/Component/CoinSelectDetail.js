import React from 'react'

const CoinSelectDetailStyle = {
    marginTop: '30px',
    marginLeft: '20px',
}

export default function CoinSelectDetail() {
  return (
    <div style = {CoinSelectDetailStyle}>
        <h1>Rank: </h1>
        <h1>MarketCap: </h1>
        <h1>Circulating Sypply: </h1>
        <h1>Details: </h1>
    </div>
  )
}
