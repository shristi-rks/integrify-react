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

    const sortCountries =(countries) => {
        return countries.sort((a,b) => {
          return a.name.common > b.name.common ? 1 : -1; //if a > b move a back(+1 & -1 from index)
        })
    }

    const prettyCountries = filteredCountries.length > 0 ? sortCountries(filteredCountries) : sortCountries(countries)

    //simplify code to pass different props according to condition. solves the error of reloading the page
    
    return (
        <>
        <div className='d-flex justify-content-between'>
        <NavBar countries = {countries}  />
        <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="🔍Search by country name" 
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
      </div>
        <div>
        <PaginatedTable countries={prettyCountries} />
        </div> 
       </>  
    )
}

export default Homepage;