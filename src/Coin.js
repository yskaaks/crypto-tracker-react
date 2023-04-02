import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="header-name coin">
          <img src={image} alt={`${name} logo`} />
          <h1>{name}</h1>
        </div>
        <div className="header-ticker coin-symbol">
          <p>{symbol}</p>
        </div>
        <div className="header-price coin-price">
          <p>${price}</p>
        </div>
        <div className="header-volume coin-volume">
          <p>${volume.toLocaleString()}</p>
        </div>
        <div className="header-price-change coin-percent">
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
        </div>
        <div className="header-market-cap coin-marketcap">
          <p>${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
