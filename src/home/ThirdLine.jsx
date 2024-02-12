import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";

const PriceComponent = () => {
  const sectionStyle = {
    border: "2px solid skyblue",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    transition: "box-shadow 0.3s, transform 0.3s",
    cursor: "pointer",
  };

  const listItemStyle = {
    display: "inline-block",
    textAlign: "left",
    width: "100%",
  };

  const iconStyle = {
    marginRight: "5px",
    display: "inline-block",
    fontSize: "20px",
  };

  const priceTextStyle = {
    fontFamily: "Roboto",
    fontWeight: "bold",
    display: "inline-block",
    fontSize: "50px",
  };

  const handleHover = (e) => {
    e.currentTarget.style.boxShadow = "0 0 10px gray";
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <Container>
      <Row className=" p-5">
        {/* Section 1 */}
        <Col md={4} className="p-3">
          <div
            style={sectionStyle}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          >
            <h2 style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Basic Plan
            </h2>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Perfect for individuals
            </p>
            <p>
              $
              <span className="text-info" style={priceTextStyle}>
                59.99
              </span>
              /mo.
            </p>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              +1 months FREE
            </p>
            <Button variant="info">Subscribe</Button>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Cancel anytime
            </p>
            <hr />
            <ul className="list-unstyled">
              {[...Array(10).keys()].map((item) => (
                <li key={item} style={listItemStyle}>
                  <BsCheck className="text-info" style={iconStyle} /> things we
                  offer in Basic Plan {item + 1}
                </li>
              ))}
            </ul>
          </div>
        </Col>

        {/* Section 2 */}
        <Col md={4} className="p-3">
          <div
            style={sectionStyle}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          >
            <h2 style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Pro Plan
            </h2>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Best value for professionals
            </p>
            <p>
              $
              <span className="text-info" style={priceTextStyle}>
                79.99
              </span>
              /mo.
            </p>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              +2 months FREE
            </p>
            <Button variant="info">Subscribe</Button>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Cancel anytime
            </p>
            <hr />
            <ul className="list-unstyled">
              {[...Array(10).keys()].map((item) => (
                <li key={item} style={listItemStyle}>
                  <BsCheck className="text-info" style={iconStyle} /> things we
                  offer in Pro Plan {item + 1}
                </li>
              ))}
            </ul>
          </div>
        </Col>

        {/* Section 3 */}
        <Col md={4} className="p-3">
          <div
            style={sectionStyle}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          >
            <h2 style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Premium Plan
            </h2>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              For advanced users and teams
            </p>
            <p>
              $
              <span className="text-info" style={priceTextStyle}>
                99.99
              </span>
              /mo.
            </p>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              +3 months FREE
            </p>
            <Button variant="info">Subscribe</Button>
            <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
              Cancel anytime
            </p>
            <hr />
            <ul className="list-unstyled">
              {[...Array(10).keys()].map((item) => (
                <li key={item} style={listItemStyle}>
                  <BsCheck className="text-info" style={iconStyle} /> things we
                  offer in Premuim Plan {item + 1}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PriceComponent;
