import React from "react";
import { WhatWeDoElements } from "./constants/WhatWeDoElements";
import { Row, Col, Container } from "react-bootstrap";

export function WhatWeDo() {
  return (
    <div id="WWD">
      <Container className="text-center">
        <h1>WhatWeDo</h1>

        <Row xs={1} md={2}>
          <Col>
            <img
              width="100%"
              className="img-fluid center-block"
              src={WhatWeDoElements[0].image}
              alt="img"
            ></img>
          </Col>
          <Col className="p-2">
            <h2>Mission</h2>
            <p>{WhatWeDoElements[0].text}</p>
          </Col>
        </Row>
        <Row xs={1} md={2} className="flex-row-reverse">
          <Col>
            <img
              width="100%"
              className="img-fluid"
              src={WhatWeDoElements[1].image}
              alt="img"
            ></img>
          </Col>

          <Col className="p-2">
            <h2>Vision</h2>
            <p>{WhatWeDoElements[1].text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
// <div className="WWD-Container">
//   <h1 className="Top-Header">WhatWeDo</h1>
//   <div className="Above">
//     <imgv
//       src={WhatWeDoElements[0].image}
//       alt="dasdasd"
//       className="image1"
//     ></imgv>
//     <div className="right-text-content">
//       {" "}
//       <h2 className="heading">Mission</h2>
//       <p className="Wpar">{WhatWeDoElements[0].text}</p>
//     </div>
//   </div>
//   <div className="Below">
//     <img
//       src={WhatWeDoElements[1].image}
//       alt="adasdsd"
//       className="image2"
//     ></img>
//     <div className="left-text-content">
//       {" "}
//       <h2 className="heading">Vision</h2>
//       <p className="Wpar">{WhatWeDoElements[1].text}</p>
//     </div>
//   </div>
// </div>
