import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo_original.svg";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarColor(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleScrollTo = (e, item) => {
    e.preventDefault();
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(item);
    }
    setMenuOpen(false);
  };

  const navItems = [
    "home",
    "about",
    "certifications",
    "services",
    "gallery",
    "contact-us",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        navbarColor ? "bg-[#212EA0]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, "home")}>
          <img
            src={logo.src}
            alt="220.am Logo"
            className="w-44 cursor-pointer select-none"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-base font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={(e) => handleScrollTo(e, item)}
              className={`cursor-pointer transition-colors hover:text-yellow-300 ${
                activeSection === item ? "underline text-yellow-300" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white cursor-pointer z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-[#212EA0] text-white px-6 py-20 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={(e) => handleScrollTo(e, item)}
              className={`cursor-pointer transition-colors hover:text-yellow-300 ${
                activeSection === item ? "underline text-yellow-300" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

