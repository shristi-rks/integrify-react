import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const CountriesTable = ({ currentItem }) => {
  const renderTableData = () => {
    return currentItem.map((country, index) => {
      return (
        <tr key={index}>
        <td><img src={country.flags.png} alt= {country.flags.alt} width={125} height={80} /></td>
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
             <td><Link className="text-decoration-none"  to={`/name/${country.name.common}`}>&gt;</Link></td>{/*HTML Codes for Symbols*/}
        </tr>
      );
    });
  };

  return (
      <Table responsive hover>
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
  );
};

export default CountriesTable;