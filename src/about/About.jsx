import React from "react";
import AboutMe from "./AboutMe";
import FiveMillionMembers from "./FiveMillionMembers";
import PortfolioProject from "./PortfolioProject";
import TextFeature from "./TextFeature";

const About = () => {
  return (
    <div
      className="text-secondary bg-black"
      data-bs-theme="dark"
      style={{
        width: "100%", // Set the width to 100%
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        marginTop: "75px",
        paddingBottom: "1px",
        fontFamily: "Roboto",
      }}
    >
      <AboutMe />
      <FiveMillionMembers />
      <PortfolioProject />
      <TextFeature />
    </div>
  );
};

export default About;
