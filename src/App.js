import './App.css';
import Header from './Component/Header';
import MainCoin from './Component/MainCoin';
import CoinPage from './Component/CoinPage';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<MainCoin/>} />
          <Route path="/coin/:id" element={<CoinPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

