import { useEffect, useState } from 'react';
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
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element ={<Homepage countries={countries}/>} />
        { countries && Object.values(countries).map((country, i) => 
        <Route path = {`/name/${country.name.common}`} key = {i} element ={
        <DetailInfo country={country}/>} /> 
        // add unique key as attribute to the Route and not in DetailInfo
        )}
      </Routes>
    </BrowserRouter>
    </div>
  )
      }
 
export default App;