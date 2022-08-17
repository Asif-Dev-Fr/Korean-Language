import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">

        <Navbar.Brand style={{ marginLeft: 30, fontWeight: 700 }} href="/">Korean</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/hangul">Hangul</Nav.Link>
        </Nav>
      
    </Navbar>
  );
};

export default NavbarComponent;
