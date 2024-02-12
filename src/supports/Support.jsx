import React from "react";
import FeaturedHighlights from "./FeaturedHighlights";
import HireJamstackSection from "./HireJamstackSection";
import FeaturedWorkSection from "./FeaturedWorkSection";
import BlogSection from "./BlogSection";
import BlogList from "./MySwiperComponent";
import SignUp from "./SignUp";

const Support = () => {
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
      <FeaturedHighlights />
      <HireJamstackSection />
      <FeaturedWorkSection />
      <BlogSection />
      <BlogList />
      <SignUp />
    </div>
  );
};

export default Support;
