import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";

const CountriesTable = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  const renderTableData = () => {
    return currentItems.map((country, index) => {
      return (
        <tr key={index}>
        <td><img src={country.flags.png} alt= {country.flags.alt} /></td>
          <td>{country.name.common}</td>
          <td>{country.region}</td>
          <td>{country.population}</td>
          <td><ul>
            {country.languages && Object.values(country.languages).map((language) => (
              //adding an error boundary 
              <li>{language}</li>
            ))}
             </ul></td>
             <td>{country.population}</td>
             <td>&gt;</td> {/*HTML Codes for Symbols*/}
        </tr>
      );
    });
  };
  
  return (
    <>
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
      <Pagination>{currentPage}-{indexOfLastItem}</Pagination>
    </>
  );
};

export default CountriesTable;
