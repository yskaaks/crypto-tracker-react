import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const createPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-button${i === currentPage ? ' active' : ''}`}
          onClick={() => onPageChange(i)} // Fix: Add an arrow function here
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return <div className="pagination">{createPageButtons()}</div>;
};

export default Pagination;
