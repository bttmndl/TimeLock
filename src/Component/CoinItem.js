import React from 'react';
import {Link} from 'react-router-dom';


const coinItemStyle = {
  padding : '1rem',
  height: '17rem',
  width: '16rem',
  margin: '0 auto',
  borderRadius: '20px',
  boxSizing: 'border-box',
  background: '#ecf0f3',
  boxShadow: '14px 14px 20px #cbced1, -14px -14px 20px white',
}

const coinitemButtonStyle ={
  padding: '4px',
  width:'80px',
  boxShadow: '14px 14px 20px #cbced1, -14px -14px 20px white',
}

const coinitemImgStyle = {
    marginTop: '0',
    width: '100px',
}

export default function CoinItem({ele}) {
  return (
    <Link to={`/coin/${ele.id}`}>
      <div style={coinItemStyle}>
          <img style={coinitemImgStyle} src={ele?.image} alt=""></img>
          <h3>{ele.id}</h3>
          <h3>${ele.current_price}</h3>
          <button style={coinitemButtonStyle}>Watchlist</button>
      </div>
    </Link>
  )
}


