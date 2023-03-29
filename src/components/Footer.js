import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img class="logo-footer" src="../images/logo.svg" alt="logo" className="logo-one" />
      </div>
      <div className="footer-columns">
        <div className="footer-column1">
          <p className="footer-text">Home page</p>
          <p className="footer-text">Search</p>
          <p className="footer-text">Movies</p>
        </div>
        <div className="footer-column2">
          <p className="footer-text">Categories</p>
          <p className="footer-text">About</p>
          <p className="footer-text">Actors</p>
        </div>
      </div>
      <div className="copyright">Copyright © 2023 cinemacraze.ca</div>
    </div>
  );
};

export default Footer;