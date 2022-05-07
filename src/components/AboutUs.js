import React, { useState } from "react";
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
// <h1 className="Top-Header">Team</h1>;

// <div className="Person">
//   <img
//     src={AboutUSElements[0].image}
//     alt=""
//     className="img"
//     width="150"
//     height="150"
//   ></img>
//   <h2>{AboutUSElements[0].title}</h2>
//   <p>{AboutUSElements[0].job}</p>
//   <p>{AboutUSElements[0].about}</p>
// </div>
// <div className="Person">
//   <img
//     src={AboutUSElements[1].image}
//     alt=""
//     className="img"
//     width="150"
//     height="150"
//   ></img>
//   <h2>{AboutUSElements[1].title}</h2>
//   <p>{AboutUSElements[1].job}</p>
//   <p>{AboutUSElements[1].about}</p>
// </div>
// <div className="Person">
//   <img
//     src={AboutUSElements[2].image}
//     alt=""
//     className="img"
//     width="150"
//     height="150"
//   ></img>
//   <h2>{AboutUSElements[2].title}</h2>
//   <p>{AboutUSElements[2].job}</p>
//   <p>{AboutUSElements[2].about}</p>
// </div>
// <div className="Person">
//   <img
//     src={AboutUSElements[3].image}
//     alt=""
//     className="img"
//     width="150"
//     height="150"
//   ></img>
//   <h2>{AboutUSElements[3].title}</h2>
//   <p>{AboutUSElements[3].job}</p>
//   <p>{AboutUSElements[3].about}</p>
// </div>
// <div className="Person">
//   <img
//     src={AboutUSElements[4].image}
//     alt=""
//     className="img"
//     width="150"
//     height="150"
//   ></img>
//   <h2>{AboutUSElements[4].title}</h2>
//   <p>{AboutUSElements[4].job}</p>
//   <p>{AboutUSElements[4].about}</p>
// </div>
// <div className="Person">
//   <img
//     src={AboutUSElements[5].image}
//     alt=""
//     className="img"
//     width="150"
//     height="150"
//   ></img>
//   <h2>{AboutUSElements[5].title}</h2>
//   <p>{AboutUSElements[5].job}</p>
//   <p>{AboutUSElements[5].about}</p>
// </div>
