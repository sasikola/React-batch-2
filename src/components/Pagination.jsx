import React from "react";
import "./Pagination.css"; // Import your CSS for pagination

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
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

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <li>
          <span
            onClick={() => setCurrentPage(1)}
            className={pagination-text ${currentPage === 1 ? "disabled" : ""}}
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
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            Last
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
