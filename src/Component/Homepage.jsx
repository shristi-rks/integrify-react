import CountriesTable from "./CountriesTable";
import { Navbar } from "./Navbar";
function Homepage({countries}) {
    return (
        <>
        <div>
        <Navbar/>
        </div>
        <div>
        <CountriesTable countries = {countries}/>
        </div> 
       </>  
    )

}

export default Homepage;