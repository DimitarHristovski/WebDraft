import React from "react";
import "../assets/Footer.css";
import { Row, Col, Container } from "react-bootstrap";
import logo from "./Logo/Logo.png";
import { ContactUs } from "./ContactUs";
export function Footer() {
  return (
    <div className="Footer">
      <Container>
        <Row xs={1} md={3}>
          <Col className="m-3 ">
            <img src={logo} alt="logo" width={240} height={50} />
          </Col>
          <Row xs={1} md={1}></Row>
          <Row xs={1} md={1}>
            <h5>Contact</h5>

            <Col>
              <ContactUs />
            </Col>
          </Row>
        </Row>
      </Container>
      <Row>
        <hr></hr>
        <Col>
          {" "}
          <p>Created © Copyright by Dimitar Hristovski</p>
        </Col>
        <Col>
          {" "}
          <p>Social Follow</p>
        </Col>
      </Row>
    </div>
  );
}
