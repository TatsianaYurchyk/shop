import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";

export function Header (){
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">SHOP Tricky</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">NEW!</Nav.Link>
            <NavDropdown title="Positions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cloth</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Accessoires
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shoes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}