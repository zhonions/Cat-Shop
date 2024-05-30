import "./index.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination = ({ currentPage, totalPages, paginate }: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <button onClick={() => paginate(number)} className={`page-link ${currentPage === number ? 'active' : ''}`}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
