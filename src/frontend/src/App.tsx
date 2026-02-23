import React, {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/landing/Footer";

// Landing page sections
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import PropertyTypes from "./components/landing/PropertyTypes";
import HowItWorks from "./components/landing/HowItWorks";
import Pricing from "./components/landing/Pricing";

// New Pages
import Buy from "./pages/public/Buy";
import Sell from "./pages/public/Sell";
import Rent from "./pages/public/Rent";
import FindAgency from "./pages/public/FindAgency";

function Landing() {
  return (
    <main className="overflow-x-hidden">
      <section id="hero">
        <Hero />
      </section>

      <section id="features" className="py-20">
        <Features />
      </section>

      <section id="property-types" className="py-20 bg-gray-50">
        <PropertyTypes />
      </section>

      <section id="how-it-works" className="py-20">
        <HowItWorks />
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <Pricing />
      </section>
    </main>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="font-sans text-primary bg-surface min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/find-agency" element={<FindAgency />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;