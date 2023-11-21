import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const mobile = useMediaQuery({ query: "(max-width: 820px)" });

  return (
    <>
      {!mobile && (
        <header>
          <nav className="header_nav">
            <ul>
              <li className="header_nav_item">
                <Link to="/about">About</Link>
              </li>
              <li className="header_nav_item">
                <Link to="/awards">awards</Link>
              </li>
              <li className="header_nav_item">
                <Link to="/press">Press</Link>
              </li>
              <li className="header_nav_item">
                <Link to="/donation">donation</Link>
              </li>
              <li className="header_nav_item">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div
            className={
              pathname === "/" ? "header_logo main_head" : "header_logo"
            }>
            <Link to="/">
              <div className="header_logo_inner">
                <div className="header_logo_inner-big">HOYIN</div>
                <div className="header_logo_inner-small">
                  <span>FOUNDATION</span>
                  <span>효인재단</span>
                </div>
              </div>
            </Link>
          </div>
        </header>
      )}
      {mobile && (
        <>
          <div className="header_mobile">
            <button className="header_mobile_btn">
              <span className="header_mobile_hamburger"></span>
            </button>
          </div>
          <div
            className={
              pathname === "/" ? "header_logo main_head" : "header_logo"
            }>
            <Link to="/">
              <div className="header_logo_inner">
                <div className="header_logo_inner-big">HOYIN</div>
                <div className="header_logo_inner-small">
                  <span>FOUNDATION</span>
                  <span>효인재단</span>
                </div>
              </div>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
