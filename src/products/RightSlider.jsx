import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaVideo, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./RightSlider.css";

const RightSlider = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const iconStyle = {
    marginRight: "10px",
    marginTop: "5px", // Add margin between icons and links
  };

  const linkStyle = {
    color: "gray",
    textDecoration: "none",
  };

  return (
    <>
      <div
        className={`open-slider-button-container ${show ? "show" : ""}`}
        onMouseEnter={handleShow}
        onMouseLeave={handleClose}
        style={{
          background: "black",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div className="icon-container">
          <FaPhone size={20} className="text-info" style={iconStyle} />
          <Link to="/phone" style={linkStyle} className="hover-link">
            Long text that is a link
          </Link>
        </div>
        <div className="icon-container">
          <FaEnvelope size={20} className="text-info" style={iconStyle} />
          <Link to="/email" style={linkStyle} className="hover-link">
            Long text that is a link
          </Link>
        </div>
        <div className="icon-container">
          <FaVideo size={20} className="text-info" style={iconStyle} />
          <Link to="/video" style={linkStyle} className="hover-link">
            Long text that is a link
          </Link>
        </div>
        <div className="icon-container">
          <FaCamera size={20} className="text-info" style={iconStyle} />
          <Link to="/camera" style={linkStyle} className="hover-link">
            Long text that is a link
          </Link>
        </div>
      </div>
    </>
  );
};

export default RightSlider;
