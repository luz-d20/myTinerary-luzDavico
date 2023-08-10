import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

export default function Navigation() {
  /*Defino Navbar inicializándolo como Falso */
  const [navbar, setNavbar] = useState(false)
  /*Sí scroll > 100px Navbar pasa a ser True*/
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  /*Ejecuto la función changeBackground cada vez que se produce un scroll*/
  window.addEventListener('scroll', changeBackground)
  /* Con un classname ternario: si es TRUE, bg de color sólido / si es FALSE, transparente */
  return (
    <Navbar variant={navbar? "light" : "dark"} fixed="top" expand="lg" className={navbar ? "bg-light p-30" : "bg-transparent p-30"}>
        <Container fluid>
          <Navbar.Brand className="flex-row nav-brand" href="/"><img width="100" height="100" src="/myTinerary_logo.png" alt="logo" />
          <h1 className="green mobile-hide"><span>my</span>Tinerary</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end nav-list h5" style={{ width: "100%" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cities">Cities</Nav.Link>
            <Nav.Link href="#link">
              <img width="30" height="30" src="/user_png.png" alt="user icon" />
              Log In
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}