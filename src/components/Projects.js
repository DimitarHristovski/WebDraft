import React from "react";
import { ProjectsElements } from "./constants/ProjectsElements";
import { Figure, Container } from "react-bootstrap";

const ProjectList = ProjectsElements.map((projects) => (
  <Figure className="m-2">
    <Figure.Image width={400} height={400} alt="" src={projects.image} />
    <Figure.Caption>
      <h5>{projects.title}</h5>
      <p style={{ maxWidth: "350px" }} className="text-truncate">
        {projects.text}
      </p>
    </Figure.Caption>
  </Figure>
));
export function Projects() {
  return (
    <div id="Projects" className="justify-content-center text-center ">
      <Container>
        <h1>Projects</h1>
        {ProjectList}
      </Container>
    </div>
  );
}
