import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchedCountry = ({filteredCountries}) => {
        return (    
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
        <tbody>
            { filteredCountries.map((country, i) => (
                      <tr key ={i}>
                      <td><img src={country.flags.png} alt= {country.flags.alt}/></td>
                      <td>{country.name.common}</td>
                      <td>{country.region}</td>
                      <td>{country.population}</td>
                      <td><ul>
                        {country.languages && Object.values(country.languages).map((language, i) => (
                        <li key={i}>{language}</li>
                        ))}
                         </ul></td>
                         <td><Link to={`/name/${country.name.common}`}>&gt;</Link></td>
                         </tr>
            ))}
        </tbody>
      </Table>
        )}
    


export default SearchedCountry;