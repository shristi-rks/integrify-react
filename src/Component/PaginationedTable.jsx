import { useState } from "react";
import { Pagination } from "react-bootstrap";
import CountriesTable from "./CountriesTable";

export const PaginatedTable= ({countries}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const handlePageUp = (pageNumber) => setCurrentPage(pageNumber+1);
    const handlePageDown = (pageNumber) => setCurrentPage(pageNumber-1);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <>
        <CountriesTable currentItem={currentItems} />
        <Pagination>
        <p>Flows per page</p>
          <Pagination.Item> {indexOfFirstItem + 1}-{indexOfLastItem}</Pagination.Item>
          <Pagination.Prev onClick={() => handlePageDown(currentPage)}/>
          <Pagination.Next onClick={() => handlePageUp(currentPage)}/>
          </Pagination>
          </>
    )
  
}