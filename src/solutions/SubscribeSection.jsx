import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { BiCheckCircle } from "react-icons/bi";

const SubscribeSection = () => {
  const iconStyle = {
    fontSize: "1.5rem",
    marginRight: "0.5rem",
  };

  const textStyle = {
    fontFamily: "Roboto",
    fontWeight: "bold",
    background:
      'url("https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Replace with the actual path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={10} className="offset-md-1">
            {/* cta style 1 */}
            <div
              className="text-center  p-md-7 p-4 rounded-4 pattern-square"
              style={textStyle}
            >
              <div className="mb-6">
                <h2 className="display-6 h1 text-dark">Join for free today.</h2>
                <p className="mb-0 text-dark">
                  Supercharge your team with the best sales acceleration and
                  business automation tools.
                </p>
              </div>

              <Form
                className="row d-flex justify-content-center mb-6"
                noValidate
              >
                <Col lg={6}>
                  <Form.Label
                    htmlFor="subscribeEmail"
                    className="visually-hidden"
                  >
                    Email
                  </Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      id="subscribeEmail"
                      className="form-control border-info"
                      placeholder="Enter your business email"
                      aria-label="Enter your business email"
                      aria-describedby="basic-addon2"
                      required
                    />
                    <Button variant="info" type="submit" id="basic-addon2">
                      Join Now
                    </Button>
                    <Form.Control.Feedback
                      type="invalid"
                      className="text-start"
                    >
                      Please choose an email.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Form>

              <div className="d-flex align-items-center justify-content-center flex-wrap">
                <span className="me-3">
                  <BiCheckCircle style={iconStyle} className="text-dark" />
                  <span className="text-dark ms-2">
                    Try it free for 30 Days.
                  </span>
                </span>
                <span className="me-3">
                  <BiCheckCircle style={iconStyle} className="text-dark" />
                  <span className="text-dark ms-2">
                    No credit card required.
                  </span>
                </span>
                <span>
                  <BiCheckCircle style={iconStyle} className="text-dark" />
                  <span className="text-dark ms-2">Cancel anytime.</span>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeSection;
