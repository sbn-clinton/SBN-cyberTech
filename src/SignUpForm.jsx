import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div
      className="text-secondary bg-black"
      data-bs-theme="dark"
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        marginTop: "75px",
        paddingBottom: "1px",
        fontFamily: "Roboto",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form className="form-styled">
              <h1 className="text-center mb-4">Create an account</h1>
              <p className="text-center fs-6 text-muted mb-5">
                Please fill out the form below to sign up.
              </p>
              {/* Full name */}
              <Form.Group className="mb-3">
                <Form.Label>Full name</Form.Label>
                <div className="input-group">
                  <div className="icon-box">
                    <AiOutlineUser className="text-info m-2" />
                  </div>
                  <Form.Control
                    type="text"
                    value={fullName}
                    onChange={handleFullNameChange}
                  />
                </div>
              </Form.Group>
              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <div className="input-group">
                  <div className="icon-box">
                    <AiOutlineMail className="text-info m-2" />
                  </div>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </Form.Group>
              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <div className="icon-box">
                    <AiOutlineLock className="text-info m-2" />
                  </div>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </Form.Group>
              {/* Footer */}
              <Row className="align-items-center">
                <Col md="auto">
                  <div className="custom-control custom-checkbox mb-3 mb-md-0">
                    <Form.Check
                      type="checkbox"
                      id="sign-in-checkbox"
                      label={
                        <span>
                          I agree to{" "}
                          <Link
                            to="#"
                            className="text-info text-decoration-none"
                          >
                            terms and conditions
                          </Link>
                        </span>
                      }
                    />
                  </div>
                </Col>
                <Col md>
                  <div className="text-center text-md-right">
                    <Button variant="outline-info" type="submit">
                      Sign up now
                    </Button>
                  </div>
                </Col>
              </Row>
              {/* Link */}
              <p className="text-center text-muted mt-5 mb-0">
                <small>
                  Already a member?{" "}
                  <Link to="/login" className="text-info text-decoration-none">
                    Sign in
                  </Link>
                  .
                </small>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpForm;
