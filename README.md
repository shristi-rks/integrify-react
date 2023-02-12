# integrify-react
Integrify's react assignment

- create react app
- make Homepage component
- import react-bootstrap
npm install react-bootstrap bootstrap
in index.js add followingconfiguration
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

- GET data from the API https://restcountries.com/v3.1/all
we first use the useState hook to initialize the countries state. Then, we use the useEffect hook to fetch the country data from the API and store it in the countries state.

- use unique key while mapping, in this case since there was no ID, I used index. Note: do not pass key as props
- note different types of image file
- explore bootstrap for table and pagination
- create table and apply pagination
- install react router
npm i -D react-router-dom
- create another page with country information. The URL for country detail will look like this: https://restcountries.com/v3.1/name/{name}
url achived using {`/name/${country.name.common}`}
- link the button to specific country page using react router
- Note: have alot of error while using index as key in Route??
- make card using bootstrap for the country information page
-Make Navbar component, pass countries prop through it to pass to Searchbar component
-create Searchbar component, use hooks for functionality
use useEffect hook to filter the countries based on the country name and store the filtered results in the filteredCountries state.


