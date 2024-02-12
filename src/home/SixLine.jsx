import React from "react";
import { Col, Row, Card, Image, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const SixLine = () => {
  const maxStars = 5;
  const filledStars = 3; // Adjust this value for the desired progress

  const starContainerStyle = {
    display: "flex",
    marginBottom: "10px",
  };

  const starStyle = {
    color: "skyblue",
    fontSize: "24px",
    marginRight: "5px", // Adjust the spacing between stars
  };

  const cardStyle = {
    backgroundColor: "black", // Set background color to black
    color: "gray", // Set text color to gray
    fontFamily: "Roboto", // Set font family to Roboto
    border: "1px solid gray", // Add a gray border with 1px width
  };

  const h1Style = {
    fontFamily: "Roboto", // Set font family to Roboto
    fontWeight: "bold", // Set font weight to bold
  };

  const imageStyle = {
    display: "block", // Change display to block
    margin: "auto", // Center the image horizontally
    width: "80%",
    height: "100%",
    borderRadius: "30px",
  };

  const textDivStyle = {
    display: "inline-block",
    marginLeft: "8px",
    marginTop: "30px",
    width: "80%", // Set the width of the text div
  };

  const linkStyle = {
    border: "1px solid skyblue", // Add a border with skyblue color
    margin: "10px", // Add margin for spacing
    padding: "10px", // Add padding for spacing
    borderRadius: "5px", // Add border-radius for rounded corners
    color: "skyblue", // Set text color to skyblue
    textDecoration: "none", // Remove underline from the link
    width: "400px", // Set the width of the link
    fontFamily: "Roboto", // Set font family to Roboto
    fontWeight: "bold", // Set font weight to bold
  };

  return (
    <Container>
      <h1 className="text-center m-3" style={h1Style}>
        Our Notable Subscriber
      </h1>
      <Row className="p-3">
        {[1, 2, 3].map((index) => (
          <Col key={index} md={4}>
            <Card style={{ ...cardStyle, width: "100%", margin: "10px" }}>
              <Card.Body>
                <Card.Title className="mt-2">
                  <div style={starContainerStyle}>
                    {Array.from({ length: maxStars }, (_, i) => (
                      <FaStar
                        key={i}
                        style={{
                          ...starStyle,
                          opacity: i < filledStars ? 1 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </Card.Title>
                <Card.Text>
                  Your long text goes here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Card.Text>
                <Card.Text>Short text goes here.</Card.Text>
              </Card.Body>
              <hr style={{ borderTop: "1px solid gray" }} />
              <Card.Footer
                className="d-flex 
               align-items-center" // Center the content horizontally
              >
                <div style={{ width: "20%" }}>
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="subscriber"
                    style={imageStyle}
                  />
                </div>
                <div style={textDivStyle}>
                  <p>Web Programmer</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <a href="#" className="btn" style={linkStyle}>
          Click Me
        </a>
      </div>
    </Container>
  );
};

export default SixLine;
