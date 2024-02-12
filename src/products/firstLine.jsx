import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import "./firstLine.css";

const FirstLine = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 h-10"
            src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=2"
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="custom-caption custom-left-caption">
          <h1 className="bold-text text-black">Caption 1</h1>
          <p className="bold-text text-black">
            This is a long text for the first slide. You can add more details
            here as needed.
          </p>
          <Button variant="primary" className="rounded-5">
            Register for event
            <ArrowRight style={{ marginLeft: "10px" }} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 h-10"
            src="https://images.pexels.com/photos/4792717/pexels-photo-4792717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption className="custom-caption custom-left-caption">
          <h1 className="bold-text text-black">Caption 2</h1>
          <p className="bold-text text-black">
            Another long text for the second slide. You can add more details
            here as needed.
          </p>
          <Button variant="warning" pill className="rounded-5">
            Register for event
            <ArrowRight style={{ marginLeft: "10px" }} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 h-10"
            src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-caption custom-left-caption">
          <h1 className="bold-text text-black">Caption 3</h1>
          <p className="bold-text text-black">
            Another long text for the third slide. You can add more details here
            as needed.
          </p>
          <Button variant="info" className="rounded-5">
            Register for event
            <ArrowRight style={{ marginLeft: "10px" }} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 h-10"
            src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fourth slide"
          />
        </div>
        <Carousel.Caption className="custom-caption custom-left-caption">
          <h1 className="bold-text text-white">Caption 4</h1>
          <p className="bold-text text-white">
            Another long text for the fourth slide. You can add more details
            here as needed.
          </p>
          <Button variant="secondary" className="rounded-5">
            Register for event
            <ArrowRight style={{ marginLeft: "10px" }} />
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FirstLine;
