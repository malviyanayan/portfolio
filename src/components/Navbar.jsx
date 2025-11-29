import { useRef, useState } from "react";
import "../css/navbar.css";
import { changeTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import FadeInOnScroll from "./animation/FadeInOnScroll";

const Navbar = () => {
  const menuRef = useRef(null);
  let theme = useSelector((state) => state.theme.value); // Accessing the theme state
  const [sidebar, setSidebar] = useState(false);
  // console.log("Current theme value:", theme);

  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar-container">
        <div
          className={`my-navbar d-flex justify-content-between align-items-center ${
            theme ? "nav-light" : "nav-dark"
          }`}
        >
          <div
            className={`d-flex h-100 align-items-center gap-2 fw-bold nav-logo ${
              theme ? "logo-light" : "logo-dark"
            }`}
            style={{ fontFamily: "'Playfair Display', sans-serif" }}
          >
            <i className="fa-solid fa-robot"></i>
            Nayan Malviya
          </div>

          <div className="nav-links gap-4 align-items-center fw-medium">
            <a href="#home" className={`${theme ? "link-light" : "link-dark"}`}>
              Home
            </a>
            <a
              href="#about"
              className={`${theme ? "link-light" : "link-dark"}`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`${theme ? "link-light" : "link-dark"}`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`${theme ? "link-light" : "link-dark"}`}
            >
              Skills
            </a>
            {/* <a href="#contact" className="contact-btn">
            Resume
          </a> */}

            {/* Hamburger Menu */}
          </div>
          <button
            className={`hamburger-btn ${
              theme ? "hamburger-light" : "hamburger-dark"
            }`}
            onClick={() => setSidebar(!sidebar)} // optional toggle logic
          >
            &#9776; {/* Unicode hamburger symbol */}
          </button>
        </div>
      </div>

      {/* right side baar whick can contain lots of images and photos
       */}

      {sidebar && (
        <div
          style={{ height: "100vh" }}
          className={`right-side-bar p-0 m-0 ${
            theme ? "bg-1-light" : "bg-1-dark"
          }`}
        >
          <div
            className={`position-sticky top-0 w-100 d-flex align-items-center justify-content-between px-2 py-2 ${
              theme ? "head-white" : "head-black"
            }`}
          >
            <button
              className="close-sidebar-btn fs-1 mt-0 pt-0"
              onClick={() => setSidebar(!sidebar)}
            >
              &times;
            </button>

            <label className="switch">
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r="5" cy="12" cx="12"></circle>
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                  </g>
                </svg>
              </span>

              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                </svg>
              </span>

              <input
                type="checkbox"
                className="input"
                onChange={() =>
                  alert(
                    "After the recent update, this feature is under construction. A better version is coming soon!"
                  )
                }
              />

              <span className="slider"></span>
            </label>

            {/* Theme Toggle - It is Old Version Off Theme Toggle and It Deprecated from 29/11/2025-------- */}
            {/* <label className="theme-switch">
              <input
                type="checkbox"
                id="mode-toggle"
                // checked={!theme}
                checked={theme}
                onChange={() => alert("Sorry! After the recent update, this feature is under construction. A better version is coming soon")}
              />
              <span className="slider"></span>
            </label> */}
            {/* 29/11/2025--------  */}
          </div>

          {/* Sidebar Content Here */}
          <div className="sidebar-content text-center mt-0">
            <div className="profile-photo-wrapper">
              <FadeInOnScroll>
                <img
                  src="/images/nayan2.png"
                  alt="My Photo"
                  className="profile-photo border border-5 border-dark"
                />
              </FadeInOnScroll>
            </div>
            <FadeInOnScroll>
              <h2
                className={`profile-name ${theme ? "logo-light" : "logo-dark"}`}
              >
                Nayan Malviya
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <p
                className={`profile-title fs-6 ${
                  theme ? "text-dark" : "text-light"
                }`}
              >
                Aspiring Full Stack Developer
              </p>
            </FadeInOnScroll>

            <div
              className={`social-icons ${
                theme ? "social-icons-light" : "social-icons-dark"
              }`}
            >
              {/* LinkedIn */}
              <FadeInOnScroll>
                <a
                  href="https://www.linkedin.com/in/nayanmalviya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </FadeInOnScroll>

              {/* GitHub */}
              <FadeInOnScroll>
                <a
                  href="https://github.com/malviyanayan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </FadeInOnScroll>

              {/* LeetCode */}
              <FadeInOnScroll>
                <a
                  href="https://leetcode.com/u/malviyanayan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-code"></i>
                </a>
              </FadeInOnScroll>

              {/* X (Twitter) */}
              {/* <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a> */}
            </div>

            <div className="action-buttons">
              <FadeInOnScroll>
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1-XNYsdXUf861wGJvqhNYMAkTxuFAC1JC/view?usp=sharing",
                      "_blank"
                    )
                  }
                  className={`custom-btn ${
                    theme ? "btn-light-mode" : "btn-dark-mode"
                  }`}
                >
                  Resume
                </button>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <button
                  className={`custom-btn ${
                    theme ? "btn-light-mode" : "btn-dark-mode"
                  }`}
                  onClick={() => (window.location.href = "#contact-me")}
                >
                  Contact Me
                </button>
              </FadeInOnScroll>
            </div>

            {/* links */}
            <div className="sidebar-links mt-4">
              <FadeInOnScroll>
                <a
                  href="#home"
                  className={`sidebar-link ${
                    theme ? "sidebar-link-light" : "sidebar-link-dark"
                  }`}
                >
                  <i className="fas fa-home me-2"></i> Home
                </a>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <a
                  href="#about"
                  className={`sidebar-link ${
                    theme ? "sidebar-link-light" : "sidebar-link-dark"
                  }`}
                >
                  <i className="fas fa-user me-2"></i> About
                </a>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <a
                  href="#projects"
                  className={`sidebar-link ${
                    theme ? "sidebar-link-light" : "sidebar-link-dark"
                  }`}
                >
                  <i className="fas fa-laptop-code me-2"></i> Projects
                </a>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <a
                  href="#skills"
                  className={`sidebar-link ${
                    theme ? "sidebar-link-light" : "sidebar-link-dark"
                  }`}
                >
                  <i className="fas fa-code me-2"></i> Skills
                </a>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
