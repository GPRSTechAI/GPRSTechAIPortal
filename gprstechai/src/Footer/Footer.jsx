import "./Footer.css";
import React from "react";

function template() {
  return (
    <footer style={{ background: '#282c34', color: 'white', padding: '10px', textAlign: 'center' }}>
    <p>&copy; {new Date().getFullYear()} GPRSTechAI. All Rights Reserved.</p>
  </footer>
  );
};

export default template;
