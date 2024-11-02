import "./Header.css";
import logo from "../logo.svg";
import React from "react";

function template() {
  return (
    <header style={{ background: '#282c34', padding: '20px', color: 'white' }}>
      <h1><img src={logo} className="App-logo" alt="logo" />   GPRS Tech AI </h1>
      <nav>
        <a href="#services" style={{ margin: '0 15px', color: 'white' }}>Services</a>
        <a href="#about" style={{ margin: '0 15px', color: 'white' }}>About Us</a>
        <a href="#contact" style={{ margin: '0 15px', color: 'white' }}>Contact</a>
      </nav>
    </header>
  );
};

export default template;
