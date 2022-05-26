import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselElements } from "./constants/CarouselElements";

const ImageList = CarouselElements.map((images) => (
  <Carousel.Item>
    <img className="d-block w-100" src={images.image} alt="Slide" />
  </Carousel.Item>
));

export function Home() {
  return (
    <div id="Home" className="w-100px h-100px">
      <Carousel variant="dark">{ImageList}</Carousel>
    </div>
  );
}
