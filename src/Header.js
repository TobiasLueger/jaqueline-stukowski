import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import photo from "./assets/img/JaqStu.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (event) => {
    if (menuOpen && !event.target.closest("#menuButton")) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  return (
    <>
      <header id="header">
        <div className="header_logo">
          <a href="/">
            <img src={photo} alt="Jaqueline Stukowski" />
          </a>
        </div>
        <nav className="header_nav-desktop">
          <a
            href="#projekte"
            className={({ isActive }) =>
              isActive ? "process-link active-link" : "process-link"
            }
          >
            Projekte
            <svg
              className="header_nav-desktop-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="106"
              height="8"
              fill="none"
            >
              <path
                id="nav-desktop-svg"
                stroke="url(#a)"
                strokeLinecap="round"
                d="M95.345 6.439C63.897 6.439 1 6.018 1 4.333c0-2.107 94.345 0 94.345-2.107C95.345.12 8.702 9.311 8.702 6.44s98.195 0 96.27-2.106c-1.925-2.107-77.015-5.016-77.015-2.107"
              />
            </svg>
          </a>
          <a
            href="#kontakt"
            className={({ isActive }) =>
              isActive ? "about-link active-link" : "about-link"
            }
          >
            Kontakt
            <svg
              className="header_nav-desktop-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="8"
              fill="none"
            >
              <path
                id="nav-desktop-svg-about"
                stroke="url(#a)"
                strokeLinecap="round"
                d="M62.687 6.439C42.125 6.439 1 6.018 1 4.333c0-2.107 61.687 0 61.687-2.107C62.687.12 6.036 9.311 6.036 6.44s64.205 0 62.946-2.106c-1.26-2.107-50.356-5.016-50.356-2.107"
              />
            </svg>
          </a>
        </nav>
        <nav className="header_nav-mobile">
          <button
            id="menuButton"
            className={`menu-button ${menuOpen ? "close" : ""}`}
            onClick={toggleMenu}
          >
            Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="33"
              fill="none"
              viewBox="0 0 40 33"
              style={{
                position: "absolute",
                top: "50%",
                right: "10%",
                transform: "translateY(-50%)",
              }}
            >
              <path
                stroke="url(#m)"
                strokeLinecap="round"
                d="M31 11.5c-43-25-23 28-1.1 14.3C40.5 19.2 44.5.4 27 1.1c-39.3 1.8-14.8 47 7 24.7C46.4 13.2 6.2-18.8 1 19.5"
              />
              <defs>
                <linearGradient
                  id="m"
                  x1="-3.7"
                  x2="37"
                  y1="24.7"
                  y2="7.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFA1A1" />
                  <stop offset=".5" stopColor="#EDD1CD" />
                  <stop offset="1" stopColor="#CDE052" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </nav>
      </header>
      <div id="menuItems" style={{ display: menuOpen ? "block" : "none" }}>
        <a className="menu" exact to="/">
          Home
        </a>
        <a className="menu" href="#projekte">
          Projekte
        </a>
        <a className="menu" href="#kontakt">
          Kontakt
        </a>
        <button
          className="menu_main_button"
          onClick={() => {
            const email = "jaqueline.stukowski@outlook.de".replace(/&/g, ".");
            window.open(`mailto:${email}`, "_blank");
          }}
        >
          <div className="main_send-message">Nachricht senden</div>
          <div className="main_buttonSVG">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="191"
              height="103"
              fill="none"
            >
              <path
                stroke="url(#ab)"
                id="SMbuttonSVG"
                d="M29.126 84c28 25.156 114.5 31 151.5-31 37.777-63.302-74-56.023-118.5-43.5-46.71 13.145-111.5 52 2.5 77.5s170.924-47.514 82.5-74c-108.5-32.5-182 13.5-118 71Z"
              />
            </svg>
          </div>
        </button>
        <div className="sidebar">
          <button className="sidebar_button" type="button"></button>
          <ul className="sidebar_list">
            <li className="sidebar_item">
              <a
                className="sidebar_link sidebar_inst"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/jacky_stki/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M5 11.5c0-2.33 0-3.495.38-4.413A5 5 0 0 1 8.086 4.38C9.006 4 10.17 4 12.5 4c2.33 0 3.494 0 4.413.38a5 5 0 0 1 2.706 2.707C20 8.005 20 9.17 20 11.5s0 3.495-.38 4.413a5 5 0 0 1-2.706 2.706C15.994 19 14.83 19 12.5 19c-2.33 0-3.495 0-4.414-.38a5 5 0 0 1-2.706-2.707C5 14.995 5 13.83 5 11.5Zm7.5-3.97a3.97 3.97 0 1 0 0 7.94 3.97 3.97 0 0 0 0-7.94Zm0 6.452a2.485 2.485 0 0 1-2.482-2.482A2.484 2.484 0 0 1 12.5 9.018a2.484 2.484 0 0 1 2.482 2.482 2.485 2.485 0 0 1-2.482 2.482Zm5-6.857a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
