import React from "react";
import { Col, Row, Form, Button, InputGroup } from "react-bootstrap";
import { EyeSlash, Google, Facebook } from "react-bootstrap-icons";

const SignUp = () => {
  return (
    <div className="wave-container text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="border-none"
      >
        <path
          className="border-none"
          fill="#0dcaf0"
          fill-opacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,122.7C480,139,600,213,720,245.3C840,277,960,267,1080,256C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <Row className="justify-content-center mb-6 bg-info border-none">
        <Col xl={5} lg={6} md={8} xs={12}>
          <div className="card shadow-sm mb-3 bg-info border-none">
            <div className="card-body bg-info border-none">
              <Form
                className="needs-validation mb-6 bg-info text-black"
                noValidate
              >
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="signupFullnameInput">
                    Full Name
                  </Form.Label>
                  <Form.Control type="text" id="signupFullnameInput" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter full name
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="signupEmailInput">
                    Email
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="email" id="signupEmailInput" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="formSignUpPassword">Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      id="formSignUpPassword"
                      required
                    />
                    <InputGroup.Text>
                      <EyeSlash className="bi-eye-slash passwordToggler" />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      Please enter password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="formSignUpConfirmPassword">
                    Confirm Password
                  </Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      id="formSignUpConfirmPassword"
                      required
                    />
                    <InputGroup.Text>
                      <EyeSlash className="bi-eye-slash passwordToggler" />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      Please enter password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <div className="mb-3">
                  <div className="mb-4 d-flex align-items-center justify-content-between text-black">
                    <Form.Check
                      type="checkbox"
                      id="signupCheckTextCheckbox"
                      label={
                        <>
                          <a href="#" className="text-black ">
                            Terms of Use
                          </a>
                          &amp;
                          <a href="#" className="text-black ">
                            Privacy Policy
                          </a>
                        </>
                      }
                    />
                  </div>
                </div>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </div>
              </Form>

              <span className="text-black">
                Sign up with your social network.
              </span>
              <div className="d-grid mt-3">
                <Button variant="google" className="btn btn-google text-black">
                  <span className="me-2">
                    <Google />
                  </span>
                  Continue with Google
                </Button>
              </div>
              <div className="d-grid mt-2">
                <Button
                  variant="facebook"
                  className="btn btn-facebook text-black"
                >
                  <span className="me-2">
                    <Facebook />
                  </span>
                  Continue with Facebook
                </Button>
              </div>
            </div>
          </div>

          <span>
            Already have an account?
            <a href="signin.html" className="text-black ">
              Sign in here.
            </a>
          </span>
        </Col>
      </Row>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0dcaf0"
          fill-opacity="1"
          d="M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,106.7C840,64,960,32,1080,42.7C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default SignUp;
