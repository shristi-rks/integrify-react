import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function DetailInfo ({country, index}) {
    return (
        <div key = {index}>
            <Card> 
            <Card.Header as="h5">
            <Nav.Item>{country.name.common[0]}</Nav.Item>
            <Card.Title> {country.name.common}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{country.capital}</Card.Subtitle> 
            </Card.Header>
            <Card.Img variant="top" src= {country.flags.png} alt={country.alt} />
            <Card.Body>
            <Card.Text>
            The country belongs to <span><strong>{country.region}</strong></span> and <span><strong>{country.subregion}</strong></span>. Located at the <span><strong>{country.latlng[0]}</strong></span>  &deg;N and <span><strong>{country.latlng[1]}</strong></span> &deg;W, this country has population of <span><strong>{country.population}</strong></span> and it has gained the independent, according to the CIA World Factbook.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                
            </Card.Footer>
            </Card>
        </div>
    )
}
export default DetailInfo;