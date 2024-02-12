import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiHome, BiTable, BiGrid } from "react-icons/bi";

const AnotherNav = () => {
  return (
    <Navbar bg="dark" variant="dark" className="px-3 py-2 border-bottom">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Navbar.Brand>

        <Nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start text-small">
          <Nav.Link href="#" className="nav-link text-secondary">
            <BiHome className="bi d-block mx-auto mb-1" />
            Home
          </Nav.Link>
          <Nav.Link href="#" className="nav-link text-white">
            <BiHome className="bi d-block mx-auto mb-1" />
            Dashboard
          </Nav.Link>
          <Nav.Link href="#" className="nav-link text-white">
            <BiTable className="bi d-block mx-auto mb-1" />
            Orders
          </Nav.Link>
          <Nav.Link href="#" className="nav-link text-white">
            <BiGrid className="bi d-block mx-auto mb-1" />
            Products
          </Nav.Link>
          <Nav.Link href="#" className="nav-link text-white">
            <BiHome className="bi d-block mx-auto mb-1" />
            Customers
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AnotherNav;
