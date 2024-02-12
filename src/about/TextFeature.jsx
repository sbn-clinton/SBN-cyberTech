import React, { useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const TextFeature = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation repeatedly
    threshold: 0.5, // Trigger when the section is 50% in view
  });

  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  return (
    <section
      className={`text-feature text-feature-simple-right none ${
        inView ? "in-view" : ""
      }`}
      data-type="default"
      ref={ref}
    >
      <Container fluid>
        <Row>
          <Col
            lg={6}
            className="col-12"
            ref={leftColRef}
            style={{
              transition: "transform 2s ease",
              transform: inView ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="images">
              <Image
                src="https://plus.unsplash.com/premium_photo-1677093906029-1dbde84ba87c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded"
                style={{ width: "100%", height: "400px" }}
              />
              <div className="white-square"></div>
            </div>
          </Col>
          <Col
            lg={5}
            xl={5}
            className="col-12 offset-xl-1 content-container"
            ref={rightColRef}
            style={{
              transition: "transform 2s ease",
              transform: inView ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="content mt-3">
              <div className="title-brand">
                <span className="text eyebrow">OUR CULTURE</span>
              </div>
              <h2 className="title h2">Living our values</h2>
              <div className="h2">
                <p>
                  Making Palo Alto Networks the cybersecurity workplace of
                  choice.
                </p>
              </div>
              <a
                href="/"
                target="_blank"
                className=" text-info"
                rel="noopener"
                data-page-track="true"
                data-page-track-value="about-us:textFeature:simpleRight:Living our values:Learn more"
              >
                Learn more
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default TextFeature;
