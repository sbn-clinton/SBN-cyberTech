import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomeCards = () => {
  return (
    <section className="mb-3">
      <Container>
        <h2 className="text-center display-3">We stop breaches.</h2>
        <Row className="">
          <Col md={4}>
            <Card className="text-center bg-black text-secondary">
              <Card.Body>
                <Card.Title className="fs-1 ">Prepare</Card.Title>
                <Card.Text>
                  We help you prepare and train to defend your organization
                  against sophisticated threat actors.
                </Card.Text>
                <Button variant="outline-info" href="/" target="_blank">
                  Prepare for advanced threats
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center bg-black text-secondary">
              <Card.Body>
                <Card.Title className="fs-1 ">Respond</Card.Title>
                <Card.Text>
                  We help you respond to attacks and recover from incidents with
                  speed and precision.
                </Card.Text>
                <Button variant="outline-info" href="/" target="_blank">
                  Respond to widespread attacks
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center bg-black text-secondary">
              <Card.Body>
                <Card.Title className="fs-1 ">Fortify</Card.Title>
                <Card.Text>
                  We provide actionable recommendations so you can fortify your
                  cybersecurity practices and controls.
                </Card.Text>
                <Button variant="outline-info" href="/" target="_blank">
                  Fortify your cybersecurity posture
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeCards;
