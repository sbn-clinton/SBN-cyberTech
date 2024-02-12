import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

const HeroCarousel = () => {
  const containerStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="carousel-hero" id="carouselHero" style={containerStyle}>
      <Container className="my-3 text-secondary">
        <Row className="page-view active p-3">
          <Col md={6} className="ctaContainer my-4 " id="hero--card">
            <div className="ctaHeader">
              <h2 className="" role="heading" aria-level="1">
                Welcome!
              </h2>
              <h1 className="display-3" role="heading" aria-level="2">
                Login to SBN-CyberTech:
              </h1>
            </div>
            <span className="ctaDivider"></span>
            <Button variant="info" className="my-3">
              Please select your login
              <AiOutlineArrowRight className="ms-2" />
            </Button>
            <div className="loginLinksListWrapper">
              <ul className="loginLinksList" tabIndex="1">
                <li className=" list-unstyled fs-5 text-info-emphasis my-2">
                  <AiOutlineArrowRight className="me-3" />
                  <a>Falcon platform</a>
                </li>
                <li className=" list-unstyled fs-5 text-info-emphasis my-2">
                  <AiOutlineArrowRight className="me-3" />
                  <a>Lorem, ipsum.</a>
                </li>
                <li className=" list-unstyled fs-5 text-info-emphasis my-2">
                  <AiOutlineArrowRight className="me-3" />
                  <a>Lorem, ipsum dolor.</a>
                </li>
                {/* Additional list items here */}
              </ul>
            </div>
          </Col>
          <Col className="my-4" md={6}>
            <Carousel interval={3000} controls={false} indicators={false}>
              <Carousel.Item>
                <div className="slideCtaWrapper">
                  <h1 className="slideCtaText" role="heading" aria-level="2">
                    How does the Falcon platform stop threats from moving
                    through my cloud?
                  </h1>
                  <div className="slideCtaLinkWrapper">
                    <Button className="my-4" variant="outline-info">
                      Watch now <AiOutlineArrowRight />
                    </Button>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="slideCtaWrapper">
                  <h1 className="slideCtaText " role="heading" aria-level="2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum, ut eius similique dolor?
                  </h1>
                  <div className="slideCtaLinkWrapper">
                    <Button className="my-4" variant="outline-info">
                      Watch now <AiOutlineArrowRight />
                    </Button>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="slideCtaWrapper">
                  <h1 className="slideCtaText " role="heading" aria-level="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam eius similique dolor?
                  </h1>
                  <div className="slideCtaLinkWrapper">
                    <Button className="my-4" variant="outline-info">
                      Watch now <AiOutlineArrowRight />
                    </Button>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroCarousel;
