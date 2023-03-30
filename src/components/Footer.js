import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img class="logo-footer" src="../images/logo.svg" alt="logo" className="logo-one" />
      </div>
      <div className="footer-columns">
        <div className="footer-column1">
          <p className="footer-text"><a href="/">Home page</a></p>
          <p className="footer-text"><a href="/search">Search</a></p>
        </div>
        <div className="footer-column2">
          <p className="footer-text"><a href="/categories">Categories</a></p>
          <p className="footer-text"><a href="/">Movies</a></p>
        </div>
      </div>
      <div className="copyright">Copyright © 2023 cinemacraze.ca</div>
    </div>
  );
};

export default Footer;