import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { IoMdBonfire } from "react-icons/io";
import { TbBrandOpenai } from "react-icons/tb";
import { LiaYelp } from "react-icons/lia";

const CustomerStory = () => {
  const cardStyle = {
    border: "none", // Remove card borders
  };

  const fontStyle = {
    fontFamily: "Roboto", // Set font family to Roboto
    fontWeight: "bold", // Set font weight to bold
  };

  return (
    <Container>
      {/* Title, Subtitle, and Stream Right Button */}
      <Row className="mb-4">
        <Col md={8}>
          <p style={fontStyle}>CUSTOMER STORIES</p>
          <h1 style={fontStyle}>
            See what security without compromise looks like
          </h1>
        </Col>
        <Col md={4} className="mt-5 justify-content-end align-items-end">
          {/* Added 'd-flex justify-content-end' class */}
          <Button variant="info" className="rounded-5 " style={fontStyle}>
            See all
            <ArrowRight style={{ marginLeft: "10px" }} />{" "}
          </Button>
        </Col>
      </Row>

      {/* Two Columns with Cards */}
      <Row>
        {/* First Column */}
        <Col md={8} className="mb-3">
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/1490896283/photo/rear-view-of-young-audience-listening-to-mature-female-coach-at-seminar.jpg?s=2048x2048&w=is&k=20&c=XkF-2k7DnWd8RC1ctRsmEtyAlpULype7e5nKaaeWvms="
            />
            <Card.Body>
              <LiaYelp size={30} className="text-info" /> {/* Icon */}
              <Card.Text style={fontStyle}>
                muvi Cinemas deploys blockbuster cybersecurity with Palo Alto
                Networks
              </Card.Text>
              <Button
                variant="info"
                className="rounded-5 mt-3"
                style={fontStyle}
              >
                Read the story
                <ArrowRight style={{ marginLeft: "10px" }} />{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Column */}
        <Col md={4}>
          <Card className="mb-3" style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/1442990932/photo/computer-woman-programmer-and-man-training-for-coding-cyber-security-or-software-on-computer.jpg?s=2048x2048&w=is&k=20&c=w12nDqk7lX7jO1fiioATPBn5xzgnFEnIhY21kS8AFzE="
            />
            <Card.Body>
              <TbBrandOpenai size={30} className="text-info" /> {/* Icon */}
              <Card.Text style={fontStyle}>
                Globe Telecom strengthens security capabilities by deploying
                robust and timely solutions from Palo Alto Networks
              </Card.Text>
              <Button variant="info" className="rounded-5" style={fontStyle}>
                Read the story
                <ArrowRight style={{ marginLeft: "10px" }} />{" "}
              </Button>
            </Card.Body>
          </Card>

          <Card className="mb-5" style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/1146473198/photo/middle-aged-white-businessman-stands-addressing-corporate-colleagues-at-meeting-seen-from.jpg?s=2048x2048&w=is&k=20&c=Bf0V7wdvXH7e4nEcjnZ5wZgt4WEmlS0JANDFyAKZF4w="
            />
            <Card.Body>
              <IoMdBonfire size={30} className="text-info" /> {/* Icon */}
              <Card.Text style={fontStyle}>
                Linking Europe and Asia with a complete, connected security
                strategy
              </Card.Text>
              <Button variant="info" className="rounded-5" style={fontStyle}>
                Read the story
                <ArrowRight style={{ marginLeft: "10px" }} />{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerStory;
