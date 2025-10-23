
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Todo+Lists | Built by Kenneth Ward Jr.</p>
      <nav className="footer-nav">
        <Link to="/about">About</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </footer>
  );
}

export default Footer;
