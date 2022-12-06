import React, { useState } from 'react';
import CoinItem from './CoinItem';
import { Pagination } from '@material-ui/lab';


const CoinStyle = {
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2.5rem',
    padding: '1vmin',
    background: '#ecf0f3',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    placeItems: 'center',
    overflow: 'hidden',
    fontFamily: 'poppins',
}

export default function Coin({coins}) {
  const [page, setPage] = useState(1);
  
  return (
    <>
    <div style = {CoinStyle}>
        {
            coins.slice((page-1)*15, page*15).map((ele, id) =>{
                return (
                <CoinItem ele = {ele} key ={id}/>
                )
            })
        }
    </div>
    <Pagination 
    style={
        {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color:'yellow',
        backgroundColor: 'white'
        }
    }
    count = {(coins.length/10).toFixed(0)}
    onChange = {(_,value)=>{
        setPage(value);
        window.scroll(0, 6);
    }}
    />
  </>
  );
}
