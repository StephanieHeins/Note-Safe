import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
          <Navbar id="nav" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="mx-3" id="navbrand">NoteSafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#action1" id="navlink">Notes</Nav.Link>
                    <NavDropdown title="User" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3" className="hovercolor">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className="hovercolor">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className=""
                    aria-label="Search"
                    />
                    <Button variant="outline-light" className="mx-4">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default Header
