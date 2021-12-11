import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
          <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="mx-3 text-success" id="navbrand">NoteSafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#action1" style={{color:'white'}}>Home</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className=""
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className="mx-4">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default Header
