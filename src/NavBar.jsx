import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');
  return (
    <nav className="nav">
      <NavLink to="/" className={linkClass} end>Home</NavLink>
      <NavLink to="/todos" className={linkClass}>Todos</NavLink>
      <NavLink to="/lists" className={linkClass}>Lists</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
    </nav>
  );
}

export default NavBar;
