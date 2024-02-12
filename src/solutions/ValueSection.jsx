import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const ValueSection = () => {
  const containerStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Container className="extended-right mt-4" style={containerStyle}>
      <Row className=" mx-2">
        <Col md={7}>
          <div className="title-brand  text-info-emphasis">
            <p className="small-title h4 mt-4">OUR VALUE</p>
            <h1 className="h1 title d-none d-md-block my-4">
              Enabling <br /> innovation at <br /> speed and scale
            </h1>
            <h1 className="h3 title d-md-none ">
              Enabling innovation at speed and scale
            </h1>
            <div className="links linkHelper baseComponent parbase">
              <div className="base-component-spacer spacer-none"></div>
              <ul className="list-unstyled" data-type="">
                <li>
                  <a
                    className="btn my-3 btn-info rounded-5 dark"
                    data-page-track="true"
                    data-page-track-value="en_US:linkHelperOrderButton::see how we do it:3f77edf9-291d-4554-83b8-699295342246"
                  >
                    See how we do it<i></i>
                    <ArrowRight style={{ marginLeft: "10px" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div className="list-container text-info-emphasis">
            <div className="content">
              <h3 className="slideTitle h3 my-4">integrated</h3>
              <hr />
              <div className="display-9">
                For the greatest possible visibility and control, we integrate
                best-in-breed capabilities into the most comprehensive
                cybersecurity portfolio. <br />
                <b>7+ best-in-class innovators acquired and integrated</b>
              </div>
            </div>
            <div className="content">
              <h3 className="slideTitle h3 my-4">automated</h3>
              <hr />
              <div className="display-9">
                To increase efficiency and reduce the risk of a breach, our
                SecOps products are driven by good data, deep analytics, and
                end-to-end automation.
                <ul>
                  <li>8x faster incident investigations</li>
                  <li>44% lower cost</li>
                  <li>95% reduction in alerts</li>
                </ul>
              </div>
            </div>
            <div className="content mb-5">
              <h3 className="slideTitle h3 my-4">simple</h3>
              <hr />
              <div className="display-9">
                To give you the most thorough application of Zero Trust, we bake
                it into every security touchpoint. <br />
                <b>
                  A “Zero Trust Leader” in Forrester’s Zero Trust eXtended
                  Ecosystem Platform Providers 2019 report
                </b>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ValueSection;
