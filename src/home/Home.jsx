import React from "react";
import "./body.css";
import FirstLine from "./FirstLine";
import SecondLine from "./SecondLine";
import ThirdLine from "./ThirdLine";
import FourthLine from "./FourthLine";
import FiveLine from "./FiveLine";
import SixLine from "./SixLine";
import SevenLine from "./Sevenline";

const Home = () => {
  return (
    <div
      style={{
        width: "100%", // Set the width to 100%
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        marginTop: "75px",
        backgroundColor: "black",
        color: "gray",
        fontFamily: "Roboto",
      }}
    >
      <FirstLine />
      <SecondLine />
      <ThirdLine />
      <FourthLine />
      <FiveLine />
      <SixLine />
      <SevenLine />
    </div>
  );
};

export default Home;
