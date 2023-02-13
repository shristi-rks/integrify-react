import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { NavBar } from "./NavBar";
import { PaginatedTable } from "./PaginationedTable";

function Homepage({countries}) {
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
    return (
        <>
        <NavBar countries = {countries}/>
        <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="🔍Search by country name" 
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
        <div>
        <PaginatedTable countries={filteredCountries.length > 0 ? filteredCountries : countries} />
        </div> 
       </>  
    )
}

export default Homepage;