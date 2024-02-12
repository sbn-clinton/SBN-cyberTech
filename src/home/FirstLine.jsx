import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { HiShieldCheck } from "react-icons/hi2";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(timer);

    // Add timeLeft as a dependency to run the effect on each timeLeft change
  }, [timeLeft]);

  const divStyle = {
    display: "inline-block",
    border: "1px solid skyblue",
    borderRadius: "8px",
    padding: "20px",
    margin: "5px",
  };

  return (
    <div>
      <p>Time Remaining:</p>
      <div style={divStyle}>{timeLeft.days}</div>:{" "}
      <div style={divStyle}>{timeLeft.hours}</div> :{" "}
      <div style={divStyle}>{timeLeft.minutes}</div> :{" "}
      <div style={divStyle}>{timeLeft.seconds}</div>
    </div>
  );
};

const FirstLine = () => {
  const targetDate = new Date("2024-12-31T23:59:59"); // Change this to your desired target date

  return (
    <Container>
      <Row className="justify-content-start" style={{ height: "100%" }}>
        {/* First Side */}
        <Col
          xs={12}
          md={5}
          className="d-flex flex-column align-items-center text-center"
        >
          <h2 style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
            Everything You Need to Know to Get our Services
          </h2>
          <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
            we offer{" "}
            <h2
              className="text-info"
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              25%
            </h2>{" "}
            discount to new customers.
          </p>
          <ul style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
            <li className="check-mark">Check Mark 1</li>
            <li className="check-mark">Check Mark 2</li>
            <li className="check-mark">Check Mark 3</li>
          </ul>
          <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
            $
            <h2
              className="text-info"
              style={{
                display: "inline-block",
                fontSize: "50px",
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              9.99
            </h2>
            /mo.
          </p>
          <p style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
            + 2 Months Free
          </p>
          {/* Countdown component added here */}
          <Countdown targetDate={targetDate} />
          <Button variant="info" className="w-50 p-3 m-3">
            Click me
          </Button>
          <div>
            <HiShieldCheck
              className="text-info"
              style={{
                display: "inline-block",
                fontSize: "30px",
                marginRight: "5px",
              }}
            />
            <p
              style={{
                display: "inline-block",
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              30-Day Money-Back Guarantee
            </p>
          </div>
        </Col>

        {/* Second Side */}
        <Col xs={12} md={7} style={{ height: "580px" }}>
          <Image
            src="https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sample Image"
            fluid
            style={{ height: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FirstLine;
