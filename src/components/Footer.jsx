import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container text-center">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="highlight">Nayan Malviya</span>. 
          All Rights Reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/nayan-malviya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/nayanmalviya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:naymalviya@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
