import "./Body.css";
import React from "react";

function template() {
  return (
    <main style={{ padding: '20px' }}>
    <h2>Welcome to GPRStechAI</h2>
    <p>Your partner in cutting-edge AI solutions.</p>
    
    <section id="services">
      <h3>Our Services</h3>
      <ul>
        <li>AI Consulting</li>
        <li>Data Analytics</li>
        <li>Machine Learning Solutions</li>
        <li>Custom Software Development</li>
      </ul>
    </section>
    
    <section id="about">
      <h3>About Us</h3>
      <p>GPRTechAI is dedicated to providing innovative AI technologies that empower businesses to thrive.</p>
    </section>
  </main>
  );
};

export default template;
