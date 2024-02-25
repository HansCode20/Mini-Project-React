import { Button, DropdownDivider, DropdownItem, Form, FormControl, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import titleImage from './title.png'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-2 fixed-top">
      <Container>
        <NavbarBrand href="#home">
        <img src={titleImage} alt="Title" width="50px"/>
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
         <DropdownDivider />
              <DropdownItem href="#action/3.4">
              <DropdownItem href="#action/3.2">
               Delivery
              </DropdownItem>
              <DropdownItem href="#action/3.3">Ala Carte</DropdownItem>
             
              </DropdownItem>
            </NavDropdown>
            <Nav.Link className='nav-link'>Contac Me</Nav.Link>
           
          </Nav>
        </NavbarCollapse>
        <NavbarCollapse>
        <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;