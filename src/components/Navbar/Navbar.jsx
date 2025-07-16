import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/Logo.svg';
import { ProgramsDropDown } from '../ProgramsDropDown';
import './navbar.css';

import LanguageSwitcher from '../LanguageSelector';
export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <div className="log">
              <Link to="/" className="site-logo">
                <img className="site-logo_img" src={logo} alt="site-logo" />
              </Link>
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-item_link">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="dropdown-label  nav-item_link">Programs</span>
                {showDropdown && <ProgramsDropDown />}
              </li>
              <li className="nav-item">
                <Link to="/finance-tools" className="nav-item_link">
                  Finance Tools
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-item_link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-right">
              <LanguageSwitcher />

              <Link to="/signin" className="signin-link">
                Sign in
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="navbar-left">
    <Link to="/" className="logo">
    YourLogo
    </Link>
    </div>
    
    <div className="navbar-center">
    <Link to="/" className="nav-item">Home</Link>
    <div className="nav-item dropdown">
    <span className="dropdown-title">Programs ▾</span>
    <div className="dropdown-menu">
    <Link to="/programs/international" className="dropdown-item">International Programs</Link>
    <Link to="/programs/specialized" className="dropdown-item">Specialized Courses</Link>
    <Link to="/programs/islamic-finance" className="dropdown-item">Islamic Finance Course</Link>
    <Link to="/programs/certification" className="dropdown-item">Certification Program</Link>
    </div>
    </div>
    <Link to="/finance-tools" className="nav-item">Finance Tools</Link>
    <Link to="/contact" className="nav-item">Contact</Link>
    </div>
    
    <div className="navbar-right">
    <Link to="/signin" className="nav-item">Sign In</Link>
  </div> */}
      </nav>
    </>
  );
};
