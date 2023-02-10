import { useEffect, useState } from 'react';
import './App.css';


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
      <h2>Countries</h2>
      <ul>
        {countries.map((country, i) => {
          return <li key={i}>{country.name.common}</li>
        })}
      </ul>
    </>
  )
      }
 
export default App;
