import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ coursesPerPage, totalCourses, currentPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item${currentPage === number ? 'active' : ''}`}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number);
                        }} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
