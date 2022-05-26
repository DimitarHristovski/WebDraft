import React from "react";
import { AboutUSElements } from "./constants/AboutUsElements";
import "../assets/Style.css";
import { Row, Col, Container } from "react-bootstrap";

const PersonList = AboutUSElements.map((persons) => (
  <Col>
    <img
      className=" rounded-circle"
      src={persons.image}
      alt=""
      width="150"
      height="150"
    ></img>
    <h2>{persons.title}</h2>
    <p>{persons.job}</p>
    <p>{persons.about}</p>
  </Col>
));

export function AboutUS() {
  return (
    <Container id="AUS" className="text-center  ">
      <h1>Who we are</h1>
      <Row xs={1} md={3} xlg={6}>
        {PersonList}
      </Row>
    </Container>
  );
}
