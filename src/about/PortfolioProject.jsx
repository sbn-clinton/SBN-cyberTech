import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="my-lg-7 py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="mb-6 mb-lg-0">
              <small className="text-primary text-uppercase ls-md fw-bold">
                portfolio
              </small>

              <div className="my-4">
                <h2 className="mb-3">Our favourite portfolio project.</h2>
                <p className="lead mb-0">
                  We’ll design a beautiful, scalable, and modular website that
                  your design team will drool over and marketing team will thank
                  you for.
                </p>
              </div>

              <ListGroup variant="flush" className="mb-0">
                <ListGroup.Item className="d-flex mb-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill text-success text-opacity-50"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <span className="ms-2">
                    Responsive across major breakpoints
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex mb-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill text-success text-opacity-50"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                  <span className="ms-2">
                    Comprehensive design documentation
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <Slider {...settings}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1707145301260-8d5c3dc9f015?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project"
                  className="img-fluid rounded-3"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project"
                  className="img-fluid rounded-3"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="project"
                  className="img-fluid rounded-3"
                />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioProject;
