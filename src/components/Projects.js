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

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "../assets/Swiper.css";

// // import required modules
// import { Pagination } from "swiper";

// <h1 className="Toph1">Projects</h1>
// <Swiper
//   slidesPerView={3}
//   spaceBetween={30}
//   pagination={{
//     clickable: true,
//   }}
//   modules={[Pagination]}
//   className="mySwiper"
// >
//   <SwiperSlide className="SwiperSlide">
//     <img alt=" " src={ProjectsElements[0].image}></img>
//     <div className="SSP">
//       <h1 id="ssph1">{ProjectsElements[0].title}</h1>
//       <p className="sspp">{ProjectsElements[0].text}</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide className="SwiperSlide">
//     <img alt=" " src={ProjectsElements[1].image}></img>
//     <div className="SSP">
//       <h1 id="ssph1">{ProjectsElements[1].title}</h1>
//       <p className="sspp">{ProjectsElements[1].text}</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide className="SwiperSlide">
//     <img alt=" " src={ProjectsElements[2].image}></img>
//     <div className="SSP">
//       <h1 id="ssph1">{ProjectsElements[2].title}</h1>
//       <p className="sspp">{ProjectsElements[2].text}</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide className="SwiperSlide">
//     <img alt=" " src={ProjectsElements[3].image}></img>
//     <div className="SSP">
//       <h1 id="ssph1">{ProjectsElements[3].title}</h1>
//       <p className="sspp">{ProjectsElements[3].text}</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide className="SwiperSlide">
//     <img alt=" " src={ProjectsElements[4].image}></img>
//     <div className="SSP">
//       <h1 id="ssph1">{ProjectsElements[4].title}</h1>
//       <p className="sspp">{ProjectsElements[4].text}</p>
//     </div>
//   </SwiperSlide>
// </Swiper>
