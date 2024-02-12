import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FiveMillionMembers = () => {
  return (
    <section className="py-xl-9 py-5 bg-info text-black">
      <Container>
        <Row>
          <Col xl={8} className="offset-xl-2 col-12">
            <div className="text-center mb-xl-7 mb-5">
              <h2 className="text-black-stable mb-3">
                Why do over 5M members love?
              </h2>
              <p className="mb-0 text-black">
                Enim sed parturient sem enim nunc sit erat velit eget hac nulla
                nullam et id praesent nisi ornare risus risus consequat nunc
                nisl pellentesque diam neque.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mb-7 pb-4 g-5 text-center text-lg-start">
          <Col md={4}>
            <h4 className="text-black-stable">Flexible payments</h4>
            <p className="text-black mb-0">
              you are able to run your business smoothly; handle your daily
              expenses and secure your cash flow.
            </p>
          </Col>
          <Col md={4}>
            <h4 className="text-black-stable">Smart payments</h4>
            <p className="text-black mb-0">
              Nullam sodales, libero ac dictum convallis, ipsum diam cursus
              stibulum lacinia ultricies eleifend..
            </p>
          </Col>
          <Col md={4}>
            <h4 className="text-black-stable">Easy administration</h4>
            <p className="text-black mb-0">
              In a odio sit amet nisi tincidunt congue. Mauris cursus magna a
              vestibulum rutrum. Vivamus sit amet luctus leo.
            </p>
          </Col>
        </Row>
        <Row className="border-primary border-top g-4 g-lg-0 text-center text-lg-start">
          <Col
            lg={3}
            md={6}
            xs={6}
            className="border-end border-md-1 border-primary"
          >
            <div className="p-lg-5">
              <h5 className="h1 text-black-stable mb-0">5M+</h5>
              <span className="text-black">Members</span>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            xs={6}
            className="border-end border-md-1 border-primary"
          >
            <div className="p-lg-5">
              <h5 className="h1 text-black-stable mb-0">95%</h5>
              <span className="text-black">Customer satisfaction</span>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            xs={6}
            className="border-end border-md-1  border-primary"
          >
            <div className="p-lg-5">
              <h5 className="h1 text-black-stable mb-0">73%</h5>
              <span className="text-black">Over year growth</span>
            </div>
          </Col>
          <Col lg={3} md={6} xs={6}>
            <div className="p-lg-5">
              <h5 className="h1 text-black-stable mb-0">250B</h5>
              <span className="text-black">Money managed</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FiveMillionMembers;
