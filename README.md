# integrify-react
Integrify's react assignment

- create react app
- make Homepage component
- import react-bootstrap
npm install react-bootstrap bootstrap
in index.js add followingconfiguration
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

- make Navbar component
- GET data from the API https://restcountries.com/v3.1/all
- use unique key while mapping, in this case since there was no ID, I used index. Note: do not pass key as props
- note different types of image file
- explore bootstrap for table and pagination
- create table and apply pagination
- install react router
npm i -D react-router-dom
- create another page with country information. he URL for country detail will look like this: https://restcountries.com/v3.1/name/{name}