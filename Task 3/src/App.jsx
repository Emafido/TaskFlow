import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Hero from "./components/Hero";
import TestemonialSection from "./components/Testemonialsection";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <TestemonialSection />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
