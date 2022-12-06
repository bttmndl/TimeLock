import React,{useState} from 'react'
import Banner from '../components/Banner/Banner'
import CoinsTable from '../components/CoinsTable'
import MainCoin from '../components/MainCoin'

const Home = () => {
  const [view, setView] = useState(true);
  return (
   <>
    <Banner/>
    {view ? <CoinsTable/> : <MainCoin/>}
    
   </>
  )
}

export default Home