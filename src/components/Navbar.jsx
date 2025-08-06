import { useRef, useState } from "react";
import "../css/navbar.css";
import { changeTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

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
          <div className={`nav-logo ${theme ? "logo-light" : "logo-dark"}`}>
            🌌Nayan Malviya
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
              href="#project"
              className={`${theme ? "link-light" : "link-dark"}`}
            >
              Project
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
          <div className="d-flex justify-content-between align-items-center p-2 pt-0 position-fixed w-100">
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
                onChange={() => dispatch(changeTheme())}
              />
              <span className="slider"></span>
            </label>
          </div>

          {/* Sidebar Content Here */}
          <div className="sidebar-content text-center mt-5">
            <div className="profile-photo-wrapper">
              <img
                src="/images/profilephoto.png"
                alt="My Photo"
                className="profile-photo border border-5 border-dark"
              />
            </div>
            <h2
              className={`profile-name ${theme ? "logo-light" : "logo-dark"}`}
            >
              Nayan Malviya
            </h2>
            <p
              className={`profile-title fs-6 ${
                theme ? "text-dark" : "text-light"
              }`}
            >
              Aspiring Full Stack Developer
            </p>

            <div
              className={`social-icons ${
                theme ? "social-icons-light" : "social-icons-dark"
              }`}
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-code"></i>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>

            <div className="action-buttons">
              <button
                className={`custom-btn ${
                  theme ? "btn-light-mode" : "btn-dark-mode"
                }`}
              >
                Resume
              </button>
              <button
                className={`custom-btn ${
                  theme ? "btn-light-mode" : "btn-dark-mode"
                }`}
              >
                Contact Me
              </button>
            </div>

            {/* links */}
            <div className="sidebar-links mt-4">
              <a
                href="#home"
                className={`sidebar-link ${
                  theme ? "sidebar-link-light" : "sidebar-link-dark"
                }`}
              >
                <i className="fas fa-home me-2"></i> Home
              </a>
              <a
                href="#about"
                className={`sidebar-link ${
                  theme ? "sidebar-link-light" : "sidebar-link-dark"
                }`}
              >
                <i className="fas fa-user me-2"></i> About
              </a>
              <a
                href="#project"
                className={`sidebar-link ${
                  theme ? "sidebar-link-light" : "sidebar-link-dark"
                }`}
              >
                <i className="fas fa-laptop-code me-2"></i> Project
              </a>
              <a
                href="#skills"
                className={`sidebar-link ${
                  theme ? "sidebar-link-light" : "sidebar-link-dark"
                }`}
              >
                <i className="fas fa-code me-2"></i> Skills
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
