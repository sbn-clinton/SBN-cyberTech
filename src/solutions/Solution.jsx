import React from "react";
import CustomerStory from "./CustomerStory";
import ValueSection from "./ValueSection";
import HomeSection from "./HomeSection";
import NavTab from "./NavTab";
import SubscribeSection from "./SubscribeSection";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import MySkillSection from "./MySkillSection";
import ProjectSection from "./ProjectSection";
import MainSec from "./MainSec";

const Solution = () => {
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
      <CustomerStory />
      <ValueSection />
      <HomeSection />
      <NavTab />
      <SubscribeSection />
      <TestimonialsSection />
      <AboutSection />
      <MySkillSection />
      <ProjectSection />
      <MainSec />
    </div>
  );
};

export default Solution;
