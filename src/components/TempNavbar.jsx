import { useRef, useState } from "react";
import "../css/navbar.css";
import { changeTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const TempNavbar = () => {
  const menuRef = useRef(null);
  let theme = useSelector((state) => state.theme.value); // Accessing the theme state
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div
          className={`my-navbar d-flex justify-content-between align-items-center ${
            theme ? "nav-light" : "nav-dark"
          }`} 
          style={{zIndex : '1024'}}
        >
          <div
            className={`d-flex h-100 align-items-center gap-2 nav-logo ${
              theme ? "logo-light" : "logo-dark"
            }`}
          >
            <img src="/fabicon1.svg" width={28} />
            Nayan Malviya
          </div>

          <button
            className={`hamburger-btn btn btn-primary ${
              theme ? "hamburger-light" : "hamburger-dark"
            }`}
            onClick={()=> window.location.href = '/'}
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default TempNavbar;
