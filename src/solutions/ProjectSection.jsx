import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaReact, FaRegSmile, FaLaptopCode, FaQuestion } from "react-icons/fa"; // Import additional React icons as needed

const ProjectSection = () => {
  const projects = [
    {
      title: "Course Design",
      imageUrl:
        "https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl:
        "https://geeks-react.netlify.app/marketing/landings/home-academy/",
      icons: [<FaReact key="react" />, <FaRegSmile key="smile" />],
      description:
        "When setting up a site or app for your university or school, Geeks courses and education template is an ideal tool to start.",
    },
    {
      title: "Admin Dashboard",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://geeks-react.netlify.app/dashboard/overview/",
      icons: [<FaReact key="react" />, <FaLaptopCode key="laptop-code" />],
      description:
        "Dashboard is designed to be the perfect starting point for sites focused on analytics, data-heavy application, or admin tools.",
    },
    {
      title: "Landings",
      imageUrl:
        "https://images.unsplash.com/photo-1683009427042-e094996f9780?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl:
        "https://geeks-react.netlify.app/marketing/landings/course-lead/",
      icons: [<FaReact key="react" />, <FaLaptopCode key="laptop-code" />],
      description:
        "High-converting landing page templates & marketing page for developer, digital agency and designer.",
    },
    {
      title: "Help Center",
      imageUrl:
        "https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://geeks-react.netlify.app/marketing/help-center/",
      icons: [<FaReact key="react" />, <FaQuestion key="question" />],
      description:
        "Beautiful help center page design. Pages like the help center homepage, FAQ, Guides, & support form page.",
    },
  ];

  return (
    <div className="py-lg-4 py-3">
      <Container>
        <Row className="g-3">
          {projects.map((project, index) => (
            <Col lg={6} key={index}>
              <Card className="rounded-3 m-3">
                <div className="">
                  <a target="_blank">
                    <Card.Img
                      src={project.imageUrl}
                      alt={project.title}
                      className="mt-n8 img-fluid w-100 img-hover rounded-3"
                    />
                  </a>
                </div>
                <Card.Body className="px-4 py-5 p-md-8">
                  <div className="border-bottom pb-3 mb-3">
                    <h2 className="mb-2 fw-bold display-8">
                      <a href="#" className="text-info">
                        {project.title}
                      </a>
                    </h2>
                    <p className="fs-7">{project.description}</p>
                  </div>
                  <div className="mt-3">
                    {project.icons.map((icon, iconIndex) => (
                      <a
                        key={iconIndex}
                        href={project.demoUrl}
                        className="btn btn-outline-info btn-icon ms-2"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectSection;
