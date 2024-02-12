import React from "react";
import { Container, Row, Col, Figure, Badge } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const BlogSection = () => {
  const customFadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 600 },
  });

  const customZoomInProps = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(0)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <section className="my-xl-9 my-5">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} style={customFadeInProps}>
            <div className="text-center mb-xl-7 mb-5">
              <h2 className="h1 mb-3">Our articles on agency</h2>
              <p className="mb-0">
                At least, not exclusively. Reduced recruiting costs, more
                efficient and effective communication.
              </p>
            </div>
          </Col>
        </Row>
        <div className="table-responsive-lg">
          <Row className="g-5 flex-nowrap pb-4 pb-lg-0 me-5 me-lg-0">
            {["photo1.avif", "photo2.avif", "photo3.avif"].map(
              (photo, index) => (
                <Col
                  key={index}
                  lg={4}
                  md={6}
                  xs={12}
                  style={customZoomInProps}
                  className="mb-5"
                >
                  <animated.article
                    className="data-cue-zoomIn"
                    style={customZoomInProps}
                  >
                    <Figure className="mb-4 zoom-img">
                      <a href="./blog-single.html">
                        <Figure.Image
                          src={`../images/${photo}`}
                          alt="blog"
                          fluid
                          rounded
                          className="img-fluid rounded-3"
                          style={{ height: "400px", width: "400px" }}
                        />
                      </a>
                    </Figure>

                    <Badge
                      bg={index === 0 ? "info" : index === 1 ? "info" : "info"}
                      text={
                        index === 0 ? "black" : index === 1 ? "black" : "black"
                      }
                      className="rounded-pill text-uppercase"
                    >
                      {index === 0
                        ? "Startup"
                        : index === 1
                        ? "Business"
                        : "Digital"}
                    </Badge>
                    <h3 className="my-3 lh-base h4">
                      <a href="./blog-single.html" className="text-reset">
                        {index === 0
                          ? "You will destroy yourself financially if you save"
                          : index === 1
                          ? "Block Template for startup business"
                          : "The power of doing nothing at all"}
                      </a>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                      <div className="d-flex align-items-center">
                        <Figure.Image
                          src={`../images/${photo}`}
                          alt="Avatar"
                          className="avatar avatar-xs rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div className="ms-2">
                          <a href="#" className="text-reset fs-6">
                            {index === 0
                              ? "Sandip Chauhan"
                              : index === 1
                              ? "Anita Parmar"
                              : "Jitu Chauhan"}
                          </a>
                        </div>
                      </div>
                      <div className="ms-3">
                        <span className="fs-6">Nov {21 + index}, 2023</span>
                      </div>
                    </div>
                  </animated.article>
                </Col>
              )
            )}
          </Row>
        </div>
        <Row>
          <Col lg={12} style={customZoomInProps}>
            <div className="mt-lg-4 mt-4">
              <a
                href="./blog.html"
                className="icon-link icon-link-hover text-info"
              >
                Read more news
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  ></path>
                </svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
