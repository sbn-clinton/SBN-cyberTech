import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Gear,
  Display,
  Calendar,
  House,
  Toggles2,
  GeoFill,
  Tools,
} from "bootstrap-icons-react"; // Import icons

const IconGrid = () => {
  const icons = [
    Gear,
    Display,
    Calendar,
    House,
    Toggles2,
    GeoFill,
    Tools,
    Display,
  ];

  return (
    <Container className="px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Icon grid</h2>

      <div
        style={{
          padding: "20px",
          border: "1px solid gray",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            padding: "5px",
            border: "2px solid skyblue",
            borderRadius: "10px",
          }}
        >
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            {icons.map((Icon, index) => (
              <Col key={index} className="d-flex align-items-center ">
                <Icon
                  className="bi text-body-info text-info flex-shrink-0 m-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h3 className="fw-bold mb-0 fs-4 ">Featured title</h3>
                  <p>Paragraph of text beneath the heading</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default IconGrid;
