import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#282c34', color: 'white', padding: '10px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} GPRSTechAI. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
