import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import logo from "../../../assets/images/icon.png";
import { NavLink, useLocation } from "react-router-dom";
const Header = (props) => {
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
          <a href="##">تحميل التطبيق</a>
        </div>
        <div className="menu_icon" onClick={toggleMenuAction}>
          <i className="ri-menu-2-line"></i>
        </div>
      </Container>
    </header>
  );
};

export default Header;
