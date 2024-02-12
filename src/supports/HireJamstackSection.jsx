import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const HireJamstackSection = () => {
  return (
    <section
      className="pattern-square bg-black  "
      style={{ fontFamily: "Roboto", width: "100%" }}
    >
      <Container className="position-relative z-1 py-xl-9 py-5">
        <Row>
          <Col lg={{ span: 10, offset: 1 }} md={12}>
            <Row className="align-items-center g-5">
              <Col lg={6} order={2} className="order-lg-2">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Form className="row needs-validation g-3" noValidate>
                      <Col lg={12}>
                        <div className="mb-3">
                          <h3 className="mb-0">
                            Schedule a free estimate call
                          </h3>
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <Form.Label
                          htmlFor="ScheduleFirstnameInput"
                          className="form-label"
                        >
                          First Name
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="ScheduleFirstnameInput"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter firstname.
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} xs={12}>
                        <Form.Label
                          htmlFor="scheduleLastnameInput"
                          className="form-label"
                        >
                          Last Name
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="scheduleLastnameInput"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter lastname.
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={12}>
                        <Form.Label
                          htmlFor="scheduleEmailInput"
                          className="form-label"
                        >
                          Email
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          id="scheduleEmailInput"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter email.
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={12}>
                        <Form.Label
                          htmlFor="scheduleTextarea"
                          className="form-label"
                        >
                          Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          id="scheduleTextarea"
                          placeholder="Write to us"
                          rows="3"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please write message.
                        </Form.Control.Feedback>
                      </Col>
                      <div className="d-grid">
                        <Button variant="info" type="submit">
                          Let’s work together!
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} order={1}>
                <div className="me-xl-7">
                  <div className="mb-5">
                    <h2 className="h1 mb-4">
                      Hire experienced Jamstack developer
                    </h2>
                    <p className="mb-0">
                      Book a free consultation call with one of our experts and
                      get help with your next moves. It's always good to talk to
                      an expert. It's free!
                    </p>
                  </div>
                  <div className="mb-5">
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-dot"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                        <span className="ms-1">
                          Not sure which technology to choose?
                        </span>
                      </li>
                      <li className="mb-2 d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-dot"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                        <span className="ms-1">
                          Need advice on the next steps?
                        </span>
                      </li>
                      <li className="mb-2 d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-dot"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                        <span className="ms-1">
                          Hesitating on how to plan the execution?
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-md-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center mb-3 mb-md-0 small">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.unsplash.com/photo-1706373193792-52fc0b8b22e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Avatar"
                          className="avatar avatar-lg rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div className="ms-3">
                          <h5 className="mb-0">Jitu Chauhan</h5>
                          <small className="me-4">Head of Sales</small>
                          <small>sales@blockui.com</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HireJamstackSection;
