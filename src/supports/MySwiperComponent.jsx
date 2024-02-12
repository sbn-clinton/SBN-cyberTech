import React from "react";
import { Container, Row, Col, Figure, Badge, Button } from "react-bootstrap";
import { CircleFill, EnvelopeCheck } from "react-bootstrap-icons";
import { Form, ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      className="offcanvas-lg offcanvas-end"
      id="blog-sidebar"
      tabIndex="-1"
      aria-labelledby="blog-sidebar"
      style={{ maxWidth: "100%" }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title h4" id="blog-sidebar">
          Sidebar
        </h5>
        <Button
          variant="close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#blog-sidebar"
        />
      </div>
      <div className="offcanvas-body flex-column">
        <div className="mb-4">
          <Form>
            <Form.Label
              htmlFor="formGroupExampleInput"
              className="visually-hidden"
            >
              Example label
            </Form.Label>
            <Form.Control
              type="search"
              id="formGroupExampleInput"
              placeholder="Search Blog"
            />
          </Form>
        </div>

        {/* Categories */}
        <ListGroup className="card mb-4">
          <ListGroup.Item variant="primary">
            <h5 className="mb-4">Categories</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <CircleFill className="me-2 text-info" />
                <a href="#!" className="text-reset ms-2 fw-medium">
                  All
                  <span className="text-body-tertiary">(42)</span>
                </a>
              </li>
              <li className="mb-2">
                <CircleFill className="me-2 text-info" />
                <a href="#!" className="text-reset ms-2 fw-medium">
                  Pictures
                  <span className="text-body-tertiary">(22)</span>
                </a>
              </li>
              <li className="mb-2">
                <CircleFill className="me-2 text-info" />
                <a href="#!" className="text-reset ms-2 fw-medium">
                  Videos
                  <span className="text-body-tertiary">(12)</span>
                </a>
              </li>
              {/* Add more category items */}
            </ul>
          </ListGroup.Item>
        </ListGroup>

        {/* Newsletter Subscription */}
        <div className="bg-primary bg-opacity-10 px-5 pt-5 pb-7 mb-2 rounded-3 text-center mb-4">
          <div className="icon-shape bg-primary bg-opacity-10 icon-xl rounded-circle mb-4">
            <EnvelopeCheck className="bi bi-envelope-check text-info" />
          </div>
          <div className="mb-4">
            <h4>Subscribe to our newsletter</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
              amet dui quam vitae quis leo velit aliquam.
            </p>
          </div>
          <Form className="row g-3 needs-validation d-flex">
            {/* ... (rest of the form code) */}
          </Form>
        </div>

        {/* Popular Posts */}
        <ListGroup className="card mb-4">
          <ListGroup.Item>
            <h5 className="mb-4">Popular posts</h5>
            <h6 className="mb-3">
              <a href="#!" className="text-reset text-decoration-none">
                SEO Trends and Predictions for 2024
              </a>
            </h6>
            <div className="d-flex align-items-center mb-3 mb-md-0 small">
              {/* ... (rest of the popular posts code) */}
              <div className="d-flex align-items-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1701207039001-2f0731950e8e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                  className="avatar avatar-xs rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="ms-2">
                  <a href="#" className="text-reset fs-6">
                    Sandip Chauhan
                  </a>
                </div>
              </div>
              <div className="ms-3">
                <span className="fs-6">Dec 21, 2023</span>
              </div>
            </div>

            <hr className="my-4" />

            {/* Add more popular posts */}
          </ListGroup.Item>
        </ListGroup>

        {/* Tags */}
        <ListGroup className="card">
          <ListGroup.Item>
            <h5 className="mb-4">Tags</h5>
            <a href="#!" className="btn btn-outline-primary btn-sm me-2 mb-2">
              block
            </a>
            <a href="#!" className="btn btn-outline-primary btn-sm me-2 mb-2">
              bootstrap5
            </a>
            <a href="#!" className="btn btn-outline-primary btn-sm me-2 mb-2">
              ui design
            </a>
            <a href="#!" className="btn btn-outline-primary btn-sm me-2 mb-2">
              web development
            </a>
            {/* Add more tags */}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Row className="gy-lg-7 gy-5">
            {/* Article 1 */}
            <Col lg={6} md={6} xs={12}>
              <Figure className="mb-4 zoom-img">
                <a href="./blog-single.html">
                  <Figure.Image
                    src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="blog"
                    className="img-fluid rounded-3"
                  />
                </a>
              </Figure>

              <Badge
                bg="primary-subtle"
                text="primary-emphasis"
                className="text-uppercase"
              >
                Digital
              </Badge>
              <h3 className="my-3 lh-base h4">
                <a
                  href="./blog-single.html"
                  className="text-reset text-decoration-none"
                >
                  Introducing Block Bootstrap 5 based Design in 2024
                </a>
              </h3>
              <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1701207039001-2f0731950e8e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar"
                    className="avatar avatar-xs rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="ms-2">
                    <a href="#" className="text-reset fs-6">
                      Sandip Chauhan
                    </a>
                  </div>
                </div>
                <div className="ms-3">
                  <span className="fs-6">Dec 21, 2023</span>
                </div>
              </div>
            </Col>

            {/* Article 2 */}
            <Col lg={6} md={6} xs={12}>
              <Figure className="mb-4 zoom-img">
                <a href="./blog-single.html">
                  <Figure.Image
                    src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="blog"
                    className="img-fluid rounded-3"
                  />
                </a>
              </Figure>

              <Badge
                bg="success-subtle"
                text="success-emphasis"
                className="text-uppercase"
              >
                design
              </Badge>
              <h3 className="my-3 lh-base h4">
                <a
                  href="./blog-single.html"
                  className="text-reset text-decoration-none"
                >
                  The writing trends that will define 2023 (Get Excited)
                </a>
              </h3>
              <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1701207039001-2f0731950e8e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar"
                    className="avatar avatar-xs rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="ms-2">
                    <a href="#" className="text-reset fs-6">
                      Jitu Chauhan
                    </a>
                  </div>
                </div>
                <div className="ms-3">
                  <span className="fs-6">Dec 11, 2023</span>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <Figure className="mb-4 zoom-img">
                <a href="./blog-single.html">
                  <Figure.Image
                    src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="blog"
                    className="img-fluid rounded-3"
                  />
                </a>
              </Figure>

              <Badge
                bg="primary-subtle"
                text="primary-emphasis"
                className="text-uppercase"
              >
                Digital
              </Badge>
              <h3 className="my-3 lh-base h4">
                <a
                  href="./blog-single.html"
                  className="text-reset text-decoration-none"
                >
                  Introducing Block Bootstrap 5 based Design in 2024
                </a>
              </h3>
              <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1701207039001-2f0731950e8e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar"
                    className="avatar avatar-xs rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="ms-2">
                    <a href="#" className="text-reset fs-6">
                      Sandip Chauhan
                    </a>
                  </div>
                </div>
                <div className="ms-3">
                  <span className="fs-6">Dec 21, 2023</span>
                </div>
              </div>
            </Col>

            {/* Article 2 */}
            <Col lg={6} md={6} xs={12}>
              <Figure className="mb-4 zoom-img">
                <a href="./blog-single.html">
                  <Figure.Image
                    src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="blog"
                    className="img-fluid rounded-3"
                  />
                </a>
              </Figure>

              <Badge
                bg="success-subtle"
                text="success-emphasis"
                className="text-uppercase"
              >
                design
              </Badge>
              <h3 className="my-3 lh-base h4">
                <a
                  href="./blog-single.html"
                  className="text-reset text-decoration-none"
                >
                  The writing trends that will define 2023 (Get Excited)
                </a>
              </h3>
              <div className="d-flex align-items-center justify-content-between mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1701207039001-2f0731950e8e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar"
                    className="avatar avatar-xs rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="ms-2">
                    <a href="#" className="text-reset fs-6">
                      Jitu Chauhan
                    </a>
                  </div>
                </div>
                <div className="ms-3">
                  <span className="fs-6">Dec 11, 2023</span>
                </div>
              </div>
            </Col>

            {/* Continue with other articles */}

            <Col lg={12}>
              <div className="mt-xl-7 mt-3">
                <Button variant="outline-info">
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="ms-2">Load More</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg={4}>
          {/* Include Sidebar component */}
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogList;
