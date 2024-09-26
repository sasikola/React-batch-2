import React, { useState } from "react";
import "./Pagination.css"; // Import your CSS

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const [inputValue, setInputValue] = useState(currentPage); // To handle the input box value
  const maxPageDisplay = 7; // Max number of pages to display at once
  let startPage, endPage;
  const pageNumbers = [];

  // Logic to display page numbers
  if (totalPages <= maxPageDisplay) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.ceil(maxPageDisplay / 2)) {
      startPage = 1;
      endPage = maxPageDisplay;
    } else if (currentPage + Math.floor(maxPageDisplay / 2) >= totalPages) {
      startPage = totalPages - maxPageDisplay + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(maxPageDisplay / 2);
      endPage = currentPage + Math.floor(maxPageDisplay / 2);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Input box value change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  // Handle input submit (Go to specific page)
  const handleInputSubmit = (e) => {
    e.preventDefault();
    const pageNumber = Number(inputValue);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    } else {
      alert(`Please enter a number between 1 and ${totalPages}`);
    }
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <form onSubmit={handleInputSubmit} className="pagination-input-form">
          <input
            type="number"
            min="1"
            max={totalPages}
            value={inputValue}
            onChange={handleInputChange}
            className="pagination-input"
          />
          <button type="submit" className="pagination-btn-submit">
            Go
          </button>
        </form>
        <li>
          <span
            onClick={() => setCurrentPage(1)}
            className={`pagination-text ${currentPage === 1 ? "disabled" : ""}`}
          >
            First
          </span>
        </li>
        <li>
          <span
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`pagination-arrow ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            &larr;
          </span>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <span
              onClick={() => setCurrentPage(number)}
              className={`pagination-number ${
                currentPage === number ? "active" : ""
              }`}
            >
              {number}
            </span>
          </li>
        ))}
        <li>
          <span
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`pagination-arrow ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            &rarr;
          </span>
        </li>
        <li>
          <span
            onClick={() => setCurrentPage(totalPages)}
            className={`pagination-text ${
              currentPage > totalPages - 5 ? "disabled" : ""
            }`}
          >
            Last
          </span>
        </li>
      </ul>

      {/* Input box to directly enter the page number */}
    </nav>
  );
};

export default Pagination;
