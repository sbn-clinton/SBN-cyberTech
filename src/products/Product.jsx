import React from "react";
import FirstLine from "./firstLine";
import RightSlider from "./RightSlider";
import Album from "./Album";
import IconGrid from "./IconGrid";
import CustomCards from "./CustomCard";
import HomeCards from "./HomeCards";
import HeroCarousel from "./HeroCarousel";
import HeroSection from "./HeroSection";

const Product = () => {
  return (
    <div
      style={{
        width: "100%", // Set the width to 100%
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        marginTop: "75px",
        paddingBottom: "1px",
        backgroundColor: "black",
        color: "gray",
        fontFamily: "Roboto",
      }}
    >
      <FirstLine />
      <RightSlider />
      <Album />
      <IconGrid />
      <CustomCards />
      <HomeCards />
      <HeroCarousel />
      <HeroSection />
    </div>
  );
};

export default Product;
