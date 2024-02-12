// Import necessary React and Bootstrap components
import React, { useState } from "react";
import { Nav, Card, Button, Row, Col } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

// Your main component
const NavTab = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  // Data for the cards
  const cardData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Angela",
      footerText1: "$900",
      footerText2: "Get Enrolled",
      rating: 3,
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Peter",
      footerText1: "$850",
      footerText2: "Get Enrolled",
      rating: 4.5,
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Cynthia",
      footerText1: "$800",
      footerText2: "Get Enrolled",
      rating: 4,
    },
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Helen",
      footerText1: "$700",
      footerText2: "Get Enrolled",
      rating: 5,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Angela",
      footerText1: "$900",
      footerText2: "Get Enrolled",
      rating: 3,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Peter",
      footerText1: "$850",
      footerText2: "Get Enrolled",
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Cynthia",
      footerText1: "$800",
      footerText2: "Get Enrolled",
      rating: 4,
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Helen",
      footerText1: "$700",
      footerText2: "Get Enrolled",
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Angela",
      footerText1: "$900",
      footerText2: "Get Enrolled",
      rating: 3,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Peter",
      footerText1: "$850",
      footerText2: "Get Enrolled",
      rating: 4.5,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Cynthia",
      footerText1: "$800",
      footerText2: "Get Enrolled",
      rating: 4,
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Helen",
      footerText1: "$700",
      footerText2: "Get Enrolled",
      rating: 5,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Angela",
      footerText1: "$900",
      footerText2: "Get Enrolled",
      rating: 3,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Peter",
      footerText1: "$850",
      footerText2: "Get Enrolled",
      rating: 4.5,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Cynthia",
      footerText1: "$800",
      footerText2: "Get Enrolled",
      rating: 4,
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      author: "Helen",
      footerText1: "$700",
      footerText2: "Get Enrolled",
      rating: 5,
    },

    // Add more card data as needed
  ];

  return (
    <div>
      {/* Navigation */}
      <Nav
        className="nav-tabs nav-justified"
        variant="info"
        defaultActiveKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link className="text-info" eventKey="tab1">
            Tab 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-info" eventKey="tab2">
            Tab 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-info" eventKey="tab3">
            Tab 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-info" eventKey="tab4">
            Tab 4
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Cards */}
      <Row>
        {cardData.map((card) => (
          <Col
            key={card.id}
            md={3}
            style={{
              display: activeTab === `tab${card.id}` ? "block" : "none",
            }}
          >
            <Card style={{ margin: "20px" }} className="bg-tertiary">
              <Card.Img
                variant="top"
                src={card.image}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Row className="justify-content-between">
                  <Col md={8} xs={8}>
                    <small className="p-1 border-1 rounded-3 text-secondary bg-info-subtle fw-semibold">
                      {card.level}
                    </small>
                  </Col>
                  <Col md={4} xs={4} className="text-end align-item-center">
                    <FaHeart size={15} className=" text-info" />
                  </Col>
                </Row>
                <Card.Text className="text-black fw-bold fs-6 my-3">
                  {card.text}
                </Card.Text>
                <small className="fw-semibold ">By: {card.author}</small>
                <div className="my-2">
                  {[...Array(Math.floor(card.rating))].map((_, index) => (
                    <BsStarFill key={index} color="gold" />
                  ))}
                  {card.rating % 1 !== 0 && (
                    <BsStarFill
                      key="half"
                      color="gold"
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                    />
                  )}{" "}
                  / 5 stars
                </div>
              </Card.Body>
              <Card.Footer>
                <Row className="justify-content-between">
                  <Col md={6} xs={6}>
                    <small className=" fw-semibold">{card.footerText1}</small>
                  </Col>
                  <Col md={6} xs={6} className="text-end align-item-center">
                    <small className="  fw-semibold">
                      <FaBasketShopping size={20} className="mx-1 text-info" />
                      {card.footerText2}
                    </small>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NavTab;
