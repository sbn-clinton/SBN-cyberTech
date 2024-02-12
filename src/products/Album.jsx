import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const Album = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slideInAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(50%)" },
  });

  const slideOutAnimation = useSpring({
    opacity: 0,
    transform: "translateX(-50%)",
    from: { opacity: 1, transform: "translateX(-50%)" },
  });

  return (
    <Container
      className="mt-5 text-center"
      style={{ fontFamily: "Roboto", fontWeight: "bold" }}
    >
      <h4>List of Our Product</h4>
      <h3>
        Best of what we have to offer and how, when, and ways we offer them
      </h3>

      <Row className="mt-4">
        <Col md={4} className="mb- bg-light text-black">
          <Link to="/image1" style={{ textDecoration: "none", color: "black" }}>
            <animated.div
              style={scrollY > 100 ? slideInAnimation : slideOutAnimation}
            >
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 2"
                width="350"
                height="250"
              />
              <h3 className="mt-3">Cyber Threats</h3>
              <p className="mt-3">Detect and respond to cyber threats fast</p>
            </animated.div>
          </Link>
        </Col>

        <Col md={4} className="mb- bg-danger-subtle">
          <Link to="/image2" style={{ textDecoration: "none", color: "black" }}>
            <animated.div
              style={scrollY > 100 ? slideInAnimation : slideOutAnimation}
            >
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 3"
                width="350"
                height="250"
              />
              <h3 className="mt-3">Manage Risk</h3>
              <p className="mt-3">Understand, prioritise and mitigate risk</p>
            </animated.div>
          </Link>
        </Col>

        <Col md={4} className="mb- bg-light">
          <Link to="/image3" style={{ textDecoration: "none", color: "black" }}>
            <animated.div
              style={scrollY > 100 ? slideInAnimation : slideOutAnimation}
            >
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 4"
                width="350"
                height="250"
              />
              <h3 className="mt-3">Secured Envrionmemt</h3>
              <p className="mt-3">Secure your borderless workforce</p>
            </animated.div>
          </Link>
        </Col>

        <Col md={4} className="mb-3">
          <Link to="/image4" style={{ textDecoration: "none", color: "gray" }}>
            <animated.div
              style={scrollY > 100 ? slideInAnimation : slideOutAnimation}
            >
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1675495666589-94cdafbcfcc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 1"
                width="350"
                height="250"
              />
              <h3 className="mt-3">Protection</h3>
              <p className="mt-3">Protect your hybrid multi-cloud world</p>
            </animated.div>
          </Link>
        </Col>

        <Col md={4} className="mb- ">
          <Link to="/image5" style={{ textDecoration: "none", color: "gray" }}>
            <animated.div
              style={scrollY > 100 ? slideInAnimation : slideOutAnimation}
            >
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 5"
                width="350"
                height="250"
              />
              <h3 className="mt-3">Blind Spot</h3>
              <p className="mt-3">Eliminate network blind spot</p>
            </animated.div>
          </Link>
        </Col>

        <Col md={4} className="mb-">
          <Link to="/image6" style={{ textDecoration: "none", color: "gray" }}>
            <animated.div
              style={scrollY > 100 ? slideInAnimation : slideOutAnimation}
            >
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image 6"
                width="350"
                height="250"
              />
              <h3 className="mt-3">Cloud-Native</h3>
              <p className="mt-3">Protect your cloud-native apps</p>
            </animated.div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Album;
