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
          className={`right-side-bar p-0 m-0 ${
            theme ? "bg-1-light" : "bg-1-dark"
          }`}
        >
          <div className="d-flex justify-content-between align-items-center p-2 pt-0">
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
          <div className="sidebar-content text-center">
            <div className="profile-photo-wrapper">
              <img
                src="/images/profilephoto.png"
                alt="My Photo"
                className="profile-photo border border-5 border-dark"
              />
            </div>
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-title">Web Developer</p>

            <div className="social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
            </div>

            <div className="action-buttons">
              <button className="btn btn-outline-light">Download CV</button>
              <button className="btn btn-outline-light">Contact Me</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
