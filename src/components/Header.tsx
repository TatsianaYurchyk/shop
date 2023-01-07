import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";

export function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-3 sticky-top">
      <Container className="me-auto position-relative">
        <Navbar.Brand href="#home">SHOP Tricky</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="/shop">Home</Nav.Link>
            <Nav.Link href="/adresses">Our Shops</Nav.Link>
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
            <div className="position-absolute top-0 end-0 d-flex">
            <Nav.Link  ><span className="material-symbols-outlined">
              shopping_cart
            </span></Nav.Link>
            <Nav.Link  ><span className="material-symbols-outlined">
              account_circle
            </span></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}