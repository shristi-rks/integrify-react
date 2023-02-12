import CountriesTable from "./CountriesTable";
import { NavBar } from "./NavBar";
function Homepage({countries}) {
    return (
        <>
        <div>
        <NavBar/>
        </div>
        <div>
        <CountriesTable countries = {countries}/>
        </div> 
       </>  
    )

}

export default Homepage;