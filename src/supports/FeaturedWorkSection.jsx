import React, { useState } from "react";
import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "./FeaturedWorkSection.css"; // Import a CSS file for custom styles

const FeaturedWorkSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const customHoverProps = useSpring({
    transform: hoveredItem === null ? "scale(1)" : "scale(1.1)",
    config: { tension: 200, friction: 20 },
  });

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section className="my-xl-9 my-5" style={{ width: "100%" }}>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="text-center mb-xl-7 mb-5">
              <small className="text-uppercase ls-md fw-semibold">
                Project we done
              </small>
              <h2 className="my-3">Featured work</h2>
              <p className="mb-0">
                We're a web design agency creating next‑level websites by
                strategically blending user experience and brand storytelling.
              </p>
            </div>
          </Col>
        </Row>
        <div className="table-responsive-lg">
          <Row className="flex-nowrap pb-4 pb-lg-0 me-5 me-lg-0">
            <Col lg={4} md={6} xs={12}>
              <animated.div
                className="data-cue-zoomIn custom-hover"
                style={customHoverProps}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Figure className="lift position-relative btn-arrow mb-4">
                  <a href="./portfolio-single.html">
                    <Figure.Image
                      src="https://images.unsplash.com/photo-1674027214993-52de23be5a18?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="portfolio-2"
                      fluid
                      rounded
                      className="img-fluid rounded-3"
                    />
                    <div className="icon-shape icon-lg bg-white rounded-circle icon-arrow shadow-lg">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </a>
                </Figure>
                <h2 className="lh-base h4">
                  <a href="./portfolio-single.html" className="text-reset">
                    Chat GPT for Figma
                  </a>
                </h2>
                <p className="mb-0 text-body-tertiary fw-medium">Development</p>
              </animated.div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <animated.div
                className="data-cue-zoomIn custom-hover"
                style={{ ...customHoverProps, animationDelay: "200ms" }}
              >
                <Figure className="lift position-relative btn-arrow mb-4">
                  <a href="./portfolio-single.html">
                    <Figure.Image
                      src="https://images.unsplash.com/photo-1493497029755-f49c8e9a8bbe?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="portfolio-2"
                      fluid
                      rounded
                      className="img-fluid rounded-3"
                    />
                    <div className="icon-shape icon-lg bg-white rounded-circle icon-arrow shadow-lg">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </a>
                </Figure>
                <h2 className="lh-base h4">
                  <a href="./portfolio-single.html" className="text-reset">
                    Virtual reality
                  </a>
                </h2>
                <p className="mb-0 text-body-tertiary fw-medium">
                  UI/UX Design
                </p>
              </animated.div>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <animated.div
                className="data-cue-zoomIn custom-hover"
                style={{ ...customHoverProps, animationDelay: "400ms" }}
              >
                <Figure className="lift position-relative btn-arrow mb-4">
                  <a href="./portfolio-single.html">
                    <Figure.Image
                      src="https://plus.unsplash.com/premium_photo-1681010317870-44a7ca6f9bee?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="portfolio-2"
                      fluid
                      rounded
                      className="img-fluid rounded-3"
                    />
                    <div className="icon-shape icon-lg bg-white rounded-circle icon-arrow shadow-lg">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </a>
                </Figure>
                <div
                  className="data-cue-zoomIn custom-hover"
                  style={{ animationDelay: "0ms" }}
                >
                  <h2 className="lh-base h4">
                    <a href="./portfolio-single.html" className="text-reset">
                      AI avatar application
                    </a>
                  </h2>
                  <p className="mb-0 text-body-tertiary fw-medium">
                    Web Development
                  </p>
                </div>
              </animated.div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={12}>
            <div className="text-center my-5">
              <Button href="#" variant="info">
                Read case study
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
