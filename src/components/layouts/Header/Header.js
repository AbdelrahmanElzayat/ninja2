import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import logo from "../../../assets/images/icon.png";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = (props) => {
  const [url, setUrl] = useState();
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Function to check if device is iOS
    const isIOS = () => {
      return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    };

    // Function to check if device is Android
    const isAndroid = () => {
      return /android/i.test(userAgent);
    };

    // Function to check if device is Windows
    const isWindows = () => {
      return /windows/i.test(userAgent);
    };

    // Function to check if device is Mac
    const isMac = () => {
      return /macintosh|mac os x/i.test(userAgent);
    };

    //   console.log(isIOS());

    if (isIOS() || isMac()) {
      setUrl("https://apps.apple.com/eg/app/id6496852097");
    } else if (isAndroid() || isWindows()) {
      setUrl("https://play.google.com/store/apps/details?id=net.ninjaHome.app");
    } else {
      // Default redirection if platform is not recognized
      setUrl("https://play.google.com/store/apps/details?id=net.ninjaHome.app");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollY > 60 ? setScrolled(true) : setScrolled(false);
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setScrolled(true) : setScrolled(false);
    });
  }, []);
  const menuRef = useRef(null);
  const toggleMenuAction = () =>
    menuRef.current.classList.toggle("active_menu");
  return (
    <header className={`${props.class} ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <div className="logoHeader">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div
          className="navBar navigation"
          ref={menuRef}
          onClick={toggleMenuAction}
        >
          <ul className="menu" onClick={(e) => e.stopPropagation()}>
            <li>
              <NavLink to="/">الرئيسية</NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={
                  location.pathname.includes("/blogs") ||
                  location.pathname.includes("/blogDetails")
                    ? "active"
                    : ""
                }
              >
                المدونه
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">من نحن</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">تواصل معنا</NavLink>
            </li>
            <li>
              <NavLink to="/location">أماكن الفروع</NavLink>
            </li>
          </ul>
        </div>
        <div className="btndownload">
          <Link to={url} target="blank">
            تحميل التطبيق
          </Link>
        </div>
        <div className="menu_icon" onClick={toggleMenuAction}>
          <i className="ri-menu-2-line"></i>
        </div>
      </Container>
    </header>
  );
};

export default Header;
