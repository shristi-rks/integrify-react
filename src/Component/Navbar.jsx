import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg">
             <Container fluid>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
             <Navbar.Brand href="#">Country</Navbar.Brand>
             </Container>
        </Navbar>
       
    )
}

