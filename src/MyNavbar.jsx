import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GiBalaclava } from "react-icons/gi";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  BsImageFill,
  BsMusicNoteBeamed,
  BsQuestionCircle,
} from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const MyNavbar = () => {
  const generateListItems = (count) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push(
        <Nav.Link
          key={i}
          as={Link}
          to={`/link-${i}`} // Adjust the "to" prop as needed
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            margin: "0 10px",
            color: "gray",
          }}
        >
          <FaReact size={20} className="text-info me-2" />
          Link {i}
        </Nav.Link>
      );
    }
    return items;
  };
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (expanded && navRef.current && !navRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [expanded]);

  return (
    <Navbar
      ref={navRef}
      bg="black"
      variant="dark"
      expand="lg"
      expanded={expanded}
      fixed="top"
      className="px-0"
      style={{ maxWidth: "100vm", overflowX: "hidden" }}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontFamily: "Roboto", fontWeight: "bold", color: "gray" }}
        >
          <GiBalaclava
            style={{ width: "50px", height: "50px" }}
            className="d-inline-block align-item-center text-info"
          />
          SBN-CyberTech
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ml-auto">
            <Nav.Link
              as={Link}
              to="/SBN-cyberTech/products"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "0 10px",
                color: "gray",
              }}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/SBN-cyberTech/solutions"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "0 10px",
                color: "gray",
              }}
            >
              Solutions
            </Nav.Link>
            <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              className="text-start d-sm-block d-md-none"
              data-bs-theme="dark"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "0 10px",
                color: "gray",
                border: "none",
              }}
            >
              <Nav.Link href="/main product">
                <Button
                  variant="light"
                  className="rounded-2 d-flex align-items-center gap-2 py-2 px-3 lh-sm text-start bg-dark text-secondary border-0 text-nowrap"
                >
                  <BsImageFill size={24} className="text-info" />
                  <div>
                    <strong className="d-block">Main product</strong>
                    <small>Take a tour through the product</small>
                  </div>
                </Button>
              </Nav.Link>
              <Nav.Link href="/another product">
                <Button
                  variant="light"
                  className="rounded-2 d-flex align-items-center gap-2 py-2 px-3 lh-sm text-start bg-dark text-secondary border-0 text-nowrap"
                >
                  <BsMusicNoteBeamed size={24} className="text-info" />
                  <div>
                    <strong className="d-block">Another product</strong>
                    <small>Explore this other product we offer</small>
                  </div>
                </Button>
              </Nav.Link>
              <Nav.Link href="/support">
                <Button
                  variant="light"
                  className="rounded-2 d-flex align-items-center gap-2 py-2 px-3 lh-sm text-start bg-dark text-secondary border-0 text-nowrap"
                >
                  <BsQuestionCircle size={24} className="text-info" />
                  <div>
                    <strong className="d-block">Support</strong>
                    <small>Get help from our support crew</small>
                  </div>
                </Button>
              </Nav.Link>
            </NavDropdown>
            <Dropdown
              className="offcanvas offcanvas-center offcanvas-nav"
              data-bs-theme="dark"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "0 10px",
                color: "gray",
                border: "none",
                width: "20rem",
              }}
            >
              <Dropdown.Toggle
                variant="dark"
                id="megaMenuDropdown"
                className="nav-link dropdown-toggle"
              >
                Mega Menu
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-mega-menu">
                <Container className="px-4 pt-2 pb-2">
                  <Row>
                    <Col lg={12}>
                      <div className="lh-1 mb-5">
                        <h3 className="mb-1">Heading title goes here</h3>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Itaque recusandae officia exercitationem.
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} className="col-12">
                      <div className="border-bottom pb-2 mb-3">
                        <h5 className="mb-0">Heading #1</h5>
                      </div>
                      <div>
                        <ul className="nav flex-column">
                          {generateListItems(7)}
                        </ul>
                        <div className="mt-4">
                          <a
                            href="#"
                            className="btn btn-outline-primary btn-sm"
                          >
                            Button
                          </a>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} className="col-12 mt-4 mt-lg-0">
                      <div className="border-bottom pb-2 mb-3">
                        <h5 className="mb-0">Heading #2</h5>
                      </div>
                      <div>
                        <ul className="nav flex-column">
                          {generateListItems(7)}
                        </ul>
                        <div className="mt-4">
                          <a
                            href="#"
                            className="btn btn-outline-primary btn-sm"
                          >
                            Button
                          </a>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} className="col-12 mt-4 mt-lg-0">
                      <div className="border-bottom pb-2 mb-3">
                        <h5 className="mb-0">Heading #3</h5>
                      </div>
                      <div>
                        <ul className="nav flex-column">
                          {generateListItems(7)}
                        </ul>
                        <div className="mt-4">
                          <a
                            href="#"
                            className="btn btn-outline-primary btn-sm"
                          >
                            Button
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              as={Link}
              to="/SBN-cyberTech/support-services"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "0 10px",
                color: "gray",
              }}
            >
              Support & Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/SBN-cyberTech/about"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "0 10px",
                color: "gray",
              }}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/SBN-cyberTech/login"
              className="btn bg-info"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                margin: "0 10px",
                color: "gray",
              }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
