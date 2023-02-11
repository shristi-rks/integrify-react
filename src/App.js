import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Component/Navbar';
import CountriesTable from './Component/CountriesTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Component/Homepage';
import DetailInfo from './Component/DetailInfo';

function App() {
  const [countries, getCountries] = useState([])
  const API = 'https://restcountries.com/v3.1/all';
  const fetchCountriesData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getCountries(res)
      })
  }
  useEffect(() => {
    fetchCountriesData()
  }, [])
  return (
    <>
    <BrowserRouter>
    <div>
        <Navbar/>
      </div>
      <Routes>
        <Route exact path = "/" element ={<Homepage countries={countries} />} />
        { countries && countries.map((country, index) => <Route path = {`/name/${country.name.common}`} element ={<DetailInfo country={country} key={index} />} /> )}
      </Routes>
    </BrowserRouter>
    </>
  )
      }
 
export default App;
