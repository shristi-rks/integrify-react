import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Component/Navbar';
import CountriesTable from './Component/CountriesTable';

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
      <div>
        <Navbar/>
      </div>
      <div>
     <CountriesTable countries = {countries} /> 
      </div>
    </>
  )
      }
 
export default App;
