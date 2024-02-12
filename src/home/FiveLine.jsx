import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const YourComponent = () => {
  return (
    <Container fluid>
      <Row>
        {/* First side with a heading and a list */}
        <Col md={5}>
          <h1
            style={{
              color: "gray",
              marginTop: "20px", // Add margin to the top
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            All-In-One Website Solution
          </h1>
          <ul
            style={{
              backgroundColor: "black",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "17px",
              marginTop: "20px", // Add margin to the top
              listStyleType: "none", // Remove the dot
            }}
          >
            <li
              style={{
                color: "gray",
                fontFamily: "Roboto",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              <span
                className="text-info"
                style={{
                  marginRight: "10px",
                  display: "inline-block",
                }}
              >
                ✔
              </span>{" "}
              Launch websites quickly with our Website Builder.
            </li>
            <li
              style={{
                color: "gray",
                fontFamily: "Roboto",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              <span
                className="text-info"
                style={{
                  marginRight: "10px",
                  display: "inline-block",
                }}
              >
                ✔
              </span>{" "}
              Optimize your workflow with managed WordPress hosting.
            </li>
            <li
              style={{
                color: "gray",
                fontFamily: "Roboto",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              <span
                className="text-info"
                style={{
                  marginRight: "10px",
                  display: "inline-block",
                }}
              >
                ✔
              </span>
              Set up a professional business email address.
              <AiOutlineQuestionCircle
                className="text-info"
                style={{
                  marginRight: "10px", // Increase the margin for the question mark icon
                  width: "20px", // Increase the width of the question mark icon
                  display: "inline-block",
                }}
              />
            </li>
            <li
              style={{
                color: "gray",
                fontFamily: "Roboto",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              <span
                className="text-info"
                style={{
                  marginRight: "10px",
                  display: "inline-block",
                }}
              >
                ✔
              </span>
              Register a domain name for free.
              <AiOutlineQuestionCircle
                className="text-info"
                style={{
                  marginRight: "10px", // Increase the margin for the question mark icon
                  width: "20px", // Increase the width of the question mark icon
                  display: "inline-block",
                }}
              />
            </li>
            <li
              style={{
                color: "gray",
                fontFamily: "Roboto",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              <span
                className="text-info"
                style={{
                  marginRight: "10px",
                  display: "inline-block",
                }}
              >
                ✔
              </span>
              Manage up to 100 websites.
              <AiOutlineQuestionCircle
                className="text-info"
                style={{
                  marginRight: "10px", // Increase the margin for the question mark icon
                  width: "20px", // Increase the width of the question mark icon
                  display: "inline-block",
                }}
              />
            </li>
          </ul>
        </Col>

        {/* Second side with an image */}
        <Col md={7}>
          <Image
            src="https://media.istockphoto.com/id/843653146/photo/computer-crime-concept.jpg?s=1024x1024&w=is&k=20&c=x3hR-3kAkPPv9ycMWGFHha7UAkZF5UZTyDYEPI04rc0="
            alt="Your Alt Text"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default YourComponent;
