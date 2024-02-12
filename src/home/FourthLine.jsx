import React from "react";
import { Image } from "react-bootstrap";

const FourthLine = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const imageUrl =
    "https://media.istockphoto.com/id/170098228/photo/world-map-on-blackboard.jpg?s=1024x1024&w=is&k=20&c=V-eLcDEre4-s1zlwb-KVGWl4wDVZ6gW1oPGG61MyAj8=";
  const altText = "Your Alt Text";
  const overlayText =
    "Distance is not a barrier, Get Connected with us anywhere around the Global";

  const overlayTextStyle = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    wordWrap: "break-word", // Add this line for text wrapping
  };

  const headingStyle = {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
  };

  return (
    <div style={containerStyle}>
      <Image src={imageUrl} alt={altText} fluid style={{ width: "100%" }} />
      <h1 style={headingStyle}>Securing the Universe</h1>
      <div style={overlayTextStyle} className="d-none d-md-block">
        {overlayText}
      </div>
    </div>
  );
};

export default FourthLine;
