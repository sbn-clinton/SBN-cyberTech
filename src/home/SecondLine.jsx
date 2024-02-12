import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const RatingBar = ({ rating }) => {
  const starSize = 30;

  const starArray = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      color={index < rating ? "skyblue" : "grey"}
      size={starSize}
      style={{ display: "inline-block", marginRight: "5px" }}
    />
  ));

  return <div className="text-center">{starArray}</div>;
};

const SecondLine = () => {
  const cardsData = [
    {
      title: "Google",
      rating: 3,
      description: "Rating:4.8/5 | 1,237 reviews",
    },
    {
      title: "HostAdvice",
      rating: 4,
      description: "Rating:4.5/5 | 2,416 reviews",
    },
    {
      title: "WpBeginner",
      rating: 5,
      description: "Rating:4.7 | 874 reviews",
    },
    {
      title: "AmazonKDP",
      rating: 2,
      description: "Rating:4.8/5 | 1,237 reviews",
    },
  ];

  return (
    <Container>
      <Row
        style={{
          backgroundColor: "black",
          marginTop: "30px",
          fontFamily: "Roboto",
          fontWeight: "bold",
        }}
      >
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <Card style={{ backgroundColor: "black", color: "gray" }}>
              <Card.Body>
                <Card.Title className="text-center mt-2 mb-2">
                  {card.title}
                </Card.Title>
                <RatingBar rating={card.rating} />
                <p className="text-center mt-2">{card.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SecondLine;
