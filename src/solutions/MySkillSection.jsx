import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const MySkillSection = () => {
  return (
    <>
      {/* My skill start */}
      <section className="my-xl-10 my-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} md={8} xs={12}>
              <div className="mb-6 mb-lg-0">
                <small className="text-uppercase fw-bold ls-md text-body-tertiary">
                  MY SKILLS
                </small>
                <h2 className="my-3">
                  My areas of <span className="text-info">expertise</span>
                </h2>
                <p className="mb-5">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                  faucibus mollis elit interdum. Duis mollis, ligula magna
                  mollis.
                </p>
                <a href="#!" className="btn btn-info">
                  View More Details
                </a>
              </div>
            </Col>
            <Col lg={7} className="offset-lg-1 col-12">
              <Row>
                <Col md={6}>
                  <Card className="bg-danger bg-opacity-10 border-0 mb-5">
                    <Card.Body>
                      <div className="mb-4">
                        <img
                          src="../assets/images/personal-svg/html5.svg"
                          alt="html"
                        />
                      </div>
                      <div className="mb-4">
                        <h3>HTML & CSS</h3>
                        <p className="mb-0">
                          Nulla vitae elit libero, a pharetra auguc id elit non
                          mi porta gravida.
                        </p>
                      </div>
                      <a
                        href="#!"
                        className="icon-link icon-link-hover link-danger"
                      >
                        Link Text
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          ></path>
                        </svg>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className="bg-warning bg-opacity-10 border-0 mb-5 mb-lg-0">
                    <Card.Body>
                      <div className="mb-4">
                        <img
                          src="../assets/images/personal-svg/figma.svg"
                          alt="html"
                        />
                      </div>
                      <div className="mb-4">
                        <h3>Figma UI Design</h3>
                        <p className="mb-0">
                          Nulla vitae elit libero, a pharetra auguc id elit non
                          mi porta gravida.
                        </p>
                      </div>
                      <a
                        href="#!"
                        className="icon-link icon-link-hover link-warning"
                      >
                        Link Text
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          ></path>
                        </svg>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} mt-md-5>
                  <Card className="bg-info bg-opacity-10 border-0 mb-5">
                    <Card.Body>
                      <div className="mb-4">
                        <img
                          src="../assets/images/personal-svg/react.svg"
                          alt="html"
                        />
                      </div>
                      <div className="mb-4">
                        <h3>React</h3>
                        <p className="mb-0">
                          Nulla vitae elit libero, a pharetra auguc id elit non
                          mi porta gravida.
                        </p>
                      </div>
                      <a
                        href="#!"
                        className="icon-link icon-link-hover link-info"
                      >
                        Link Text
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          ></path>
                        </svg>
                      </a>
                    </Card.Body>
                  </Card>
                  <Card className="bg-success bg-opacity-10 border-0 mb-5 mb-lg-0">
                    <Card.Body>
                      <div className="mb-4">
                        <img
                          src="../assets/images/personal-svg/nodejs.svg"
                          alt="html"
                        />
                      </div>
                      <div className="mb-4">
                        <h3>Node.js</h3>
                        <p className="mb-0">
                          Nulla vitae elit libero, a pharetra auguc id elit non
                          mi porta gravida.
                        </p>
                      </div>
                      <a
                        href="#!"
                        className="icon-link icon-link-hover link-success"
                      >
                        Link Text
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          ></path>
                        </svg>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* My skill end */}
    </>
  );
};

export default MySkillSection;
