import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  // Set the number of items on each page
  // const pagesCount = itemsCount / pageSize;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // If the pagination has only one page it doesn't render anything
  if (pagesCount === 1) return null;
  // Create an array like this [1 ... pagesCount].map()
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <span onClick={() => onPageChange(page)} className="page-link">
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
