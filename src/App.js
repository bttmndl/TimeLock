import { makeStyles } from "@material-ui/core";
import './App.css';
import Header from './Component/Header';
import MainCoin from './Component/MainCoin';
import CoinPage from './Component/CoinPage';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "black",
    minHeight: "100vh",
  },
}));


export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
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

