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
            className={`d-flex h-100 align-items-center gap-2 nav-logo ${
              theme ? "logo-light" : "logo-dark"
            }`}
            style={{fontFamily:"'Playfair Display', sans-serif"}}
          >
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

            {/* Theme Toggle */}
            <label className="theme-switch">
              <input
                type="checkbox"
                id="mode-toggle"
                checked={!theme}
                onChange={() => dispatch(changeTheme())}
              />
              <span className="slider"></span>
            </label>
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
                <button onClick={() => window.open('https://drive.google.com/file/d/1-XNYsdXUf861wGJvqhNYMAkTxuFAC1JC/view?usp=sharing', '_blank')}
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
                  }`} onClick={() => window.location.href = '#contact-me'}
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
