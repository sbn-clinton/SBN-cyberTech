import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you are using it
import { FaDrupal } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";

const HomeSection = () => {
  return (
    <div className="bg-dark-subtle">
      <Container className="bg-dark-subtle my- text-secondary">
        <Row>
          <Col md={6}>
            {/* First Col with text and button */}
            <div className="mb-4">
              <FaDrupal size={20} className="text-info d-inline-block" />
              <p className="d-inline-block mt-4 ">
                {/* Replace the text with your desired content */}
                Most trusted education platform
              </p>
              <h2 className="mt-2">
                {/* Replace the text with your desired content */}Grow your
                skills and advance career
              </h2>
              <p className="mt-3">
                {/* Replace the text with your desired content */}Start, switch,
                or advance your career with more than 5,000 courses,
                Professional Certificates, and degrees from world-class
                universities and companies.
              </p>
              <Button variant="info" className="rounded-3">
                {/* Replace the text with your desired content */}
                Join Free Now
              </Button>
              <Link
                to="/video"
                style={{ textDecoration: "none" }}
                className="popup-youtube fs-4 text-inherit ms-3 text-secondary"
              >
                {/* Replace the text and icon with your desired content */}
                <FaCirclePlay size={30} className="text-info mx-1" />
                Watch Demo
              </Link>
            </div>
          </Col>
          <Col md={6}>
            {/* Second Col with image */}
            <img
              src="https://images.unsplash.com/photo-1514168757508-07ffe9ae125b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Your Alt Text"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSection;
