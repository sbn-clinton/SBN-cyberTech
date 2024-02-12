import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="text-secondary bg-black"
      data-bs-theme="dark"
      style={{
        width: "100%", // Set the width to 100%
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        marginTop: "75px",
        paddingBottom: "1px",
        fontFamily: "Roboto",
      }}
    >
      <Container>
        <Row>
          <Col md={10} lg={8} xl={6} className="mx-auto">
            <div className="p-4 p-sm-5 bg-opacity-10 rounded">
              <h1>Log in to your account</h1>
              {/* Form START */}
              <Form className="mt-4">
                {/* Email */}
                <Form.Group className="mb-3" controlId="exampleInputEmail1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                {/* Password */}
                <Form.Group className="mb-3" controlId="exampleInputPassword1">
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="*********"
                    />
                    <div
                      className="position-absolute top-50 translate-middle"
                      style={{ right: "10px", cursor: "pointer" }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </Form.Group>
                {/* Checkbox */}
                <Form.Group className="mb-3 form-check">
                  <Form.Check type="checkbox" label="keep me signed in" />
                </Form.Group>
                {/* Button */}
                <Row className="align-items-center">
                  <Col sm={4}>
                    <Button variant="info" type="submit">
                      Sign me in
                    </Button>
                  </Col>
                  <Col sm={8} className="text-sm-end">
                    <span>
                      Don't have an account?{" "}
                      <Link className="text-info" to="/signup">
                        <u>Sign up</u>
                      </Link>
                    </span>
                  </Col>
                </Row>
              </Form>
              {/* Form END */}
              <hr />
              {/* Social-media btn */}
              <div className="text-center">
                <p>Sign in with your social network for quick access</p>
                <ul className="list-unstyled d-sm-flex mt-3 justify-content-center">
                  <li className="mx-2 mt-2">
                    <Button
                      href="#"
                      className="bg-info text-dark btn-outline-info d-inline-block"
                    >
                      <FaFacebookF className=" me-2" /> Sign in with Facebook
                    </Button>
                  </li>
                  <li className="mx-2 mt-2">
                    <Button
                      href="#"
                      className="bg-info text-dark btn-outline-info d-inline-block"
                    >
                      <FaGoogle className=" me-2" /> Sign in with Google
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
