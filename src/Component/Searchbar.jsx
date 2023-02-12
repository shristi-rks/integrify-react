import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Searchbar({countries}){
    return (
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="🔍Search by country name" 
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    )
}

export default Searchbar;