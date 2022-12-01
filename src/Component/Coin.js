import React, { useContext, useState } from 'react';
import { globalState } from './Context';
import CoinItem from './CoinItem';
import { Pagination } from '@material-ui/lab';
import { TextField,ThemeProvider,Container,createTheme, } from '@material-ui/core';

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
  const {text,setText} = useContext(globalState);
  const [page, setPage] = useState(1);
  let filterCoins = [];
  //checking search text empty or not and filter out the data before displaying
  if(text){
    filterCoins = coins.filter(ele=>{
      return ele.id.includes(text) || ele.symbol.includes(text);
    });
  }else{
    filterCoins = [...coins];
  }

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center", marginTop:10, marginBottom:10}}>
        <TextField
            label="Search For a Crypto Currency.."
            variant="outlined"
            style={{ width: "100%", height: 50}}
            onChange={(e) => setText(e.target.value)}
        />
      </Container>
    </ThemeProvider>
    <div style = {CoinStyle}>
        {
          filterCoins.slice((page-1)*20, page*20).map((ele, id) =>{
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
      count = {(filterCoins.length/10).toFixed(0)}
      onChange = {(_,value)=>{
        setPage(value);
        window.scroll(0, 6);
      }}
    />
    </>
  )
}
