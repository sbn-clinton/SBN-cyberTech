import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TestimonialsSection = () => {
  const textStyle = {
    fontFamily: "Roboto", // Set font family to Roboto
    fontWeight: "bold", // Set font weight to bold
  };

  return (
    <section className="py-xl-9 py-5 bg-black">
      <Container>
        <Row>
          <Col xl={8} md={{ span: 8, offset: 2 }}>
            <div className="text-center mx-xl-7 mb-5">
              <h2 className="mb-3" style={textStyle}>
                Read the real-life success stories of the companies and
                industries.
              </h2>
              <a
                href="#!"
                className="icon-link icon-link-hover fw-semicold text-info"
                style={textStyle}
              >
                Browse all customer stories
              </a>
            </div>
          </Col>
        </Row>
        <div className="table-responsive-lg">
          <Row className="flex-nowrap pb-5 me-5 me-lg-0">
            <Col lg={4} md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body className="p-lg-5">
                  <figure className="mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="logo"
                      width="100"
                      height="50"
                      className="rounded-5"
                    />
                  </figure>
                  <p className="mb-0" style={textStyle}>
                    “Lorem ipsum dolor sit amet cons ectetur adipiscing elit
                    uisque sagittis risus sed dolor lobortis, non rutrum massa
                    ultricies aecenas tempor, nisi nec tempus lobortis”
                  </p>
                  <div className="mt-4">
                    <h5 className="mb-0 text-info" style={textStyle}>
                      Chiamaka Odinaka
                    </h5>
                    <small style={textStyle}>Senior Advocate</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body className="p-lg-5">
                  <figure className="mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="logo"
                      width="100"
                      height="50"
                      className="rounded-5"
                    />
                  </figure>
                  <p className="mb-0" style={textStyle}>
                    “Aenean pharetra finibus mauris a porttitor. Nam dui tortor,
                    finibus sit amet feugiat porta, tempus in odio. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus.”
                  </p>
                  <div className="mt-4">
                    <h5 className="mb-0 text-info" style={textStyle}>
                      Chideraa Peter
                    </h5>
                    <small style={textStyle}>CyberSecurity Manager</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body className="p-lg-5">
                  <figure className="mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="logo"
                      width="100"
                      height="50"
                      className="rounded-5"
                    />
                  </figure>
                  <p className="mb-0" style={textStyle}>
                    “Pellentesque sit amet turpis porta augue pretium dictum.
                    Pellentesque commodo bitur ut massa cursus, congue augue
                    vitae, efficitur metus.”
                  </p>
                  <div className="mt-4">
                    <h5 className="mb-0 text-info" style={textStyle}>
                      Somto Bernard
                    </h5>
                    <small style={textStyle}>
                      Senior Research Program Manager
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
