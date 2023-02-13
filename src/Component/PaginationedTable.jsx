import { useState } from "react";
import { Pagination } from "react-bootstrap";
import CountriesTable from "./CountriesTable";

export const PaginatedTable= ({countries}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const handlePageUp = (pageNumber) => setCurrentPage(pageNumber+1)
     
    const handlePageDown = (pageNumber) => {
        setCurrentPage(pageNumber -1);   
    }
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const handleItemsPerPage = (e) => {
      setItemsPerPage(e.target.value)
    }

    return (
        <>
        <CountriesTable currentItem={currentItems} />
        <Pagination>
        <p>Flows per page</p>
        <select onChange= {handleItemsPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
          <Pagination.Item> {indexOfFirstItem + 1}-{indexOfLastItem}</Pagination.Item>
          <Pagination.Prev disabled ={currentPage ===1} onClick={() => handlePageDown(currentPage)}/>
          <Pagination.Next onClick={() => handlePageUp(currentPage)}/>
          </Pagination>
          </>
    )
  
}