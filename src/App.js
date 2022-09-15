import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true').then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error));
  }, []);

 

  return (
    <div className="crypto-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input'/>
        </form>
      </div>
      
    </div>
  );
}

export default App;
