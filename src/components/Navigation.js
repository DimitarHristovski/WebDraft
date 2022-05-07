import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Logo/Logo.png";
import "../assets/Style.css";

export function Navigation() {
  return (
    <div className="Nav">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="text-center ">
          <Navbar.Brand href="#Home">
            <img src={logo} alt="logo" width="240" height="50"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#AUS">AboutUS</Nav.Link>
              <Nav.Link href="#WWD">WhatWeDO</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
