import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

const CountriesTable = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const handlePageUp = (pageNumber) => setCurrentPage(pageNumber+1);
  const handlePageDown = (pageNumber) => setCurrentPage(pageNumber-1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  const renderTableData = () => {
    return currentItems.map((country, index) => {
      return (
        <tr key={index}>
        <td><img src={country.flags.png} alt= {country.flags.alt}/></td>
          <td>{country.name.common}</td>
          <td>{country.region}</td>
          <td>{country.population}</td>
          <td><ul>
            {country.languages && Object.values(country.languages).map((language, i) => (
              //adding an error boundary 
              //adding unique key to list while mapping
            <li key={i}>{language}</li>
            ))}
             </ul></td>
             <td>{country.population}</td>
             <td>&gt;</td>{/*HTML Codes for Symbols*/}
        </tr>
      );
    });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Languages</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
      <Pagination>
      <p>Flows per page</p>
        <Pagination.Item> {indexOfFirstItem}-{indexOfLastItem}</Pagination.Item>
        <Pagination.Prev onClick={() => handlePageDown(currentPage)}/>
        <Pagination.Next onClick={() => handlePageUp(currentPage)}/>
        </Pagination>
    </div>
  );
};

export default CountriesTable;
