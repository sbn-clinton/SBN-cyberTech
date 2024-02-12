import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { KeyboardArrowRight } from "@mui/icons-material"; // Import the Material Icons arrow icon
import "./SimpleLinks.css";

const SimpleLinks = () => {
  return (
    <section className="simple-links" data-type="default">
      <Container fluid>
        <Row>
          <Col xl={9} className="title-brand">
            <span className="eyebrow">Learn</span>
            <h2 className="h3 title"></h2>
          </Col>
        </Row>
        <ul className="list-unstyled">
          <li>
            <div className="content">
              <h3 className=" slidetitle">Ultimate Test Drive</h3>
              <p className="h6">
                See firsthand how you can improve your security posture and
                protect your organization from tomorrow’s threats.
              </p>
            </div>
            <div className="actions">
              <Button
                href="/resources/test-drives"
                className="btn btn-info rounded-pill"
                data-page-track="true"
                data-page-track-value="about-us:simpleLinksComp:resources:ultimate test drive:take the test drive"
                aria-label="take the test drive"
              >
                <span>Take the test drive</span>
                <KeyboardArrowRight className="ml-2" />
              </Button>
            </div>
          </li>
          <hr />
          <li>
            <div className="content">
              <h3 className=" slidetitle">Tech Docs</h3>
              <p className="h6">
                Platform and software documentation to maximize your
                cybersecurity investment.
              </p>
            </div>
            <div className="actions">
              <Button
                href="https://docs.paloaltonetworks.com/"
                target="_blank"
                className="btn btn-info rounded-pill"
                data-page-track="true"
                data-page-track-value="about-us:simpleLinksComp:resources:tech docs:learn more"
                aria-label="learn more"
                rel="nofollow noopener"
              >
                <span>Learn more</span>
                <KeyboardArrowRight className="ml-2" />
              </Button>
            </div>
          </li>
          <hr />
          <li>
            <div className="content">
              <h3 className=" slidetitle">Cyberpedia</h3>
              <p className="h6">
                Build a foundational understanding of cybersecurity and learn
                about today’s most critical security components.
              </p>
            </div>
            <div className="actions">
              <Button
                href="/cyberpedia"
                className="btn btn-info rounded-pill"
                data-page-track="true"
                data-page-track-value="about-us:simpleLinksComp:resources:cyberpedia:explore articles"
                aria-label="explore articles"
              >
                <span>Explore articles</span>
                <KeyboardArrowRight className="ml-2" />
              </Button>
            </div>
          </li>
          <hr />
          <li>
            <div className="content">
              <h3 className=" slidetitle">Best Practices & Tools</h3>
              <p className="h6">
                Take a best practice assessment to see how you can maximize your
                ROI and strengthen security across your deployment.
              </p>
            </div>
            <div className="actions">
              <Button
                href="/services/bpa"
                className="btn btn-info rounded-pill"
                data-page-track="true"
                data-page-track-value="about-us:simpleLinksComp:resources:best practices & tools:start your bpa"
                aria-label="start your bpa"
              >
                <span>Start your BPA</span>
                <KeyboardArrowRight className="ml-2" />
              </Button>
            </div>
          </li>
          <hr />
          <li>
            <div className="content">
              <h3 className=" slidetitle">Beacon</h3>
              <p className="h6">
                Level up your cybersecurity skills and become an expert in your
                Palo Alto Networks products and licenses.
              </p>
            </div>
            <div className="actions">
              <Button
                href="https://beacon.paloaltonetworks.com"
                target="_blank"
                className="btn btn-info rounded-pill"
                data-page-track="true"
                data-page-track-value="about-us:simpleLinksComp:resources:beacon:join beacon"
                aria-label="join beacon"
                rel="noopener"
              >
                <span>Join Beacon</span>
                <KeyboardArrowRight className="ml-2" />
              </Button>
            </div>
          </li>
          <hr />
        </ul>
      </Container>
    </section>
  );
};

export default SimpleLinks;
