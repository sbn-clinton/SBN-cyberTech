import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsBootstrap,
  BsFileCode,
  BsGear,
  BsFileEarmarkText,
  BsFileRichtext,
} from "react-icons/bs";

const FeaturedHighlights = () => {
  return (
    <Container className="mt-5" style={{ fontFamily: "Roboto", width: "100%" }}>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} md={12}>
          <div className="mb-8">
            <h2 className="fw-bold display-5 mb-3">
              Geeks- Feature Highlights
            </h2>
            <p className="lead pe-lg-22">
              If you use Geeks UI, this is the next level. We've put in the work
              to create high-quality design and bootstrap components.
            </p>
          </div>
          <Row>
            <Col md={6} xs={12}>
              <div className="mb-6">
                <BsBootstrap className="mb-4 text-info " size={50} />
                <h3 className="fw-semibold">Made with Bootstrap 5</h3>
                <p>
                  Every code snippet you'll get is written in{" "}
                  <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Bootstrap 5
                  </a>{" "}
                  in a way that seamlessly integrates with Geeks UI.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="mb-6">
                <BsFileCode className="mb-4 text-info " size={50} />
                <h3 className="fw-semibold">Documented Code</h3>
                <p>
                  How to install Geeks UI and get up and running. It covers all
                  crucial information about how to get started, customize
                  template & components usage.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="mb-6">
                <BsGear className="mb-4 text-info " size={50} />
                <h3 className="fw-semibold">Gulp - toolkit to automate</h3>
                <p>
                  Full tasks automation. Start your development process fast and
                  easy with Node.js and{" "}
                  <a
                    href="https://gulpjs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Gulp
                  </a>{" "}
                  setup. Configuration files are included.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="mb-6">
                <BsFileEarmarkText className="mb-4 text-info " size={50} />
                <h3 className="fw-semibold">Easy to Customize with Sass</h3>
                <p>
                  Geeks UI is built using Sass. Easily change colors, typography
                  and much more. Sass is the most mature, stable, and powerful
                  professional-grade CSS extension language in the world.
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="mb-6">
                <BsFileRichtext className="mb-4 text-info " size={50} />
                <h3 className="fw-semibold">80+ Flexible Components</h3>
                <p>
                  Simple and accessible Bootstrap 5 components & lots of new
                  flexible, customizable and reusable elements you can use
                  across the website and application.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedHighlights;
