import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Header() {
  const {openCart, cartQuantity} = useShoppingCart ()
  return (
    <Navbar bg="light" expand="lg" className="mb-3 sticky-top">
      <Container >
        <Navbar.Brand to="/" as={NavLink}>SHOP Tricky</Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/addresses" as={NavLink}>Our Shops</Nav.Link>
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

        <div className="d-flex burger">
     
          <Nav.Link className="icon position-relative" onClick={openCart}><span className="material-symbols-outlined ">
            shopping_cart 
          </span>
           <div className="position-absolute rounded-circle bg-danger d-flex justify-content-center align-items-center count_custom"
          > {cartQuantity}</div>
           </Nav.Link>
          
          

          <Nav.Link className="icon" ><span className="material-symbols-outlined">
            account_circle
          </span></Nav.Link>
          
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

      </Container>
    </Navbar>
  )
}