import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const menu = [
    {
      id: 1,
      title: "Home",
      link: "/",
      subItems: [
        { id: 1, title: "Home Charity", link: "/home-charity" },
        { id: 2, title: "Home Education", link: "/home-education" },
        { id: 3, title: "Home Wildlife", link: "/home-wildlife" },
        { id: 4, title: "Home Ocean Polution", link: "/home-ocean-polution" },
        { id: 5, title: "Home World Pandemic", link: "/home-world-pandemic" },
        { id: 6, title: "Home Nature", link: "/home-nature" },
        { id: 7, title: "Home Nature S2", link: "/home-nature-s2" },
      ],
    },
    {
      id: 2,
      title: "Cause",
      link: "/cause",
      subItems: [
        { id: 1, title: "Cause", link: "/cause" },
        { id: 2, title: "Cause Single", link: "/cause-single" },
      ],
    },
    {
      id: 3,
      title: "Events",
      link: "/events",
      subItems: [
        { id: 1, title: "Events", link: "/events" },
        { id: 2, title: "Events S2", link: "/events-s2" },
        { id: 3, title: "Events Single", link: "/events-single" },
      ],
    },
    {
      id: 4,
      title: "Pages",
      link: "/pages",
      subItems: [
        { id: 1, title: "About", link: "/about" },
        { id: 2, title: "Service", link: "/service" },
        { id: 3, title: "Service Single", link: "/service-single" },
        { id: 4, title: "Project", link: "/project" },
        { id: 5, title: "Project Single", link: "/project-single" },
        { id: 6, title: "Donate", link: "/donate" },
        { id: 7, title: "Volunteer", link: "/Volunteer" },
        { id: 8, title: "Testimonial", link: "/Testimonial" },
      ],
    },
    {
      id: 5,
      title: "Blog",
      link: "/blog",
      subItems: [
        { id: 1, title: "Blog right sidebar", link: "/blog-right-sidebar" },
        { id: 2, title: "Blog left sidebar", link: "/blog-left-sidebar" },
        { id: 3, title: "Blog fullwidth", link: "/blog-full-width" },
        { id: 3, title: "Blog details", link: "/blog-details" },
      ],
    },
    {
      id: 6,
      title: "Contact",
      link: "/contact",
    },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let leaveTimeout;
  const handleMouseEnter = (index) => {
    clearTimeout(leaveTimeout);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    leaveTimeout = setTimeout(() => {
      setActiveIndex(null);
    }, 300);
  };

  const isNotHome = location.pathname !== "/";

  return (
    <header
      className={`navigation ${isScrolled ? "scrolled" : ""} ${
        isNotHome ? "boxShadow" : ""
      }`}
    >
      {windowWidth < 990 && (
        <button
          className={`navbarToggler ${menuOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
        >
          {!menuOpen ? (
            <div className="menuBtn">
              <div className="menuBtnLine"></div>
              <div className="menuBtnLine"></div>
              <div className="menuBtnLine"></div>
            </div>
          ) : (
            <div className="closeIconMobNavBox">
              <FontAwesomeIcon icon={faTimes} className="closeIconMobNav" />
            </div>
          )}
        </button>
      )}
      <div className="logoImageBox">
        <img
          className="logoImage"
          src={`${process.env.PUBLIC_URL}/navigation/logo.png`}
          alt="logo"
        />
      </div>
      <div>{openSubmenuIndex}</div>
      <nav className={`nav ${menuOpen ? "open show" : ""}`}>
        <ul className="navList">
          {menu.map((item, index) => (
            <li
              className="navItem"
              key={item.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navLink active" : "navLink"
                }
                to={item.link}
              >
                {item.title}
              </NavLink>
              {windowWidth < 990 && item.subItems && (
                <div
                  className="arrowIconBox"
                  onClick={() => toggleSubmenu(index)}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrowIcon"
                  />
                </div>
              )}
              {item.subItems && activeIndex === index && (
                <ul
                  className={`subNavList subListOpen ${
                    openSubmenuIndex !== index ? `subListClose` : ""
                  }`}
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id} className="subNavItem">
                      <NavLink className="subNavLink" to={subItem.link}>
                        {subItem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="sideNavBox">
        {windowWidth > 1200 && (
          <div className="donateBtnBox">
            <button className="donateBtn">
              <span>Donate Now</span>
            </button>
          </div>
        )}
        <div className="loopIconBox">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="loopIcon" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
