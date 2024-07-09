import React from 'react';
import './Navbar.css';

interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" className="navbar-logo">
          CodeGuru
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${currentPage === 'messages' ? 'active' : ''}`}
          >
            Messages
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Explore
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              Users
            </a>
            <a className="dropdown-item" href="#">
              Bots
            </a>
            <a className="dropdown-item" href="#">
              External Sources
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${currentPage === 'settings' ? 'active' : ''}`}
          >
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;