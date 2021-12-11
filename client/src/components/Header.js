import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <Navbar id="nav" expand="lg">
            <Container fluid>
                <Navbar.Brand className="mx-3" id="navbrand">
                    <Link to="/">NoteSafe</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link id="navlink">
                        <Link to="/Notes">Notes</Link>
                    </Nav.Link>
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
                    <Button variant="outline-primary" className="mx-4 searchbtn">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default Header
