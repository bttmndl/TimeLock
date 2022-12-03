import React, { useContext, useEffect, useState } from 'react';
import TableView from './TableView';
import { globalState } from './Context';
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
  const {text,view} = useContext(globalState);
  const [page, setPage] = useState(1);
  let filterCoins = [];
  useState(()=>{
    
  },[view]);
  //checking search text empty or not and filter out the data before displaying
  if(text){
    filterCoins = coins.filter(ele=>{
      return ele.id.includes(text) || ele.symbol.includes(text);
    });
  }else{
    filterCoins = [...coins];
  }
  return (
    <>
      { view ? (
          <TableView coins={filterCoins} />
        ) 
        : (
        <div style = {CoinStyle}>
            {
              filterCoins.slice((page-1)*15, page*15).map((ele, id) =>{
                  return (
                    <CoinItem ele = {ele} key ={id}/>
                  )
              })
            }
        </div>
        )
      }
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
        count = {(filterCoins.length/10).toFixed(0)}
        onChange = {(_,value)=>{
          setPage(value);
          window.scroll(0, 6);
        }}
      />
  </>
  );
}
