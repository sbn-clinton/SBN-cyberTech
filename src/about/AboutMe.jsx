import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import {
  FaStar,
  FaLightbulb,
  FaPencilAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const AboutMe = () => {
  const maxStars = 5;
  const filledStars = 3;

  const starContainerStyle = {
    display: "flex",
    marginBottom: "10px",
  };

  const starStyle = {
    color: "gold",
    fontSize: "24px",
    marginRight: "5px",
  };

  return (
    <section className="my-lg-9 my-5">
      <div className="container">
        <div className="row mb-lg-9 mb-5">
          <div className="col-xl-10 offset-xl-1 col-md-12">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-12">
                <div className="text-lg-center mb-5">
                  <small className="text-uppercase ls-md fw-semibold text-body-tertiary">
                    ABOUT ME
                  </small>
                  <h2 className="mt-3">
                    Hey, I'm Lee. Most folks know me as{" "}
                    <span className="text-info">leerob</span> online.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Col md={6} className="col-12">
                <p className="mb-4 mb-md-0">
                  I'm currently the VP of Developer Experience at Vercel, where
                  I lead our Developer Relations and Documentation teams. I
                  focus on educating and growing the Vercel and Next.js
                  communities.
                </p>
              </Col>
              <Col md={6} className="col-12">
                <p className="mb-0">
                  I love building for the web. From something as simple as a
                  single HTML file – all the way to large Next.js applications.
                  The web is incredible.
                </p>
                <div className="text-lg-center mt-5">
                  <Button variant="info">More about me</Button>
                </div>
              </Col>
            </div>
          </div>
        </div>
        <div className="row">
          <Col lg={4} md={12} className="col-12">
            <div className="mb-5 mb-lg-0 text-center text-lg-start px-md-5">
              <h2 className="mb-3">My process of Engagement</h2>
              <p className="mb-0">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="row">
              {[1, 2, 3, 4].map((index) => (
                <Col key={index} md={6} className="col-12">
                  <Card className="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-1 py-2">
                    <div className="mb-3">
                      {index === 1 && (
                        <FaLightbulb size={32} className="text-info" />
                      )}
                      {index === 2 && (
                        <FaPencilAlt size={32} className="text-info" />
                      )}
                      {index === 3 && (
                        <FaCode size={32} className="text-info" />
                      )}
                      {index === 4 && (
                        <FaRocket size={32} className="text-info" />
                      )}
                    </div>
                    <h3 className="h4">
                      {index === 1 && "Ideation"}
                      {index === 2 && "Design"}
                      {index === 3 && "Development"}
                      {index === 4 && "Delivery"}
                    </h3>
                    <p className="mb-0 pe-lg-4">
                      {index === 1 &&
                        "We craft a plan aligned with your business objectives, submit a comprehensive proposal."}
                      {index === 2 &&
                        "We design the Idea in Figma and seek approval. We offer 2 free design iterations."}
                      {index === 3 &&
                        "Agile Development: Sprints, Milestones, and weekly Progress Tracking."}
                      {index === 4 &&
                        "Complete Project Delivery with Complimentary One Month Maintenance."}
                    </p>
                  </Card>
                </Col>
              ))}
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
