import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <ul className="menu">
        <li className="nav-item">
          <NavLink to="/marketplace" activeClassName="active-link">Marketplace</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/artists" activeClassName="active-link">Artists</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/community" activeClassName="active-link">Community</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/collections" activeClassName="active-link">Collections</NavLink>
        </li>
        <li className="nav-item ms-auto">
          <button className="CTA ms-auto">
            <NavLink to="/contact" className="text-wrapper-2">Contact</NavLink>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
