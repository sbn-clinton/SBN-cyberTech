import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainSec = () => {
  return (
    <main id="main">
      {/* Header */}
      <Container className="py-5">
        <Col xxl={10} className="mx-auto">
          <h1 className="display-1">Create an awesome design portfolio</h1>
          <div className="border border-info border-6 border-light w-25 my-4"></div>
        </Col>
        <Col lg={10} xxl={8} className="mx-auto">
          <p className="font-serif lead mb-4 text-light">
            Focus is a clean and elegant Bootstrap theme for designers,
            architects, photographers, and creative people.
          </p>
          <a className="btn btn-info">Buy now</a>
        </Col>
      </Container>

      {/* Testimonials */}
      <div className="bg-white text-black">
        <Container className="py-5 py-lg-6">
          <h2 className="text-center mb-5">What people are saying…</h2>
          <Row className="gy-4">
            {/* Replace the URLs and alt text with your actual data */}
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Pato Cephas",
                role: "Ethical Hacker",
                quote:
                  "Focus theme is great. It really saves me time and effort. Thank you so much for your help",
              },
              {
                image:
                  "https://plus.unsplash.com/premium_photo-1688598498482-5e21426a6067?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Black Diamond",
                role: "Lawyer",
                quote:
                  "Not able to tell you how happy I am with Focus. It's exactly what I've been looking for.",
              },
              {
                image:
                  "https://plus.unsplash.com/premium_photo-1678900923817-b5d2cded2795?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "sbn_Clinton",
                role: "Director",
                quote:
                  "Focus is great. I will refer everyone I know. This theme is worth much more than I paid. I'm loving it.",
              },
            ].map((testimonial, index) => (
              <Col key={index} md>
                <blockquote className="text-center">
                  <img
                    src={testimonial.image}
                    className="avatar avatar-lg mb-3 rounded-5"
                    alt={testimonial.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <cite className="d-block h5 fst-normal mb-1">
                    {testimonial.name}
                  </cite>
                  <span className="small text-secondary text-uppercase">
                    {testimonial.role}
                  </span>
                  <p className="quote text-secondary mt-3 mb-0">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Call to action */}
      <div className="text-bg-info text-center">
        <Container className="py-5 py-lg-6">
          <h2 className="font-sans">
            Focus is mobile-ready, flexible, and cross-browser
          </h2>
          <p className="lead mb-4">
            Impress your audiences with memorable pages that showcase your works
          </p>
          <a
            href="https://themes.getbootstrap.com/product/focus/"
            className="btn btn-outline-dark"
          >
            Buy now
          </a>
        </Container>
      </div>
    </main>
  );
};

export default MainSec;
