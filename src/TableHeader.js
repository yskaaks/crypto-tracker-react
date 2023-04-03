import React from 'react';
import './TableHeader.css';

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="header-coin-ticker"> 
        <div className="header-coin">Coin</div>
        <div className="header-ticker">Ticker</div>
      </div> {/* Add this line */}
      <div className="header-price">Price</div>
      <div className="header-volume">24h Volume</div>
      <div className="header-price-change">24h Price Change</div>
      <div className="header-market-cap">Market Cap</div>
    </div>
  );
};

export default TableHeader;
