import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';

function Searchbar({countries}){
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    useEffect(() => {
        setFilteredCountries(
            countries.filter(country =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                )
        )
    }, [searchTerm, countries])

    const handleChange = (e) =>{
        e.preventDefault();
        setSearchTerm(e.target.value);
    } 

    if (searchTerm.length > 0) {
        countries.filter((country) => {
            return country.name.common.match(searchTerm);
        });
    return (
        <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="🔍Search by country name" 
              value={searchTerm}
              onChange={handleChange}
            />
            <ul>
            {filteredCountries && Object.values(filteredCountries.map(country => (
                <li>{country.name.common}</li>
            ))) }
            </ul>
          </Form>
    )
}
return (
    <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="🔍Search by country name" 
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
)
}

export default Searchbar;