import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Coin from './Coin';
import Pagination from "./Pagination";
import Navbar from './Navbar';
import TableHeader from './TableHeader';



function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true' 
 // const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false`;


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setCoins(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const totalPages = 5; // Total number of pages (100 cryptos / 20 per page)

  const paginateResults = (results) => {
    const startIndex = (currentPage - 1) * 20;
    const endIndex = startIndex + 20;
    return results.slice(startIndex, endIndex);
  };

  const paginatedCoins = paginateResults(filteredCoins);


  return (
    <div className="crypto-app">
      <Navbar />
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' placeholder='Search' 
          className='coin-input' onChange={handleChange}/>
        </form>
      </div>

      {paginatedCoins.map(coin => {
        return (
          <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        )
      })}
      <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
