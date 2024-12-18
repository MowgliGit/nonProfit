import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import SidebarNavigation from "./SideNavigation";

function ResponsiveNavigation() {
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
        { id: 1, title: "About Us", link: "/about" },
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
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {windowWidth >= 990 ? (
        <Navigation menu={menu} />
      ) : (
        <SidebarNavigation
          menu={menu}
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          toggleSubmenu={toggleSubmenu}
          openSubmenuIndex={openSubmenuIndex}
        />
      )}
    </>
  );
}

export default ResponsiveNavigation;
