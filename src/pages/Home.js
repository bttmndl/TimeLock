import React,{useState} from 'react'
import Banner from '../components/Banner/Banner'
import CoinsTable from '../components/CoinsTable'
import MainCoin from '../components/MainCoin'
import { CryptoState } from "../CryptoContext";

const Home = () => {
  const {view, setView} = CryptoState();
  return (
   <>
    <Banner/>
    {view==='List' ? <CoinsTable/> : <MainCoin/>}
    
   </>
  )
}

export default Home