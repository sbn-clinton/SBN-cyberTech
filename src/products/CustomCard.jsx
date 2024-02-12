import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CustomCards = () => {
  return (
    <Container fluid className="px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>

      <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {/* Card 1 */}
        <Col>
          <Card
            className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <Card.Body className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <Card.Title className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Short title, long jacket
              </Card.Title>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>3d</small>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col>
          <Card
            className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <Card.Body className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <Card.Title className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Much longer title that wraps to multiple lines
              </Card.Title>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>Pakistan</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>4d</small>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col>
          <Card
            className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <Card.Body className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <Card.Title className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Another longer title belongs here
              </Card.Title>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill" />
                  </svg>
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3" />
                  </svg>
                  <small>5d</small>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomCards;
