import { useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import Features from "./components/Features";
import Hero from "./components/hero";
import TestemonialSection from "./components/testemonialsection";
import Pricing from "./components/pricing";
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
