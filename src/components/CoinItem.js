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
  
}

const coinitemButtonStyle ={
  padding: '4px',
  width:'80px',
  cursor: 'pointer',
}

const h3Style = {
  fontWeight: 'bold',
  color: 'black',
}

const coinitemImgStyle = {
    marginTop: '0',
    width: '100px',
}

export default function CoinItem({ele}) {
  return (
    <Link to={`/coins/${ele.id}`}>
      <div style={coinItemStyle}>
          <img style={coinitemImgStyle} src={ele?.image} alt=""></img>
          <h3 style={h3Style}>{ele.id}</h3>
          <h3 style={h3Style}>${ele.current_price}</h3>
          <br></br>
          <button style={coinitemButtonStyle}>Watchlist</button>
      </div>
    </Link>
  )
}


