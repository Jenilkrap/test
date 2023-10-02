import React from 'react';
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="frame">
      <div className="content">
        <div className="text">
          <p className="text-wrapper">
            Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!
          </p>
        </div>
        <div className="social-icons">
          <a href="http://www.facebook.com/profile.php?id="><i className="fab fa-facebook-f"></i></a>
          <a href="http://www.linkedin.com/in/"><i className="fab fa-linkedin"></i></a>
          <a href="http://twitter.com/"><i className="fab fa-twitter"></i></a>
          <a href="http://youtube.com/"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
        <div className="div">
          <div className="frame-2">
            <div className="text-wrapper-2">Explore</div>
            <div className="frame-3">
              <NavLink to="/art-signin" className="text-wrapper-3" activeClassName="active-link">Art Sign In</NavLink>
              <NavLink to="/collectibles" className="text-wrapper-4" activeClassName="active-link">Collectibles</NavLink>
              <NavLink to="/domain" className="text-wrapper-4" activeClassName="active-link">Domain Name</NavLink>
              <NavLink to="/utility" className="text-wrapper-4" activeClassName="active-link">Utility</NavLink>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">Statistic</div>
            <div className="frame-3">
              <NavLink to="/ranking" className="text-wrapper-3" activeClassName="active-link">Ranking</NavLink>
              <NavLink to="/activity" className="text-wrapper-4" activeClassName="active-link">Activity</NavLink>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">Company</div>
            <div className="frame-3">
              <NavLink to="/about-us" className="text-wrapper-3" activeClassName="active-link">About Us</NavLink>
              <NavLink to="/career" className="text-wrapper-4" activeClassName="active-link">Career</NavLink>
              <NavLink to="/support" className="text-wrapper-4" activeClassName="active-link">Support</NavLink>
              <NavLink to="/partners" className="text-wrapper-4" activeClassName="active-link">Partners</NavLink>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">Resources</div>
            <div className="frame-3">
              <NavLink to="/help" className="text-wrapper-3" activeClassName="active-link">Help Center</NavLink>
              <NavLink to="/status" className="text-wrapper-4" activeClassName="active-link">Platform Status</NavLink>
              <NavLink to="/blog" className="text-wrapper-4" activeClassName="active-link">Blog</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="p">© Copyright 2023 - davixq</p>
        <div className="frame-4">
          <div className="text-wrapper-5">Privacy Policy</div>
          <div className="text-wrapper-5">Terms &amp; Conditions</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
