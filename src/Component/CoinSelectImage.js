import React from 'react';


const CoinSelectImageStyle = {
    marginTop: '50px',
    padding : '1rem',
    height: '17rem',
    width: '25rem',
    margin: '0 auto',
    borderRadius: '20px',
    boxSizing: 'border-box',
    background: '#ecf0f3',
    boxShadow: '14px 14px 20px #cbced1, -14px -14px 20px white',
}

const coinitemImgStyle = {
  marginTop: '4px',
  marginLeft: '80px',
  width: '200px',
  alignItem: 'center',
}

const coinNameStyle = {
  marginLeft: '125px',
}

export default function CoinSelectImage({coinImageUrl, coinName}) {
  
  return (
    <div style ={CoinSelectImageStyle}>
        <img style={coinitemImgStyle} src={coinImageUrl} alt=""></img>
        <h2 style={coinNameStyle}>{coinName}</h2>
    </div>
  )
}
