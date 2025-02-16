import { useState, useEffect } from "react";
import logo from "../../assets/logo_original.svg";
import "./Navbar.css";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false); // For navbar color change
  const [activeSection, setActiveSection] = useState("home"); // For active menu item

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarColor(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`container ${navbarColor ? "scrolled" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        {[
          "home",
          "services",
          "projects",
          "about",
          "pictures",
          "contact us",
        ].map((item) => (
          <li
            key={item}
            onClick={() => setActiveSection(item)}
            className={activeSection === item ? "btn" : ""}
          >
            <a href={`#${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
