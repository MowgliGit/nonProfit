import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import AboutPage from "./components/aboutPage/AboutPage";
import ContactPage from "./components/contactPage/ContactPage";
import "./App.css";
import "./MediaQueries.css";

function App() {
  const menu = [
    {
      id: 1,
      title: "Home",
      link: "/",
      subItems: [
        { id: 1, title: "Home Charity", link: "/home-charity" },
        { id: 2, title: "Home Education", link: "/home-education" },
        { id: 3, title: "Home Wildlife", link: "/home-wildlife" },
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
      ],
    },
    {
      id: 5,
      title: "Blog",
      link: "/blog",
      subItems: [
        { id: 1, title: "Blog right sidebar", link: "/blog-right-sidebar" },
        { id: 2, title: "Blog left sidebar", link: "/blog-left-sidebar" },
      ],
    },
    {
      id: 6,
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage menu={menu} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
