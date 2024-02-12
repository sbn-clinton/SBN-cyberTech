import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="bg-black py-5">
      <Container>
        <h1 className="text-center ">
          Easy-to-use antivirus protection you can count on
        </h1>
        <Row className="p-3">
          <Col md={6} sm={12} className="mt-3">
            <div className="cmp-image">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1525373698358-041e3a460346?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="lazy-image lazy-image-loaded w-100 rounded"
                alt=""
                style={{ height: "500px" }} // Adjusted image size
              />
            </div>
          </Col>
          <Col md={6} sm={12} className="mt-3">
            <div className="cmp-text worry_free_section cmp__richtext--color cmp__richtext--color-default">
              <h2 className="fs-24 font-poppins">
                Trusted solutions for your peace of mind:
              </h2>
              <div className="d-flex">
                <AiOutlineCheckCircle size={40} className="text-info" />
                <p className="ml-2 fs-4">
                  <span className="rteFontColor font-color-brand-red-dark fw-700">
                    24/7 device protection
                  </span>
                  &nbsp;with AI technology to automatically block the latest
                  viruses and related threats.
                </p>
              </div>
              <div className="d-flex">
                <AiOutlineCheckCircle size={28} className="text-info" />
                <p className="ml-2 fs-4">
                  <span className="rteFontColor font-color-brand-red-dark fw-700">
                    Real-time identity monitoring and alerts
                  </span>
                  <span className="rteFontColor font-color-gray-90">
                    &nbsp;for greater peace of mind.
                  </span>
                </p>
              </div>
              <div className="d-flex">
                <AiOutlineCheckCircle size={28} className="text-info" />
                <p className="ml-2 fs-4">
                  <span className="rteFontColor font-color-brand-red-dark fw-700">
                    A secure VPN
                  </span>
                  <span className="rteFontColor font-color-gray-90">
                    &nbsp;to keep your personal info protected on the go.
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
