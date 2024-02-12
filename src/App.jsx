import React from "react";
import MyNavbar from "./MyNavbar";
import Home from "./home/Home";
import Footer from "./Footer"; // if exported as default
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./products/Product";
import Solution from "./solutions/Solution";
import Support from "./supports/Support";
import About from "./about/About";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/solutions" element={<Solution />} />
        <Route exact path="/support-services" element={<Support />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
