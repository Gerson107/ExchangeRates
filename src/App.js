import React, { useState, useEffect } from "react";
import "./App.css";
import History from "./components/History";
import flagCol from "./components/Flag_of_Colombia.svg";
import flagEur from "./components/Flag_of_Europe.svg.png";
function App() {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await fetch(
          `https://openexchangerates.org/api/latest.json?app_id=9a4620dbba0c44ccbb35458a801ed63f`
        );
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        console.log(error);
      }
    };
    getRates();
  }, []);

  return (
    <>
      <div className="App">
        <h2>Base: USD-Dolar</h2>
        <p>Latest report</p>
        <div className="target">
          <div className="listRates">
            <img className="images1" src={flagCol} alt="images1"></img>
            <h2>COP-Peso Colombiano</h2>
            <p>{exchangeRates?.COP}</p>
          </div>
          <div className="listRates">
            <img className="images1" src={flagEur} alt="images1"></img>
            <h2>EUR-Euro</h2>
            <p>{exchangeRates?.EUR}</p>
          </div>
        </div>
      </div>
      <History />
    </>
  );
}

export default App;
