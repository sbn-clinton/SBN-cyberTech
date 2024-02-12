import React from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import { FaStar, FaArrowAltCircleRight } from "react-icons/fa";

const SevenLine = () => {
  const cardStyle = {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "gray",
    backgroundColor: "black",
    margin: "10px",
  };

  const iconStyle = {
    display: "inline-block",
    marginRight: "10px",
    fontSize: "40px",
  };

  const forwardIconStyle = {
    fontSize: "20px",
  };

  const starContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // Align items at the start and end of the container
    marginBottom: "10px",
  };

  const starStyle = {
    fontSize: "24px",
    marginRight: "5px",
    opacity: 1,
    display: "inline-block",
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>
                <FaStar className="text-info" style={iconStyle} />
                Card Title 1
              </Card.Title>

              <Card.Text>
                Your long text goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Card.Text>
              <div style={starContainerStyle}>
                <div>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar className="text-info" key={i} style={starStyle} />
                  ))}
                </div>
                <div>
                  <FaArrowAltCircleRight
                    className="text-info"
                    style={forwardIconStyle}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>
                <FaStar className="text-info" style={iconStyle} />
                Card Title 2
              </Card.Title>
              <Card.Text>
                Your long text goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Card.Text>
              <div style={starContainerStyle}>
                <div>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar className="text-info" key={i} style={starStyle} />
                  ))}
                </div>
                <div>
                  <FaArrowAltCircleRight
                    className="text-info"
                    style={forwardIconStyle}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>
                <FaStar className="text-info" style={iconStyle} />
                Card Title 3
              </Card.Title>

              <Card.Text>
                Your long text goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Card.Text>
              <div style={starContainerStyle}>
                <div>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar className="text-info" key={i} style={starStyle} />
                  ))}
                </div>
                <div>
                  <FaArrowAltCircleRight
                    className="text-info"
                    style={forwardIconStyle}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SevenLine;
