import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './Component/Homepage';
import { Navbar } from './Component/Navbar';

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
        
      </div>
      <ul>
        {countries.map((country, index) => {
          return <Homepage country = {country} key = {index} /> 
        })}
      </ul>
    </>
  )
      }
 
export default App;
