// import React, { useState } from 'react';
// import ResidentsCard from './ResidentsCard';
// import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
// import './ResidentsList.css'

// function ResidentsList({ residents }) {
// 	const [currentPage, setCurentPage] = useState(1)
// 	const residentsPerPage = 6
	
// 	const indexOfLastResident = currentPage * residentsPerPage
// 	const indexOfFirstResident = indexOfLastResident - residentsPerPage
// 	const currentResidents = residents.slice(indexOfFirstResident, indexOfLastResident)
	
// 	const totalPages = Math.ceil(residents.length / residentsPerPage)
	
// 	const paginate = (pageNember) => {
// 		setCurentPage8(pageNember)
// 	}

// 	const goToPrevPage = () => {
// 		if (currentPage > 1) {
// 			setCurentPage(currentPage - 1)
// 		}
// 	}

// 	const goToNextPage = () => {
// 		if (currentPage < totalPages) {
// 			setCurentPage(currentPage + 1)
// 		}
// 	}

// 	const getPageRange = () => {
// 		const range = 2
// 		let start = Math.max(1, currentPage - range)
// 		let end = Math.min(totalPages, currentPage + range)

		
		
// 		if (currentPage - range < 1) {
// 			end = Math.min(totalPages, end + (range - (currentPage - 1)))
// 		}
// 		if (currentPage + range > totalPages) {
// 			start = Math.max(1, start - (range - (totalPages - currentPage)))
// 		}

// 		return Array.from({ length: end - start + 1 }, (_, i) => start + i)
// 	}



	
// 	return (
// 		<>
// 			<div className="residents">
// 				{currentResidents.map((resident) => (
// 					<ResidentCard key={resident} url={resident} />
// 				))}
// 			</div>
// 			{residents.length > residentsPerPage && (
// 				<div className="pagination">
// 					<button
// 						className={`pagination_button ${
// 							currentPage === 1 ? 'disabled' : ''
// 						}`} onClick={goToPreviousPage} disabled={currentPage === 1}>
						
// 						<FaChevronLeft/>
					
// 					</button>
					
// 					{getPageRange().map((page) => (
// 						<button
// 							key={page}
// 							className={`pagination_button ${
// 								currentPage === page ? 'active' : ''
// 								}`} onClick={() => paginate(page)}
// 						> 
// 							{page}
// 						</button>
// 					))}
					
// 					<button
// 						className={`pagination_button ${
// 							currentPage === totalPages ? 'disabled' : ''
// 						}`} onClick={goToNextPage} disabled={currentPage === totalPages}
// 					>
						
// 						<FaChevronRight/>

// 					</button>
// 				</div>
// 			)}

// 			{residents.length === 0 && (
// 				<h2 className="no-residents">There are no residents.</h2>
// 			)}

// 		</>
// 	);
// }

// export default ResidentsList;


import React, { useState } from 'react';
import ResidentsCard from './ResidentsCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ResidentsList.css';

function ResidentsList({ residents }) {
  const [currentPage, setCurentPage] = useState(1);
  const residentsPerPage = 6;

  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidents = residents.slice(indexOfFirstResident, indexOfLastResident);

  const totalPages = Math.ceil(residents.length / residentsPerPage);

  const paginate = (pageNumber) => {
    setCurentPage(pageNumber);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurentPage(currentPage + 1);
    }
  };

  const getPageRange = () => {
    const range = 2;
    let start = Math.max(1, currentPage - range);
    let end = Math.min(totalPages, currentPage + range);

    if (currentPage - range < 1) {
      end = Math.min(totalPages, end + (range - (currentPage - 1)));
    }
    if (currentPage + range > totalPages) {
      start = Math.max(1, start - (range - (totalPages - currentPage)));
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <div className="residents">
        {currentResidents.map((resident) => (
          <ResidentsCard key={resident} url={resident} />
        ))}
      </div>
      {residents.length > residentsPerPage && (
        <div className="pagination">
          <button
            className={`pagination_button ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>

          {getPageRange().map((page) => (
            <button
              key={page}
              className={`pagination_button ${currentPage === page ? 'active' : ''}`}
              onClick={() => paginate(page)}
            >
              {page}
            </button>
          ))}

          <button
            className={`pagination_button ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {residents.length === 0 && <h2 className="no-residents">There are no residents.</h2>}
    </>
  );
}

export default ResidentsList;
