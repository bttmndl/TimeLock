import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import MainCoin from './Component/MainCoin';
import Footer from './Component/Footer';


export default function App() {
  
  return (
    <BrowserRouter>
      <div class="App">
        <Header />
        <MainCoin />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

