import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand style={{ marginLeft: 30, fontWeight: 700 }} href="/">
        Korean
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/hangul">Hangul</Nav.Link>
        <NavDropdown title="Quiz" id="basic-nav-dropdown">
          <NavDropdown.Item href="/quiz/hangul" style={{ color: "#000" }}>
            Quiz Hangul
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
