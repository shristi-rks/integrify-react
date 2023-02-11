import CountriesTable from "./CountriesTable";

function Homepage({countries}) {
    return (
        <div>
        <CountriesTable countries = {countries}/>
        </div>
        
    )

}

export default Homepage;