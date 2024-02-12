import React, { Fragment } from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Your existing styles...

  const customTextStyle = {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "gray",
    backgroundColor: "black",
  };

  const socialIconsStyle = {
    ...customTextStyle,
    display: "inline-block",
    fontSize: "50px",
    marginRight: "12px",
  };

  const listStyle = {
    listStyleType: "none", // Remove the dots for list items
  };

  const linkStyle = {
    ...customTextStyle,
    textDecoration: "none", // Remove underline
    marginTop: "8px", // Add top margin
    display: "block", // Make the link a block-level element
  };
  return (
    <footer
      className="p-4"
      style={{ backgroundColor: "black", borderTop: "solid 2px gray" }}
    >
      <Container>
        <Row>
          <Col md={4} className="mb-5" style={customTextStyle}>
            <h1>Title</h1>
            <p>
              Your very long text goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <div>
              <FaFacebook className="text-info" style={socialIconsStyle} />
              <FaTwitter className="text-info" style={socialIconsStyle} />
              <FaInstagram className="text-info" style={socialIconsStyle} />
              <FaLinkedin className="text-info" style={socialIconsStyle} />
              <FaGithub className="text-info" style={socialIconsStyle} />
              <FaPinterest className="text-info" style={socialIconsStyle} />
              <FaYoutube className="text-info" style={socialIconsStyle} />
            </div>
          </Col>

          <Col md={8}>
            <Row>
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <Col key={index} md={3} style={customTextStyle}>
                  <ul className="d-none d-md-inline-block" style={listStyle}>
                    <Fragment>
                      <h2 style={customTextStyle}>Title {index}</h2>
                      {[1, 2, 3, 4, 5, 6, 7].map((liIndex) => (
                        <li key={liIndex} style={customTextStyle}>
                          <Link
                            to={`/link-${index}-${liIndex}`}
                            style={linkStyle}
                          >
                            List Item {liIndex}
                          </Link>
                        </li>
                      ))}
                    </Fragment>
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>

          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <Col key={index} md={3} style={customTextStyle}>
              <Accordion
                className="d-md-none text-info"
                data-bs-theme="dark"
                flush
              >
                <Accordion.Item
                  eventKey="0"
                  style={{ ...customTextStyle, border: "none" }}
                >
                  <Accordion.Header style={customTextStyle}>
                    Accordion Item {index}
                  </Accordion.Header>
                  <Accordion.Body style={customTextStyle}>
                    <ul style={listStyle}>
                      {[1, 2, 3, 4, 5, 6, 7].map((liIndex) => (
                        <li key={liIndex} style={customTextStyle}>
                          <Link
                            to={`/link-${index}-${liIndex}`}
                            style={linkStyle}
                          >
                            List Item {liIndex}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
        <hr style={customTextStyle} />
        <p style={customTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
